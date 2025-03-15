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
    import { events } from '../stores/eventStore.js';
    import { formatDate } from '../utils/dateUtils.js';

    let eventName = '';
    let eventType = 'academic';
    let eventColor = '#4285F4';
    let startDate = '';
    let endDate = '';

    onMount(() => {
        // Set default dates
        const today = new Date();
        startDate = formatDate(today);

        const nextMonth = new Date();
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        endDate = formatDate(nextMonth);
    });

    function addEvent(e) {
        e.preventDefault();

        // Parse dates as UTC to avoid timezone issues
        const sDate = new Date(`${startDate}T00:00:00Z`);
        const eDate = new Date(`${endDate}T00:00:00Z`);

        // Idk why its offset but this fixes it lol
        sDate.setDate(sDate.getDate() + 1);
        eDate.setDate(eDate.getDate() + 1);

        if (sDate > eDate) {
            alert('End date must be after start date');
            return;
        }

        const newEvent = {
            id: Date.now(),
            name: eventName,
            type: eventType,
            color: eventColor,
            startDate: sDate,
            endDate: eDate
        };

        // Update the store
        events.update(evts => [...evts, newEvent]);

        // Reset form
        eventName = '';
    }
</script>
  
  <div class="form-container">
    <div class="form-title">Add New Event</div>
    <form on:submit={addEvent}>
      <div class="form-group">
        <div class="form-field">
            <label for="event-name">Event Name</label>
            <input type="text" bind:value={eventName} placeholder="Fall Semester" required />
        </div>
        <div class="form-field">
        <label for="event-type">Event Type</label>
          <select bind:value={eventType}>
            <option value="academic">Academic Term</option>
            <option value="internship">Internship</option>
            <option value="holiday">Break</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="form-field">
          <label for="event-color">Color</label>
          <input type="color" bind:value={eventColor} />
        </div>
      </div>
  
      <div class="form-group">
        <div class="form-field">
          <label for="event-startdate">Start Date</label>
          <input type="date" bind:value={startDate} required />
        </div>
        <div class="form-field">
          <label for="event-enddate">End Date</label>
          <input type="date" bind:value={endDate} required />
        </div>
        <div class="form-field" style="display: flex; align-items: flex-end;">
          <button type="submit">Add Event</button>
        </div>
      </div>
    </form>
  </div>
  