# **kaplay-fit** _(work in progress)_

_A lightweight plugin for automatic responsive scaling in Kaplay games._

`kaplay-fit` is an upcoming plugin for the <https://kaplayjs.com> game framework designed to help your game **automatically scale, adapt, and fit** to different mobile device sizes and aspect ratios.

Kaplay currently provides basic resizing options, but making games feel _truly_ responsive—especially on phones with unusual screen ratios—requires custom logic. **kaplay-fit** aims to solve this cleanly.

---

## 🚀 Purpose

Modern mobile devices vary _massively_ in width, height, pixel density, and safe‑area constraints.  
`kaplay-fit` helps you:

- **Scale your game canvas** to fit the available screen space
- **Preserve your intended aspect ratio** (or allow dynamic aspect ratios)
- **Reduce letterboxing / pillarboxing**
- **Provide predictable “virtual resolution” coordinates** for your game
- **Handle orientation changes gracefully**
- **Offer drop‑in setup for most Kaplay games**

Whether you're building a casual portrait‑mode mobile game or a landscape arcade experience, this plugin aims to give Kaplay developers a convenient “just works” solution.

---

## 📦 Features (planned)

These are the first features expected in early releases:

### ✅ **1. Fit‑to‑screen scaling modes**

- `contain` – keep aspect ratio, show all content
- `cover` – fill the screen, crop excess area
- `stretch` – fit exactly (not recommended, but useful for some games)

### ✅ **2. Virtual resolution system**

Define a _logical game width/height_, and `kaplay-fit` will scale it appropriately across devices.

### ✅ **3. Device‑aware scaling**

- High DPI (retina) handling
- Mobile browser UI shrinking/expanding
- Safe‑area padding for iOS/Android notches

### ✅ **4. Auto‑resizing on orientation change**

### 🧪 **5. Optional debug overlay**

To visualize:

- scaling boundaries
- safe area
- actual render resolution
- final scaling factor

---

## 🧩 How it will integrate with Kaplay

Your eventual usage might look like this:

```ts
import kaplay from "kaplay";
import kaplayFit from "kaplay-fit";

kaplay({
  width: 480,
  height: 270,
  plugins: [
    kaplayFit({
      mode: "contain",
      safeArea: true,
    }),
  ],
});
```

The plugin installs itself inside the Kaplay init lifecycle and listens for resize events, updating the canvas transform as needed.

---

## 📅 Project Status

`kaplay-fit` is currently **in active early development**.

The goal is to release an initial functional version with:

- core scaling modes
- stable virtual resolution
- clean plug‑and‑play API

If you’re interested in testing pre-release versions or contributing, stay tuned!

---

## 📜 License

MIT © 2026 Jonas Bak Phillipson
