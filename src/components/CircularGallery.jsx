import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
import { useEffect, useRef } from 'react';

/* --- Utilities --- */
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t;
}

function createTextTexture(gl, text, font = 'bold 30px serif', color = '#C5A02E') {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  const textWidth = Math.ceil(metrics.width);
  const textHeight = Math.ceil(parseInt(font, 10) * 1.2);
  canvas.width = textWidth + 40;
  canvas.height = textHeight + 20;
  context.font = font;
  context.fillStyle = color;
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillText(text, canvas.width / 2, canvas.height / 2);
  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;
  return { texture, width: canvas.width, height: canvas.height };
}

/* --- Media Class (The Premium Frame) --- */
class Media {
  constructor({ geometry, gl, image, index, length, scene, screen, text, viewport, bend, textColor, borderRadius, font }) {
    this.extra = 0;
    this.geometry = geometry;
    this.gl = gl;
    this.image = image;
    this.index = index;
    this.length = length;
    this.scene = scene;
    this.screen = screen;
    this.text = text;
    this.viewport = viewport;
    this.bend = bend;
    this.textColor = textColor;
    this.borderRadius = borderRadius;
    this.font = font;

    this.createShader();
    this.createMesh();
    this.createTitle();
    this.onResize();
  }

  createShader() {
    const texture = new Texture(this.gl, { generateMipmaps: true });
    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          // Subtle stretch based on speed
          p.x += sin(uv.y * 3.1415) * uSpeed * 0.1; 
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        uniform float uOffset;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }
        
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          
          // Premium Parallax Effect
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5 + (uOffset * 0.1), 
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          
          vec4 color = texture2D(tMap, uv);
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          float alpha = 1.0 - smoothstep(-0.002, 0.002, d);
          
          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uPlaneSizes: { value: [0, 0] },
        uImageSizes: { value: [0, 0] },
        uSpeed: { value: 0 },
        uOffset: { value: 0 },
        uBorderRadius: { value: this.borderRadius }
      },
      transparent: true
    });

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = this.image;
    img.onload = () => {
      texture.image = img;
      this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
    };
  }

  createMesh() {
    this.plane = new Mesh(this.gl, { geometry: this.geometry, program: this.program });
    this.plane.setParent(this.scene);
  }

  createTitle() {
    this.title = createTextTexture(this.gl, this.text, this.font, this.textColor);
    const geometry = new Plane(this.gl);
    const program = new Program(this.gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
      uniforms: { tMap: { value: this.title.texture } },
      transparent: true
    });
    this.titleMesh = new Mesh(this.gl, { geometry, program });
    this.titleMesh.setParent(this.plane);
  }

  update(scroll, direction) {
    this.plane.position.x = this.x - scroll.current - this.extra;
    
    // Normalized position (-1 to 1)
    const normPos = this.plane.position.x / (this.viewport.width / 2);
    this.program.uniforms.uOffset.value = normPos;

    const x = this.plane.position.x;
    const H = this.viewport.width / 2;

    if (this.bend !== 0) {
      const B_abs = Math.abs(this.bend);
      const R = (H * H + B_abs * B_abs) / (2 * B_abs);
      const effectiveX = Math.min(Math.abs(x), H);
      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
      this.plane.position.y = this.bend > 0 ? -arc : arc;
      this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
    }

    this.program.uniforms.uSpeed.value = scroll.current - scroll.last;

    const planeOffset = this.plane.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;
    if (direction === 'right' && this.plane.position.x + planeOffset < -viewportOffset) this.extra -= this.widthTotal;
    if (direction === 'left' && this.plane.position.x - planeOffset > viewportOffset) this.extra += this.widthTotal;
  }

  onResize({ screen, viewport } = {}) {
    if (screen) this.screen = screen;
    if (viewport) this.viewport = viewport;

    const isMobile = this.screen.width < 768;
    this.scale = this.screen.height / (isMobile ? 1200 : 1500);
    
    this.plane.scale.y = (this.viewport.height * (isMobile ? 600 : 800) * this.scale) / this.screen.height;
    this.plane.scale.x = (this.viewport.width * (isMobile ? 450 : 600) * this.scale) / this.screen.width;
    
    this.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];
    
    // Position title
    const aspect = this.title.width / this.title.height;
    const tHeight = this.plane.scale.y * 0.12;
    this.titleMesh.scale.set(tHeight * aspect, tHeight, 1);
    this.titleMesh.position.y = -this.plane.scale.y * 0.5 - tHeight * 1.5;

    this.padding = isMobile ? 1.5 : 2.5;
    this.width = this.plane.scale.x + this.padding;
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;
  }
}

/* --- App Controller --- */
class App {
  constructor(container, { items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase }) {
    this.container = container;
    this.items = items;
    this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0 };
    this.isDown = false;
    
    this.renderer = new Renderer({ alpha: true, antialias: true, dpr: Math.min(window.devicePixelRatio, 2) });
    this.gl = this.renderer.gl;
    this.container.appendChild(this.gl.canvas);

    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
    this.scene = new Transform();
    this.geometry = new Plane(this.gl, { heightSegments: 10, widthSegments: 20 });

    this.onResize();
    this.createMedias(items, bend, textColor, borderRadius, font);
    this.addEventListeners();
    this.update();
  }

  createMedias(items, bend, textColor, borderRadius, font) {
    const galleryItems = items && items.length ? items : [];
    this.mediasImages = galleryItems.concat(galleryItems); // Duplicate for infinite
    this.medias = this.mediasImages.map((data, index) => new Media({
      geometry: this.geometry,
      gl: this.gl,
      image: data.image,
      index,
      length: this.mediasImages.length,
      scene: this.scene,
      screen: this.screen,
      text: data.text,
      viewport: this.viewport,
      bend,
      textColor,
      borderRadius,
      font
    }));
  }

  onResize() {
    this.screen = { width: this.container.clientWidth, height: this.container.clientHeight };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({ aspect: this.screen.width / this.screen.height });
    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    this.viewport = { width: height * this.camera.aspect, height };
    if (this.medias) this.medias.forEach(m => m.onResize({ screen: this.screen, viewport: this.viewport }));
  }

  update() {
    // Subtle auto-drift
    if (!this.isDown) this.scroll.target += 0.05;

    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
    const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
    if (this.medias) this.medias.forEach(m => m.update(this.scroll, direction));
    
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = window.requestAnimationFrame(this.update.bind(this));
  }

  addEventListeners() {
    window.addEventListener('resize', debounce(() => this.onResize(), 150));
    
    const onDown = (e) => {
      this.isDown = true;
      this.scroll.position = this.scroll.current;
      this.start = e.touches ? e.touches[0].clientX : e.clientX;
    };
    
    const onMove = (e) => {
      if (!this.isDown) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      this.scroll.target = this.scroll.position + (this.start - x) * 0.04;
    };
    
    const onUp = () => (this.isDown = false);

    this.container.addEventListener('touchstart', onDown);
    this.container.addEventListener('touchmove', onMove);
    this.container.addEventListener('touchend', onUp);
    this.container.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }

  destroy() {
    window.cancelAnimationFrame(this.raf);
    this.renderer.gl.canvas.remove();
  }
}

export default function CircularGallery({
  items,
  bend = 1.5,
  textColor = '#C5A02E',
  borderRadius = 0.04,
  font = 'italic bold 24px serif',
  scrollEase = 0.06
}) {
  const containerRef = useRef(null);
  useEffect(() => {
    const app = new App(containerRef.current, { items, bend, textColor, borderRadius, font, scrollEase });
    return () => app.destroy();
  }, [items, bend, textColor, borderRadius, font, scrollEase]);

  return <div className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing" ref={containerRef} />;
}