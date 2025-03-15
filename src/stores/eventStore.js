// src/stores/eventStore.js
import { writable } from 'svelte/store';

// global store of events
export const events = writable([]);

/**
 * Load events from localStorage.
 * Only call this in the browser (i.e. onMount in a component).
 */
export function loadEventsFromStorage() {
  const stored = localStorage.getItem('calendarEvents');
  if (stored) {
    const parsed = JSON.parse(stored).map(ev => ({
      ...ev,
      startDate: new Date(ev.startDate),
      endDate: new Date(ev.endDate),
    }));
    events.set(parsed);
  }
}

/**
 * Save the current events to localStorage.
 */
export function saveEventsToStorage(currentEvents) {
  localStorage.setItem('calendarEvents', JSON.stringify(currentEvents));
}
