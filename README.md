# Augvst.TTY OneLink

A minimalist, Apple-inspired portfolio page showcasing Augusto Lúe Morales' professional and creative presence. This Linktree-style site connects visitors to social and professional platforms with a clean, responsive design, featuring subtle animations and a light/dark mode toggle.

## Features
- **Elegant Design**: Inspired by Apple’s aesthetic with a liquid-glass effect, Roboto typography, and smooth transitions.
- **Responsive Layout**: Adapts seamlessly to desktop and mobile devices.
- **Light/Dark Mode**: Toggle between modes with `localStorage` persistence for user preference.
- **SEO Optimized**: Includes meta tags and Open Graph data for better discoverability.
- **Subtle Animations**: Buttons animate on load with Anime.js, with enhanced hover effects (zoom, shadow, blur).
- **Accessible**: Semantic HTML and ARIA attributes ensure inclusivity.

## Dependencies
- **Font Awesome 6.4.2**: Icons for social links and mode toggle (CDN).
- **Google Fonts (Roboto)**: Primary typography (weights 100–900, italic).
- **Anime.js 3.2.1**: Lightweight animations for button load and hover effects (CDN).

## Usage
- **Customize Profile**: Replace `src/media/profile.png` and `src/media/profile-transparent.png` with your profile image and favicon.
- **Update Links**: Edit the `<a>` tags in `index.html` to point to your social profiles (e.g., LinkedIn, GitHub).
- **Modify Content**: Update the `<h1>`, `<p>`, and footer in `index.html` for personalization.
- **Style Adjustments**: Tweak `css/main.css` for colors, animations, or layout (e.g., `--bg-color`, `--shadow`).
- **Mode Toggle**: The dark/light mode toggle uses `localStorage` to persist user preferences.

## File Structure
- `index.html`: Main HTML file with structure and metadata.
- `src/main.css`: Styles for layout, typography, and light/dark mode.
- `src/main.js`: JavaScript for button animations (Anime.js) and mode toggle.
- `src/media/`: Assets for profile image and favicon.

## Contributing
This is a personal portfolio project. For suggestions or improvements, contact Augusto Lúe Morales via [LinkedIn](https://linkedin.com).


