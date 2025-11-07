<script lang="ts">
  import type { Component } from "qrwc-svelte";
  let { component, index }: { component: Component; index: number } = $props();
  let timerExpireAt = component.useText(`TimerExpireAt ${index}`);
  let timerAllowOverrun = component.useButton(`TimerAllowOverrun ${index}`);
  let clockFeedback = component.useText(`ClockFeedback ${index}`);
  let coreTime = component.useText(`CoreTime`);
  const panelName = component.useText(`Name ${index}`);
  let timerDialog = $state<HTMLDialogElement | null>(null);
  let currentTime = $derived(parseInt(coreTime.string ?? "0"));

  let timerSetString = $state<string>("");


  let timerStringDisplay = $derived.by(() => {
    // Remove any non-digit characters
    let str = timerSetString.replace(/\D/g, "");
    // If empty, return empty string
    if (!str) return "";
    // If 2 or fewer digits, just return as is
    if (str.length <= 2) return str;
    // If 3-4 digits, insert one colon after the first group
    if (str.length <= 4) {
      return str.slice(0, str.length - 2) + ":" + str.slice(-2);
    }
    // If 5-6 digits, insert two colons: leftmost, then next two, then last two
    // Leftmost can be any length
    return (
      str.slice(0, str.length - 4) +
      ":" +
      str.slice(str.length - 4, str.length - 2) +
      ":" +
      str.slice(-2)
    );
  });



  function getTimeInMs(str:string) {
    const elapsedTime = str ?? "00";
    // Convert elapsedTime (hh:mm:ss, mm:ss, or ss) to milliseconds
    if (!elapsedTime || elapsedTime === "00") return 0;
    const parts = elapsedTime.split(":").map(Number)
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

  function setTimer() {
    const timeInMs = getTimeInMs(timerStringDisplay);
    if (timeInMs > 0) {
      timerExpireAt.string = (timeInMs + currentTime).toString();
    }
    timerDialog?.close();
  }

  function showTimerDialog() {
    timerSetString = "";
    timerDialog?.showModal();
  }

  function closeTimerDialog() {
    timerSetString = "";
    timerDialog?.close();
  }

  function clearTimer() {
    timerExpireAt.string = "";
    clockFeedback.string = "";
  }

  function pauseTimer() {
    timerExpireAt.string = "";
  }

  function resumeTimer() {
    const timeInMs = getTimeInMs(clockFeedback.string);
    if (timeInMs > 0) {
      timerExpireAt.string = (timeInMs + currentTime).toString();
    }
  }


</script>

<fieldset class="fieldset w-full">
  <legend class="fieldset-legend">Panel Name</legend>
  <input
    type="text"
    class="input"
    placeholder="Type here"
    bind:value={panelName.string}
  />
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
    {#if timerExpireAt.string !== ""}
    <button class="btn btn-outline w-full" onclick={() => pauseTimer()}>Pause</button>
      <button
        class="btn btn-outline w-full"
        onclick={() => clearTimer()}>Clear</button
      >
    {:else}
        {#if clockFeedback.string !== ""}
        <button class="btn btn-outline w-full" onclick={() => resumeTimer()}>Resume</button>
        {/if}
      <button
        class="btn btn-outline w-full"
        onclick={() => showTimerDialog()}>{clockFeedback.string === "" ? "Set" : "Reset"}</button
      >
    {/if}
  </div>

  <fieldset class="fieldset bg-base-100 w-full p-4">
    <legend class="fieldset-legend">Allow Overrun</legend>
    <label class="label">
      <input
        type="checkbox"
        bind:checked={timerAllowOverrun.state}
        class="checkbox"
      />
      Allow overrun
    </label>
  </fieldset>
</div>

<dialog bind:this={timerDialog} class="modal">
  <div class="modal-box">
    <div class="flex flex-col w-full items-center">
      <h1 class="w-full text-center text-lg font-bold mb-2">Set Timer</h1>
      <div class="card bg-base-300 w-full">
        <p class="w-full text-center text-lg font-bold mb-2 h-7">
          {timerStringDisplay}
        </p>
      </div>
    </div>

    <div class="h-4"></div>

    <div class="grid grid-cols-3 grid-rows-4 gap-4 m-auto w-52">
      <button
        class="btn btn-outline btn-circle w-full aspect-square"
        onclick={() => (timerSetString += "1")}>1</button
      >
      <button
        class="btn btn-outline btn-circle w-full aspect-square"
        onclick={() => (timerSetString += "2")}>2</button
      >
      <button
        class="btn btn-outline btn-circle w-full aspect-square"
        onclick={() => (timerSetString += "3")}>3</button
      >
      <button
        class="btn btn-outline btn-circle w-full aspect-square"
        onclick={() => (timerSetString += "4")}>4</button
      >
      <button
        class="btn btn-outline btn-circle w-full aspect-square"
        onclick={() => (timerSetString += "5")}>5</button
      >
      <button
        class="btn btn-outline btn-circle w-full aspect-square"
        onclick={() => (timerSetString += "6")}>6</button
      >
      <button
        class="btn btn-outline btn-circle w-full aspect-square"
        onclick={() => (timerSetString += "7")}>7</button
      >
      <button
        class="btn btn-outline btn-circle w-full aspect-square"
        onclick={() => (timerSetString += "8")}>8</button
      >
      <button
        class="btn btn-outline btn-circle w-full aspect-square"
        onclick={() => (timerSetString += "9")}>9</button
      >
      <button
        class="btn btn-outline btn-circle w-full aspect-square"
        onclick={() => (timerSetString += "00")}>00</button
      >
      <button
        class="btn btn-outline btn-circle w-full aspect-square"
        onclick={() => (timerSetString += "0")}>0</button
      >
      <button
        class="btn btn-outline btn-circle w-full aspect-square"
        onclick={() => (timerSetString = timerSetString.slice(0, -1))}
        aria-label="backspace"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
          />
        </svg>
      </button>
    </div>

    <div class="modal-action mt-8">
      <form method="dialog" class="w-full flex justify-around">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-outline w-32" onclick={() => closeTimerDialog()}>Cancel</button>
        <button class="btn btn-outline w-32" onclick={() => setTimer()}>Set</button>
      </form>
    </div>
  </div>
  <!-- This allows the modal to be closed by clicking the backdrop -->
  <form method="dialog" class="modal-backdrop">
    <button>Cancel</button>
  </form>
</dialog>
