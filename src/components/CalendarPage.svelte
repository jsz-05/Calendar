<!-- src/components/CalendarPage.svelte -->
<script>
    import { onMount } from 'svelte';
    import { events, loadEventsFromStorage, saveEventsToStorage } from '../stores/eventStore.js';
    
    import EventForm from './EventForm.svelte';
    import CalendarGrid from './CalendarGrid.svelte';
    import EventList from './EventList.svelte';
  
    // We'll set up localStorage in onMount
    let isBrowser = false;
  
    onMount(() => {
      isBrowser = true;
      // Load from localStorage initially
      loadEventsFromStorage();
  
      // Whenever events changes, save to storage
      const unsubscribe = events.subscribe(value => {
        if (isBrowser) {
          saveEventsToStorage(value);
        }
      });
      // Cleanup subscription on unmount
      return () => unsubscribe();
    });
  </script>
  
  <!-- container that includes form, calendar, and list -->
  <div class="container">
    <h1>Simple Calendar Visualizer</h1>
    <EventForm />
    <CalendarGrid />
    <EventList />
  </div>

  <footer class="footer">
    <p>
        Made with 🩶 by 
        <a href="https://jeffreyszhou.com/" target="_blank" rel="noopener noreferrer">Jeffrey Zhou</a> 
        with <a href="https://astro.build/" target="_blank" rel="noopener noreferrer">Astro</a> + 
        <a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Svelte</a>
    </p>
  </footer>


