# kaplay-fit  
_A tiny Kaplay plugin that applies a default mobile-friendly resolution (390×844)._

`kaplay-fit` is a very small Kaplay plugin that automatically sets your game's render resolution to **390 × 844**, a commonly used logical resolution for modern mobile portrait games.  

This makes it easy to start building mobile-oriented Kaplay games without manually configuring width/height each time.

---

## 📦 Installation

```sh
npm install kaplay-fit
````

***

## 🚀 Usage

```ts
import kaplay from "kaplay";
import kaplayFit from "kaplay-fit";

kaplay({
  plugins: [
    kaplayFit(),
  ],
});
```

That’s it!  
Once installed, the plugin automatically:

*   sets the internal render size to **390 × 844**
*   stretches the game canvas visually to fill the browser viewport (`100vw` × `100vh`)

No configuration and no extra code are needed.

***

## 📱 Why 390 × 844?

Modern mobile devices commonly use a “logical CSS resolution” close to **390 × 844** in portrait mode.  
Using a consistent default virtual resolution makes early development simpler and ensures your game starts with mobile-friendly proportions.

***

## ⚙️ What the plugin does (current version)

*   Forces the Kaplay canvas render size to **390 × 844**
*   Makes the displayed canvas fill the whole browser viewport
*   Works automatically as soon as it’s included in `plugins`

> ⚠️ This plugin is intentionally minimal in its early versions.  
> It **does not** yet handle responsive scaling, orientation changes, safe areas, or aspect‑ratio management.

These features may be added later.

***

## 🧩 Example: Complete Minimal Project

```ts
import kaplay from "kaplay";
import kaplayFit from "kaplay-fit";

const k = kaplay({
  plugins: [kaplayFit()],
});

k.add([
  text("Hello mobile screen!"),
  pos(100, 100),
]);
```

***

## 🛠 Roadmap (planned features)

*   Real responsive scaling modes (`contain`, `cover`, `stretch`)
*   Safe‑area support (iPhone/Android notches)
*   Virtual resolution abstraction
*   Debug overlay showing bounds & scale
*   Automatic orientation handling

***

## 📜 License

MIT © 2026 Jonas Bak Phillipson
