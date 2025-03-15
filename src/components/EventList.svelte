<!-- src/components/EventList.svelte -->
<script>
    import { events } from '../stores/eventStore.js';
    import { formatDate, formatDisplayDate } from '../utils/dateUtils.js';
  
    function deleteEvent(id) {
      events.update(evts => evts.filter(e => e.id !== id));
    }
  
    function editEvent(id) {
      // We'll do a simple prompt like before
      let currentList;
      events.subscribe(e => (currentList = e))(); // immediate unsubscribe
  
      const ev = currentList.find(e => e.id === id);
      if (!ev) return;
  
      const newStart = prompt('Enter new start date (YYYY-MM-DD):', formatDate(ev.startDate));
      const newEnd = prompt('Enter new end date (YYYY-MM-DD):', formatDate(ev.endDate));
      if (newStart && newEnd) {
        const sDate = new Date(newStart);
        const eDate = new Date(newEnd);
        if (sDate <= eDate) {
          // Patch the event
          events.update(evts => {
            return evts.map(obj =>
              obj.id === id ? { ...obj, startDate: sDate, endDate: eDate } : obj
            );
          });
        } else {
          alert('End date must be after start date.');
        }
      }
    }
  </script>
  
  <div class="event-list">
    <div class="event-list-header">Your Events</div>
    <div class="event-list-content">
      {#await $events then evts}
        {#if evts.length === 0}
          <div style="padding:15px; color:#5f6368">
            No events added yet.
          </div>
        {:else}
          {#each evts
            .sort((a, b) => a.startDate - b.startDate)
            as event (event.id)}
            <div class="event-item">
              <div class="event-color" style="background-color: {event.color};"></div>
              <div class="event-details">
                <div class="event-name">{event.name}</div>
                <div class="event-date">
                  {formatDisplayDate(event.startDate)} to {formatDisplayDate(event.endDate)}
                </div>
              </div>
              <button class="edit-btn" on:click={() => editEvent(event.id)}>Edit</button>
              <button class="delete-btn" on:click={() => deleteEvent(event.id)}>Delete</button>
            </div>
          {/each}
        {/if}
      {/await}
    </div>
  </div>
  