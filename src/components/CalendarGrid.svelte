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
    // "events" is the Svelte store
    // "$events" is the auto-subscription inside the template
    import { events } from '../stores/eventStore.js';
    import { formatDate } from '../utils/dateUtils.js';

    import { fade, slide } from 'svelte/transition';

  
    // The start date for our calendar range
    let viewStartDate = null;
  
    // show 8 months total
    const monthsToShow = 8;
  
    //array stores the generated months (each is a Date for the 1st of that month)
    let months = [];
  
    // keep a local reactive reference to $events
    // make sure the template re-renders if the store changes
    $: currentEvents = $events;
  
    onMount(() => {
      console.log("CalendarGrid mounted!");
      // Initialize "viewStartDate" to the 1st of the current month
      const now = new Date();
      viewStartDate = new Date(now.getFullYear(), now.getMonth(), 1);
    });
  
    // Whenever viewStartDate changes (or is set), recalc months
    $: if (viewStartDate) {
      months = getMonths();
    }
  
    /**
     * Generate an array of month “start” dates from viewStartDate forward.
     */
    function getMonths() {
      if (!viewStartDate) return [];
  
      const monthsArray = [];
      for (let i = 0; i < monthsToShow; i++) {
        const monthDate = new Date(viewStartDate);
        monthDate.setMonth(monthDate.getMonth() + i);
        monthsArray.push(monthDate);
      }
      return monthsArray;
    }
  
    /**
     * For a given monthDate, generate all days for the display, including the "filler" days from the previous or next month
     */
    function getDaysForMonth(monthDate) {
      const days = [];
      const firstDay = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
      const lastDay = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);
  
      // Fill days from the previous month (for the first week)
      const firstDayOfWeek = firstDay.getDay();
      if (firstDayOfWeek > 0) {
        const prevMonth = new Date(monthDate);
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        const daysInPrev = new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0).getDate();
  
        for (let j = 0; j < firstDayOfWeek; j++) {
          const dayNum = daysInPrev - firstDayOfWeek + j + 1;
          const dayDate = new Date(prevMonth.getFullYear(), prevMonth.getMonth(), dayNum);
          days.push({ date: dayDate, otherMonth: true });
        }
      }
  
      // Actual days of the current month
      for (let d = 1; d <= lastDay.getDate(); d++) {
        const dayDate = new Date(monthDate.getFullYear(), monthDate.getMonth(), d);
        days.push({ date: dayDate, otherMonth: false });
      }
  
      // Fill days from the next month (to complete the last week)
      const lastDayOfWeek = lastDay.getDay();
      if (lastDayOfWeek < 6) {
        for (let j = 1; j <= 6 - lastDayOfWeek; j++) {
          const nextMonth = new Date(monthDate);
          nextMonth.setMonth(nextMonth.getMonth() + 1);
          const dayDate = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), j);
          days.push({ date: dayDate, otherMonth: true });
        }
      }
  
      return days;
    }
  
    /**
     * Return all events in "currentEvents" that fall on the given "date".
     */
     function getEventsForDate(date) {
        const dateString = formatDate(date);
        return currentEvents.map(ev => {
            const start = new Date(ev.startDate);
            const end = new Date(ev.endDate);
            
            // Check if event spans multiple months
            const spansMonths = 
                (start.getMonth() !== end.getMonth()) || 
                (start.getFullYear() !== end.getFullYear());

            // Is this the last day of the month?
            const isLastDayOfMonth = 
                date.getDate() === new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

            // Is this the first day of the month?
            const isFirstDayOfMonth = date.getDate() === 1 && formatDate(date) !== formatDate(start);

            // Only apply effects if event spans months and we're at a month boundary
            const isEndOfSpan = spansMonths && isLastDayOfMonth;
            const isStartOfSpan = spansMonths && isFirstDayOfMonth;

            return {
                ...ev,
                isStartOfSpan,
                isEndOfSpan
            };
        }).filter(ev => {
            const start = formatDate(ev.startDate);
            const end = formatDate(ev.endDate);
            return dateString >= start && dateString <= end;
        });
    }
  
    /**
     * Navigate the calendar backward by 'monthsToShow' months.
     */
    function prevMonths() {
      if (!viewStartDate) return;
      viewStartDate.setMonth(viewStartDate.getMonth() - monthsToShow);
      // reassign to force reactivity
      viewStartDate = new Date(viewStartDate);
    }
  
    /**
     * Navigate the calendar forward by 'monthsToShow' months.
     */
    function nextMonths() {
      if (!viewStartDate) return;
      viewStartDate.setMonth(viewStartDate.getMonth() + monthsToShow);
      viewStartDate = new Date(viewStartDate);
    }
  
    /**
     * Show a label like "January 2025 - August 2025" for the current range.
     */
    function getCurrentRangeLabel() {
      if (!months.length) return '';
      const first = months[0];
      const last = months[months.length - 1];
      const firstLabel = first.toLocaleString('default', { month: 'long', year: 'numeric' });
      const lastLabel = last.toLocaleString('default', { month: 'long', year: 'numeric' });
      return firstLabel === lastLabel ? firstLabel : `${firstLabel} - ${lastLabel}`;
    }
  </script>
  
  <!-- Calendar Header -->
  <div class="calendar-header">
    <div class="current-range">{getCurrentRangeLabel()}</div>
    <div class="nav-buttons">
      <button on:click={prevMonths}>← Previous</button>
      <button on:click={nextMonths}>Next →</button>
    </div>
  </div>
  
  <!-- Calendar Body -->
  <div class="calendar-container">
    <div class="months-container">
      {#each months as month}
        <div class="month">
          <div class="month-header">
            {month.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </div>
  
          <div class="weekdays">
            {#each ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] as day}
              <div class="weekday">{day}</div>
            {/each}
          </div>
  
          <div class="days">
            {#each getDaysForMonth(month) as d}
                <div class="day {d.otherMonth ? 'other-month' : ''}">
                    {d.date.getDate()}
                    <div class="event-markers">
                        {#if !d.otherMonth}
                            {#each getEventsForDate(d.date) as ev}
                            <div 
                            class="event-marker {ev.isStartOfSpan ? 'start-of-span' : ''} {ev.isEndOfSpan ? 'end-of-span' : ''}"
                            style="
                                background: {
                                    ev.isStartOfSpan 
                                        ? `linear-gradient(to right, ${ev.color}00, ${ev.color})` 
                                        : ev.isEndOfSpan 
                                            ? `linear-gradient(to left, ${ev.color}00, ${ev.color})`
                                            : ev.color
                                };
                                background: {
                                    ev.isStartOfSpan 
                                        ? `linear-gradient(to right, rgba(0,0,0,0), ${ev.color})` 
                                        : ev.isEndOfSpan 
                                            ? `linear-gradient(to left, rgba(0,0,0,0), ${ev.color})`
                                            : ev.color
                                }
                            "
                            transition:slide={{duration: 500}}

                        ></div>
                            {/each}
                        {/if}
                    </div>
                </div>
            {/each}
        </div>


        </div>
      {/each}
    </div>
  </div>
  