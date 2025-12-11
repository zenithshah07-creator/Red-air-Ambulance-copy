# Red Air Ambulance Project - Codebase Explanation

This document provides a detailed explanation of the source code for the Red Air Ambulance project. It is intended to help developers and stakeholders understand the structure, logic, and implementation details of the application.

> **Note for User:** You can save this Markdown file as a PDF by opening it in VS Code, right-clicking the preview, and selecting "Print" or using a "Markdown to PDF" extension.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Core Configuration](#core-configuration)
3. [Layout Components](#layout-components)
4. [Pages](#pages)
5. [Home Page Components](#home-page-components)
6. [UI Components](#ui-components)

---

## 1. Project Overview
The project is a React-based single-page application (SPA) built with Vite. It uses **React Router** for navigation and **Tailwind CSS** for styling. The structure follows a standard component-based architecture:
- `src/pages`: Top-level route components.
- `src/components`: Reusable UI parts, organized by feature (`home`, `layout`, `ui`).

---

## 2. Core Configuration

### `src/main.jsx`
**Purpose**: The entry point of the React application.
- **Lines 1-4**: Imports necessary dependencies:
  - `StrictMode` from React for highlighting potential problems.
  - `createRoot` for React 18's DOM rendering.
  - `index.css` for global styles.
  - `App` component.
- **Lines 6-10**: Mounts the React application into the DOM element with id `root`. The `App` component is wrapped in `<StrictMode>`.

### `src/App.jsx`
**Purpose**: The main application component that handles routing.
- **Imports**: Imports `react-router-dom` components (`BrowserRouter`, `Routes`, `Route`) and all page/layout components (`Layout`, `Home`, `Services`, `Fleet`, `ScrollToTop`, `Footer`).
- **`App` Function**:
  - Wraps everything in `<Router>` (alias for `BrowserRouter`) to enable routing context.
  - `<ScrollToTop />`: A utility component that ensures the page scrolls to the top when navigating.
  - `<Layout>`: Wraps all routes, providing the consistent Header and Footer.
  - `<Routes>`: Defines the mapping between URL paths and components:
    - `/` -> `<Home />`
    - `/services` -> `<Services />`
    - `/fleet` -> `<Fleet />`
    - `*` -> Fallback to `<Home />` (handling 404s).
    - `/Footer` -> Seems to be a debug/dev route to view Footer in isolation.

### `src/index.css`
**Purpose**: Global CSS file.
- **Lines 1-3**: Imports Tailwind CSS base, components, and utilities layers.
- **Lines 5-12**: Defines custom base styles using `@layer base`:
  - Sets default `font-sans`, text color, and background color for `body`.
  - Sets default styling for all heading tags (`h1`-`h6`) to use a bold font and custom color `text-secondary-dark`.

---

## 3. Layout Components
Located in `src/components/layout`.

### `Layout.jsx`
**Purpose**: A wrapper component to ensure consistent site structure.
- **Logic**: Accepts `children` props (the page content).
- **Structure**:
  - Renders `<Header />`.
  - Renders `children` inside a `<main>` tag with `flex-grow`, ensuring the footer stays at the bottom if content is short.
  - Renders `<Footer />`.
  - Contains a commented-out `<StickyCTA />`.

### `Header.jsx`
**Purpose**: The main navigation bar.
- **State Management (Lines 6-10)**:
  - `isMenuOpen`: Toggles mobile menu visibility.
  - `isPresenceOpen` / `isServicesOpen`: Toggles specific desktop dropdowns.
  - `activeTab`: Tracks the active tab in the "Our Presence" dropdown (India vs International vs Escorts).
  - `mobileExpanded`: Tracks which sub-menus are open in the mobile view.
- **Data (Lines 21-66)**: Defines arrays for cities, countries, and services to render lists dynamically.
- **Render Logic**:
  - **Logo**: Links to home.
  - **Desktop Nav (Lines 89-216)**: Iterates through `navLinks`.
    - If `hasDropdown` is true, it renders a button with hover handlers to show the megamenu.
    - **Mega Menu (Lines 106-183)**: Renders a complex 2-column layout for "Our Presence" with tabs on the left and grid content on the right.
  - **CTA Button**: Displays a "24/7 Emergency" phone number.
  - **Mobile Controls (Lines 231-246)**: Shows a phone icon and hamburger menu button on small screens.
  - **Mobile Menu (Lines 250-354)**: A slide-down menu handling nested accordions for sub-sections.

### `Footer.jsx`
**Purpose**: The site footer containing links and contact info.
- **Data**: Arrays for `indiaServices`, `internationalServices`, etc.
- **`renderServiceList`**: A helper function to split long lists of locations into chunks of 5 for better layout or readability (though in the JSX code shown, it renders them all in one block with separators).
- **Structure**:
  - **Top Section**: Brand info, social media links, quick links, legal links, and address.
  - **Bottom Section**: SEO-friendly lists of services in various locations.
  - **Copyright**: Dynamic year generation.

### `StickyCTA.jsx`
**Purpose**: A mobile-only fixed button at the bottom of the screen.
- **Logic**: Fixed positioned `div` at `bottom-0`.
- **Content**: A clickable phone link that calls the emergency number. Only visible on mobile (`md:hidden`).

---

## 4. Pages
Located in `src/pages`.

### `Home.jsx`
**Purpose**: The landing page.
- **Imports**: Huge list of imports including icons, components, and assets. Uses `Swiper` for carousels.
- **State**: `activeTab` for the "Why Trust Us?" section.
- **Data objects**:
  - `trustContent`: Content for different tabs (Expertise, Core Values, etc.).
- **Structure**:
  1.  **Hero Section**: A large Swiper slider with background images. Overlaid with text ("Advanced Life Support...") and a contact form ("Upon filling the details...").
  2.  **Who We Are**: Image + Text section describing the company.
  3.  **Services Section**: Uses `StatsSection` (imported) followed by a Swiper carousel of service cards (ICU, Planned Transfers, etc.).
  4.  **Partnered Hospitals**: A carousel of hospital logos.
  5.  **Why Trust Red Air Ambulance**: A tabbed section where clicking a tab on the left updates the content grid on the right.
  6.  **Imported Sections**: Renders `TailoredCareSection`, `FeaturedInSection`, `ProcessSection`, `TestimonialsSection`.
  7.  **CTA Section**: A blue/primary color block with a large phone number.
  8.  **Enquiry Form**: Renders `EnquiryFormSection`.

### `Services.jsx`
**Purpose**: Dedicated page listing all services in detail.
- **State**: `openFaq` to track which FAQ item is expanded (accordion style).
- **Data**: `services` array containing ID, title, icon, description, and feature list for each service. `faqs` array.
- **Render**:
  - **Hero**: Simple banner with title.
  - **Services List**: Maps through the `services` array.
    - Uses alternating layout logic (`index % 2 === 1 ? 'lg:flex-row-reverse' : ...`) to switch image/text positions for visual interest.
  - **FAQ Section**: Maps through `faqs`, rendering a button that toggles the answer visibility based on `openFaq` state.

### `Fleet.jsx`
**Purpose**: Displays information about the aircraft fleet.
- **Data**: `aircrafts` array with details like name, type, range, speed, and medical capacity.
- **Render**:
  - **Header**: Standard page header.
  - **List**: Iterates over `aircrafts`, displaying a card for each.
  - **Layout**: Grid layout sharing image placeholder on left, detailed specs on right. Specs are divided into "Specifications" and "Medical Capacity".

---

## 5. Home Page Components
Located in `src/components/home`. These break down the `Home.jsx` page into manageable chunks.

### `StatsSection.jsx`
- **Purpose**: Displays key metrics (e.g., "1500+ Patient Transfers").
- **Logic**: Simple map over a `stats` array rendering a grid of numbers and labels. Hover effect scales the number.

### `ProcessSection.jsx`
- **Purpose**: "How We Work" timeline.
- **Data**: Steps like "Consultation", "Planning", "Stabilization".
- **Visuals**: A vertical line (timeline) down the center. Items alternate left and right (`flex-row` vs `flex-row-reverse`).

### `TestimonialsSection.jsx`
- **Purpose**: Customer reviews.
- **Logic**: Static array of reviews. Renders a grid of cards, each with 5 stars, text, name, and date.

### `TailoredCareSection.jsx`
- **Purpose**: Marketing section focusing on customized care.
- **Layout**: Text on left, Image on right. Includes a "Book an Air Ambulance" CTA button.

### `FeaturedInSection.jsx`
- **Purpose**: Social proof / Media mentions.
- **Logic**: Displays a row of media partner logos (Telangana Today, etc.).

### `EnquiryFormSection.jsx`
- **Purpose**: A contact form at the bottom of the page.
- **Structure**:
  - Left: Form fields (Name, Email, Phone, Message).
  - Right: An image (Customer Support agent).
  - Note: The form currently does not have a submission handler function attached (default HTML behavior).

---

## 6. UI Components
Located in `src/components/ui`.

### `ScrollToTop.jsx`
- **Purpose**: Utility to handle scroll behavior on route changes.
- **Logic**:
  - Uses `useLocation` hook to detect URL changes.
  - `useEffect`:
    - If there is a `hash` (e.g., `#services`), it finds the element with that ID and scrolls to it smoothly.
    - Otherwise (normal navigation), it scrolls the window to position (0, 0) immediately.
  - Returns `null` (renders nothing visually).
