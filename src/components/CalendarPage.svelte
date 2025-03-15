<!-- 
    Copyright 2025 Jeffrey Zhou

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 -->
 
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
        © <a href="https://jeffreyszhou.com/" target="_blank" rel="noopener noreferrer">Jeffrey Zhou</a> 2025. 
        Built with <a href="https://astro.build/" target="_blank" rel="noopener noreferrer">Astro</a> and 
        <a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Svelte</a>.
    </p>
</footer>


