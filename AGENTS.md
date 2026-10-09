# Base44 Setup Notes

## Project Overview
This is a **static website** ("Summit Lodge" mountain retreat landing page) consisting of `index.html`, `styles.css`, `script.js`, and images in `images/`. There is no build step, no backend, no database, and no package manager.

## Running the App
```bash
docker compose -f docker-compose.base44.yml up -d
```
Served by `nginx:alpine` on host port 3000. The repo is bind-mounted read-only into the container, so file edits appear on browser refresh — call `reload_preview` after edits since there is no live-reload dev server.

## Verification
- `curl http://localhost:3000/` should return the HTML page.
- The page displays a hero image, about/rooms/amenities/contact sections, and a footer with the current year.

## Secrets
None required — pure static site with no external services.
