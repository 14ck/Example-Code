<script lang="ts">
  import type { Component } from "qrwc-svelte";
  let { component, index }: { component: Component; index: number } = $props();
  let stopwatchStartTime = component.useText(`StopwatchStartTime ${index}`);
  let stopwatchRun = component.useButton(`StopwatchRun ${index}`);
  let clockFeedback = component.useText(`ClockFeedback ${index}`);
  let coreTime = component.useText(`CoreTime`);
  const panelName = component.useText(`Name ${index}`);

  let currentTime = $derived(parseInt(coreTime.string ?? "0"));


  function getTimeInMs() {
    const elapsedTime = clockFeedback.string ?? "00";
    // Convert elapsedTime (hh:mm:ss, mm:ss, or ss) to milliseconds
    if (!elapsedTime || elapsedTime === "00") return 0;
    const parts = elapsedTime.split(":").map(Number);
    let ms = 0;
    if (parts.length === 3) {
      // hh:mm:ss
      ms = (parts[0] * 3600 + parts[1] * 60 + parts[2]) * 1000;
    } else if (parts.length === 2) {
      // mm:ss
      ms = (parts[0] * 60 + parts[1]) * 1000;
    } else if (parts.length === 1) {
      // ss
      ms = parts[0] * 1000;
    }
    return ms;
  }

  function startStopwatch() {
    const currentMs = getTimeInMs();
    if (currentMs > 0) {
        stopwatchStartTime.string = (currentTime - currentMs).toString();
    } else {
        stopwatchStartTime.string = coreTime.string;
    }
    stopwatchRun.state = true;
  }

  function stopStopwatch() {
    stopwatchRun.state = false;
  }

  function resetStopwatch() {
    if(stopwatchRun.state) {
        stopwatchStartTime.string = coreTime.string;
    }
    else {
        stopwatchStartTime.string = "";
    }
  }
</script>

<fieldset class="fieldset w-full">
    <legend class="fieldset-legend">Panel Name</legend>
    <input type="text" class="input" placeholder="Type here" bind:value={panelName.string} />
</fieldset>

<div class="flex flex-col items-center w-full p-4">
  <p class="fieldset-legend w-full text-left text-xs">Current Time</p>
  <div class="card bg-base-300 w-full">
    <p class="text-center text-xl font-bold font-mono h-7">
      {clockFeedback.string}
    </p>
  </div>

  <div class="h-4"></div>

  <div class="flex w-full flex-col gap-2">
    {#if stopwatchRun.state}
      <button class="btn btn-outline w-full" onclick={() => stopStopwatch()}>Stop</button>
      <button class="btn btn-outline w-full" onclick={() => resetStopwatch()}>Reset</button>
    {:else}
      <button class="btn btn-outline w-full" onclick={() => startStopwatch()}>Start</button>
      {#if clockFeedback.string !== "00"}
        <button class="btn btn-outline w-full" onclick={() => resetStopwatch()}>Reset</button>
      {/if}
    {/if}
  </div>
</div>
