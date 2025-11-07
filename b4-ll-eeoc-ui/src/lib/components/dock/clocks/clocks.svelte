<script lang="ts">
  import { clocks, type Clock } from "$lib/data/clocks";
  import ClockShell from "./clock-shell.svelte";
  
  let selectedClock = $state<number>(clocks[0].id);
</script>

<div class="flex flex-col items-center w-full">
  <!-- Tabs centered -->
  <div class="tabs tabs-lift flex justify-center mb-4 w-full">
    {#each clocks as clock}
      <input
        type="radio"
        name="clock_tabs"
        class="tab"
        aria-label={clock.name}
        checked={selectedClock === clock.id}
        onclick={() => (selectedClock = clock.id)}
      />
      {#if selectedClock === clock.id}
        <div
          class="tab-content bg-base-100 border-base-300 p-6 flex flex-col w-full"
        >
          <ClockShell {clock} />
        </div>
      {/if}
    {/each}
  </div>
</div>
