# Simple Calendar Visualizer (Astro + Svelte)

Simple Calendar built with [Astro](https://astro.build/) and [Svelte](https://svelte.dev/). It lets you add, edit, and delete events, then shows them on an interactive 8-month calendar. Stores events in a Svelte store and persists them with `localStorage`.

Wanted an easier way to visualize school terms, internships, etc so made a calendar. It was especially useful for figuring when to negotiate start dates for and seeing overlaps. I liked the design of the Google Flights departure/return date selector so the UI is based off that design.

![Image](https://github.com/user-attachments/assets/abf6ecf8-e8f4-414c-94a1-011e06682ac3)

## Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:4321/](http://localhost:4321/) in your browser. 

## Calendar

- Fill in the form and click “Add Event.”  
- View updates with colored markers.  
- Manage events in the “Your Events” list.  
