# 📘 kaplay-fit — Project Roadmap

_A structured plan for the development and evolution of the kaplay-fit plugin._

kaplay-fit aims to provide simple, reliable, mobile-friendly responsive scaling for Kaplay games.  
This roadmap outlines the planned milestones from early development through stable release and beyond.

---

## 🥚 Phase 0 — Foundations (Current)

**Status:** In progress

### Goals

- Establish repository structure
- Add TypeScript, Vite, build pipeline, and example dev environment
- Set up testing framework (TBD)
- Prepare initial plugin skeleton (`plugin.ts`)
- Validate peer dependency handling with Kaplay
- Package publishing setup (`.npmignore`, dist output verification)

### Deliverables

- ✔ Project scaffolding and build system
- ✔ Dev playground (`examples/dev`)
- ☐ Initial empty plugin that registers correctly in Kaplay
- ☐ First internal prototype of scaling logic

---

## 🚀 Phase 1 — MVP Release (v0.1.x)

**Purpose:** Produce a minimal but functional version of kaplay-fit that solves the core scaling problem.

### Features

- [ ] **Virtual resolution system** (logical width/height)
- [ ] **Basic scaling strategy:** `contain`
- [ ] **Canvas resize handling** on:
  - window resize
  - mobile rotation
  - browser UI show/hide events (best effort)
- [ ] **Public plugin API** (config options)
- [ ] **Automatic scaling factor calculation**
- [ ] Clean integration with `kaplay({ plugins: [...] })`

### Documentation

- [ ] README updated with working example
- [ ] Quickstart section
- [ ] Troubleshooting notes for common mobile issues

### Version target

**v0.1.0** — “Minimum Playable Prototype”

---

## 📱 Phase 2 — Scaling Modes (v0.2.x)

**Purpose:** Add the core modes described in the README.

### Features

- [ ] `contain` (MVP refinement)
- [ ] `cover`
- [ ] `stretch` (with warnings)
- [ ] Safe-area padding support (notches, rounded corners)
- [ ] DPI-aware rendering & devicePixelRatio handling

### Developer Tools

- [ ] Optional debug overlay with:
  - safe area
  - final resolution
  - scaling factor
  - canvas bounds

### Documentation

- [ ] Mode comparison guide
- [ ] GIFs/screenshots demonstrating differences
- [ ] Explanation of “virtual resolution” vs “actual resolution”

### Version target

**v0.2.0** — “Scaling Modes Release”

---

## 📐 Phase 3 — Stability & Polishing (v0.3.x)

**Purpose:** Improve reliability, cross-device behavior, and test coverage.

### Goals

- [ ] Robust mobile behavior across major devices
- [ ] Handle browser UI reflow quirks (iOS Safari, Android Chrome)
- [ ] Add unit tests for math & utility functions
- [ ] Add integration tests for resize events (where possible)
- [ ] Expand dev example into multiple scenarios:
  - portrait-only game
  - landscape-only game
  - dynamic resize demo

### Version target

**v0.3.0** — “Cross‑Device Stability Release”

---

## 🧰 Phase 4 — Developer Experience Enhancements (v0.4.x)

**Purpose:** Make kaplay-fit pleasant to use across real development teams.

### Features

- [ ] Plugin-level events (e.g., `onResize`, `onScaleChange`)
- [ ] User-adjustable hot reload behavior in dev mode
- [ ] Additional utility functions, e.g.:
  - `toScreenCoords(x, y)`
  - `toGameCoords(x, y)`
- [ ] Optional `fitPreset` configurations:
  - "mobilePortrait"
  - "mobileLandscape"
  - "pixelPerfect"

### Documentation

- [ ] Full API reference
- [ ] Extended guide for advanced use cases

### Version target

**v0.4.0** — “Developer Quality of Life Release”

---

## 🌟 Phase 5 — v1.0 Release (Stable)

**Purpose:** Deliver a polished, stable, production-ready plugin.

### Requirements

- [ ] All scaling modes confirmed stable
- [ ] Safe area behavior confirmed on major devices
- [ ] Unit and integration test coverage
- [ ] Clear and complete documentation
- [ ] SemVer-compliant API freeze

### Version target

**v1.0.0** — “Stable Production Release”

---

## 🌈 Future Ideas (Post‑1.0)

These are _optional stretch goals_ for consideration.

- [ ] Support for **custom resize strategies** (developer-supplied algorithms)
- [ ] Built‑in **tweening/resizing transitions** for smoother orientation changes
- [ ] Automatic **UI scale hints** for Kaplay UI components
- [ ] Integration with Kaplay’s camera or scale components
- [ ] Exposing the plugin through CDN or ES module imports directly
- [ ] Build-time optimization plugin for asset scaling

---

## 💬 Contributing

Contributions, suggestions, and feedback are welcome.  
Please open an issue or PR on GitHub once the initial public alpha is released.

---

## © License

MIT — See `LICENSE` for details.
