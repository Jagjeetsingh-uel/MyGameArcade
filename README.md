# Neon Arcade

Lightweight HTML5 mini‑games. Pure static files (HTML/CSS/JS). Open `index.html` and play.

## Games
| Game | File | Core Mechanic | LocalStorage Key |
|------|------|---------------|------------------|
| Cube Surfer 3D | [games/cube_surfer.html](games/cube_surfer.html) | Lane dodge + jump + roll + stars | `cubeSurferHigh` |
| Void Weaver | [games/void_weaver.html](games/void_weaver.html) | Hold to orbit, release to sling | `voidWeaverHigh` |
| Cyber Swing | [games/cyber_swing.html](games/cyber_swing.html) | Grapple + vertical climb vs glitch | `cyberSwingHigh` |
| Chroma Shift | [games/chroma_shift.html](games/chroma_shift.html) | Polarity matching (tap to swap) | `chromaHigh` |
| Neon Orbit | [games/neon_orbit.html](games/neon_orbit.html) | Circular runner + jump/double jump | `orbitHigh` |
| Neon Stack | [games/neon_stack.html](games/neon_stack.html) | Timing placement / precision stacking | (none yet) |
| Prompt Drop Pro | [games/prompt_drop.html](games/prompt_drop.html) | Type falling words before impact | `promptDropHighScore` |

## Structure
- Hub / menu: [index.html](index.html) (Three.js animated background).
- Individual self‑contained game files under `games/`.
- Optional future helper (monetization / analytics) could live at root (e.g. `monetization.js`).

## Tech
- Vanilla JS (no build step).
- Canvas rendering for most games.
- Three.js only in hub and Cube Surfer.
- Responsive full‑screen; mobile touch supported.
- LocalStorage for persistent high scores.
- Simple state machines per game (each file isolates its logic).

## Controls (Quick Reference)
- Cube Surfer: Arrow / WASD / swipe (left/right move, up jump, down roll).
- Void Weaver: Hold/touch to create gravity well, release to sling.
- Cyber Swing: Hold to hook nearest peg, release to launch. P / pause button to pause.
- Chroma Shift: Tap / click anywhere to flip color.
- Neon Orbit: Tap / Space / Up to jump, second tap mid‑air for double jump.
- Neon Stack: Tap / click / Space to place moving block.
- Prompt Drop: Type letters; Enter from game over to restart; P to pause.

## Running
1. Clone/download repository.
2. Open [index.html](index.html) directly in a modern browser.
3. Select a game card to launch its HTML file.

Browse: http://localhost:8080/

## High Score Persistence
Each game checks its key on load:
```js
const hs = localStorage.getItem('cubeSurferHigh');
```
Update only if new score exceeds stored value, then write back.

## Suggested Improvements
- Shared utility module (input, particle, audio).
- Global sound toggle & lightweight SFX.
- PWA manifest + offline caching.
- Accessibility (focus outlines, ARIA labels).
- Monetization hooks: interstitial / rewarded ad triggers after game over or level milestones.
- Analytics event batching (game start, game over, score milestones).

## Monetization Integration Points (Future)
Place ad / reward calls at natural pauses:
- After game over (all games).
- Milestones (Cyber Swing height, Cube Surfer speed ups).
- Level ups (Prompt Drop).
Keep opt‑in (rewarded) separated from forced (interstitial) to preserve retention.

## Contributing
Fork, create feature branch, add or modify a game file in `games/`, test locally, submit PR.

## License
Add MIT (or other) before distribution.

Enjoy rapid prototyping—copy an existing game file as a template for new ideas.