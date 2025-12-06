# UI-UX-FINAL-PROJECT
Final project of my class UI\UX
ID: 202512398;
Name: Arlan;
Class: Computer UI/UX design;
Project: Webpage;
1. Design Concept & Philosophy

FIGURE.OS is a concept landing page for a premium anime figure retailer. The design objective was to break away from the standard "chaotic akihabara" aesthetic often found in hobby shops and instead present collectibles as high-end art pieces.

The interface follows a "Vintage Editorial" aesthetic, combining modern layout techniques (Bento Grids, Glassmorphism) with a retro-inspired color palette that mimics the warmth of old manga pages or vintage print magazines.

2. Visual Identity & Color Theory

Instead of the industry-standard "Dark Mode" (Black/Purple), this project utilizes a high-contrast "Vintage Light" palette to evoke sophistication and warmth.

Primary Background (#e7cfcd - Almond Silk): A soft, beige-pink off-white that reduces eye strain compared to pure white and provides a paper-like texture feeling.

Primary Text (#45050c - Night Bordeaux): A deep, near-black red. It offers softer contrast than pure black (#000000) while maintaining excellent readability and thematic consistency with the "red ink" aesthetic.

Accent Color (#f85a3e - Tomato Orange): Used sparingly for call-to-action buttons (CTAs) and badges to guide user attention immediately to conversion points.

Secondary Accent (#720e07 - Molten Lava): Used for hover states and subtle borders to add depth without introducing new hues.

3. UI/UX Key Features

A. Immersive Hero Section

Design: Full-viewport height (100vh) image slider with a custom radial gradient overlay.

UX Goal: Immediate visual impact. The gradient fades into the specific beige background color (#e7cfcd) rather than transparent black, creating a seamless blend between the image and the rest of the page content.

B. Glassmorphism Navigation

Design: The sticky header uses a backdrop-blur effect (blur(20px)) with a translucent red tint.

UX Goal: Keeps navigation accessible at all times without visually obstructing the content underneath. The semi-transparent effect maintains context for the user as they scroll.

C. Bento Grid Layout ("Curated Drops")

Design: A responsive CSS Grid layout that alternates between spanning 2 rows/columns and single cells.

UX Goal: Breaks the monotony of standard product lists. It allows for hierarchical storytelling—highlighting a "Hero" collection (Mecha) while showing smaller "New" items side-by-side.

D. Micro-Interactions & Feedback

Toast Notifications: A custom JavaScript notification system triggers on "Add to Cart" actions, providing immediate system status feedback (Heuristic #1: Visibility of system status).

Hover States: All interactive elements feature a "Red Tint" hover effect (hover-red-tint), unifying the interactive language across buttons, cards, and icons.

Smooth Scroll: JavaScript-controlled horizontal scrolling for the "Fresh From Japan" section mimics mobile swipe interactions on desktop.

4. Technical Implementation

Structure: Semantic HTML5.

Styling: Tailwind CSS (via CDN) for layout utility, combined with custom CSS Variables (:root) for strict color theme management.

Logic: Vanilla JavaScript (ES6) handling DOM manipulation for the slider, mobile menu toggling, and toast notifications without external framework dependencies.
