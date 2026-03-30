// src/index.ts
import type { KAPLAYCtx } from "kaplay";

export function kaplayFit() {
  return (k: KAPLAYCtx) => {
    // Set the internal render size directly
    if (k.canvas) {
      console.log(k.canvas);

      k.canvas.width = 390;
      k.canvas.height = 844;

      // Stretch visually to the entire available viewport
      k.canvas.style.width = "100vw";
      k.canvas.style.height = "100vh";
    }

    console.log("[kaplay-fit] Canvas forced to 390x844 render resolution");
  };
}

export default kaplayFit;
