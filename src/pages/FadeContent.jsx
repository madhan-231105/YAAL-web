import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FadeContent = ({

  children,

  container = null,

  blur = true,

  duration = 1000,

  ease = "power2.out",

  delay = 0,

  threshold = 0.1,

  animateOnLoad = false,

  initialOpacity = 0,

  disappearAfter = 0,

  disappearDuration = 0.5,

  disappearEase = "power2.in",

  onComplete,

  onDisappearanceComplete,

  className = "",

  ...props

}) => {

  const ref = useRef(null);

  useEffect(() => {

    const el = ref.current;

    if (!el) return;


    let scrollerTarget =
      container ||
      document.getElementById("snap-main-container") ||
      window;

    if (typeof scrollerTarget === "string") {
      scrollerTarget = document.querySelector(scrollerTarget);
    }


    const startPct = (1 - threshold) * 100;

    const getSeconds = (val) => (val > 10 ? val / 1000 : val);


    // FIX: Make visible immediately if animateOnLoad = true
    if (!animateOnLoad) {

      gsap.set(el, {

        autoAlpha: initialOpacity,

        filter: blur ? "blur(10px)" : "blur(0px)",

        willChange: "opacity, filter, transform"

      });

    } else {

      gsap.set(el, {

        autoAlpha: 1,

        filter: "blur(0px)"

      });

    }


    const tl = gsap.timeline({

      paused: true,

      delay: getSeconds(delay),

      onComplete: () => {

        if (onComplete) onComplete();

        if (disappearAfter > 0) {

          gsap.to(el, {

            autoAlpha: initialOpacity,

            filter: blur ? "blur(10px)" : "blur(0px)",

            delay: getSeconds(disappearAfter),

            duration: getSeconds(disappearDuration),

            ease: disappearEase,

            onComplete: () => {

              if (onDisappearanceComplete) {
                onDisappearanceComplete();
              }

            }

          });

        }

      }

    });


    // Only animate if NOT animateOnLoad
    if (!animateOnLoad) {

      tl.to(el, {

        autoAlpha: 1,

        filter: "blur(0px)",

        duration: getSeconds(duration),

        ease: ease

      });

    }


    let st;


    if (!animateOnLoad) {

      st = ScrollTrigger.create({

        trigger: el,

        scroller: scrollerTarget,

        start: `top ${startPct}%`,

        once: true,

        onEnter: () => tl.play()

      });

    }


    return () => {

      if (st) st.kill();

      tl.kill();

      gsap.killTweensOf(el);

    };

  }, []);


  return (

    <div
      ref={ref}
      className={className}
      {...props}
    >

      {children}

    </div>

  );

};

export default FadeContent;