**John A. Scarrow**
Coeur d'Alene, ID
Email: JohnA@Scarrows.com | Phone: (425) 802‑6231
LinkedIn: [linkedin.com/in/JohnAScarrow](http://linkedin.com/in/JohnAScarrow) | GitHub: [github.com/JohnScarrow](http://github.com/JohnScarrow)

---

## Summary

CS student at North Idaho College with two years of C++ and Python coursework, a one-year full-stack JavaScript program (Code Fellows), and a track record of shipping real systems — from a CUDA-accelerated ML game AI compiled to WebAssembly, to a YOLOv11 wildlife detector deployed on a Raspberry Pi 5. Strong foundation in systems programming, machine learning inference, and full-stack web development.

---

## Technical Skills

- **Languages:** C++17, Python, TypeScript, JavaScript, x86-64 Assembly, CUDA, SQL
- **ML / CV:** YOLOv11, OpenCV, ONNX Runtime, WebAssembly (Emscripten), INT8 quantization
- **Web / Backend:** React, Fastify, Express.js, Node.js, REST APIs, Prisma ORM, PostgreSQL, MongoDB
- **Cloud / DevOps:** Docker, AWS, GitHub Actions, Vercel, Railway
- **Tools:** SFML, NASM, Git

---

## Selected Projects

### [Battleship-ML (C++17 · CUDA · WebAssembly)](https://github.com/JohnScarrow/battleship-ml)

- Built a Battleship AI in C++17 that blends four probabilistic signals per shot: a log-learned global heatmap, a live ship-placement coverage map, Monte Carlo sampling, and tactical bonuses (adjacency, parity, fit-score)
- Implemented a CUDA kernel for GPU-accelerated Monte Carlo sampling using cuRAND and shared-memory atomics; falls back to CPU automatically when no device is detected
- Native CLI tuner supports multi-threaded grid-search over `AIWeights` parameters and an online-learning mode that updates weights after each game
- Compiled the full C++ engine to WebAssembly via Emscripten for a [live browser demo](https://johnscarrow.github.io/battleship-ml/) with a real-time probability heatmap

### [AutoDetect-Wildlife (Python · YOLOv11 · ONNX · Raspberry Pi)](https://github.com/JohnScarrow/AutoDetect-WIldLife)

- Built a real-time wildlife detection system for forest roads with two deployment targets: YOLOv11s on a laptop (60–80 FPS) and a custom INT8-quantized ONNX model on a Raspberry Pi 5 (~3 FPS, no PyTorch required)
- Wrote a training pipeline that automatically downloads and merges Roboflow and LILA.science datasets (deer, elk, turkey, moose), trains separate models for each platform, and exports the Pi model to INT8 ONNX
- Implemented custom letterbox preprocessing and YOLO NMS postprocessing on the Pi path; supports headless mode with live MJPEG stream over HTTP

### [Wild West Shootout: High Noon (x86-64 Assembly)](https://github.com/JohnScarrow/WIld-West-Shootout-High_Noon)

- Built a fully playable shootout game in x86-64 Assembly using NASM — no C runtime, no standard library
- Managed the call stack, register allocation, and all control flow by hand using direct Linux system calls (`read`, `write`, `exit` via `syscall`)
- Demonstrated practical understanding of CPU architecture, memory layout, and low-level I/O

### [Bounty of Juan (C++17 · SFML)](https://github.com/JohnScarrow/Bounty_of_Juan)

- 4-person team project: 2D top-down survivor shooter with infinite tiling world, wave-based enemy spawning, auto-targeting projectiles, and live HUD
- Responsible for health system, results screen, ESC pause overlay, enemy contact-damage windup animation, and merge conflict resolution across all branches
- Used a `Character` base class with polymorphic `takeDamage` / `isDead` shared between player and enemy types

### [Project Insight Hub (TypeScript · React · Fastify · PostgreSQL)](https://github.com/JohnScarrow/Project-Insight-Hub)

- Rebuilt a non-functional full-stack codebase into a working prototype — diagnosed broken state, rewired backend auth, and got the full JWT + RBAC flow operational
- Features three-tier role system (Admin, Editor, Viewer), hierarchical task tracking, time logging, cost monitoring, and audit logging
- Stack: React, Vite, ShadCN UI, Tailwind, TanStack Query (frontend); Fastify, Prisma, PostgreSQL, bcrypt (backend)

---

## Experience

**Freelance Developer — Coeur d'Alene, ID**
*March 2020 – Present*

- Designed and maintained full-stack web applications for clients
- Implemented backend features, debugging, and iterative improvements
- Collaborated with clients to deliver stable, maintainable solutions

**Snoqualmie Tribe Market — Snoqualmie, WA**
*Supervisor, POS Support | March 2018 – May 2020*

- Troubleshot POS systems and resolved technical issues under operational pressure
- Managed staff scheduling and ensured day-to-day reliability

**Relectromix LLC — Bellevue, WA**
*Technician | March 2016 – April 2017*

- Repaired PC/Mac systems and configured Windows Server environments
- Performed diagnostics and customer-facing technical support

---

## Education

**North Idaho College — Current Student**
C++, Python, Robotics, and Computer Science coursework (2024 – Present)

**Code Fellows, Seattle**
Full-Stack JavaScript Development Program (2017–2018)

**Bellevue College**
Full-Stack JavaScript Coursework (2015–2017)

**Eastlake High School** — Graduate (2011)

---

## References

Available upon request.
Academic reference: **Professor Ekaterina Miller**, North Idaho College.
