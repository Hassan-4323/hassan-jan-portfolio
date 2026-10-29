
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MotionRefresh() {
  useEffect(() => {
    let active = true;

    const refresh = () => {
      if (!active) return;

      // Safe refresh allows the browser to finish
      // applying new layout measurements first.
      ScrollTrigger.refresh(true);
    };

    // Refresh when browser resources finish loading.
    window.addEventListener("load", refresh);

    // Refresh when custom web fonts are available.
    void document.fonts.ready.then(() => {
      refresh();
    });

    // Refresh when the portrait or other images load.
    const images = Array.from(
      document.querySelectorAll<HTMLImageElement>("img")
    );

    const pendingImages = images.filter(
      (image) => !image.complete
    );

    pendingImages.forEach((image) => {
      image.addEventListener("load", refresh);
      image.addEventListener("error", refresh);
    });

    // ScrollTrigger already handles normal window
    // resize events. No separate polling is needed.

    return () => {
      active = false;

      window.removeEventListener("load", refresh);

      pendingImages.forEach((image) => {
        image.removeEventListener("load", refresh);
        image.removeEventListener("error", refresh);
      });
    };
  }, []);

  return null;
}
