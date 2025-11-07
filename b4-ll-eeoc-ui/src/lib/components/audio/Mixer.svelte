<script lang="ts">
  import { qrwc } from "$lib/qrwc";
  import { micMuteControls } from "$lib/data/micmutes";
  import { Toggle } from "carbon-components-svelte";
  // Create component instances for each gain control
  const gain1 = qrwc.useComponent("VlVol");
  const gain2 = qrwc.useComponent("AudVol");
  const gain3 = qrwc.useComponent("MainVol");
  const micMuteControl = qrwc.useComponent("MicMutes");

  const micMuteButtonControls = micMuteControls.map(({ ctl }) =>
    micMuteControl.useButton(ctl),
  );

  const RightControls = micMuteControls
    .map((control, i) => ({
      ...control,
      button: micMuteControl.useButton(control.ctl),
      index: i,
    }))
    .filter(({ position }) => position === "right")
    .reverse();

  const LeftControls = micMuteControls
    .map((control, i) => ({
      ...control,
      button: micMuteControl.useButton(control.ctl),
      index: i,
    }))
    .filter(({ position }) => position === "left");

  const HeadControls = micMuteControls
    .map((control, i) => ({
      ...control,
      button: micMuteControl.useButton(control.ctl),
      index: i,
    }))
    .filter(({ position }) => position === "head")
    .reverse();
  // Get the knob controls for each gain component
  const gain1Level = gain1.useKnob("gain");
  /* const gain2Level = gain2.useKnob("gain"); */
  const gain3Level = gain3.useKnob("gain");

  // Fetch mute buttons once for each gain
  const gain1Mute = gain1.useButton("mute");
  const gain2Mute = gain2.useButton("state");
  const gain3Mute = gain3.useButton("mute");
  /* let MicCtlTable = [] */

  /* for (let i = 1; i <= micMuteControls.length; i++) {
    MicCtlTable.push(micMuteControl.useButton(`toggle.${i}`));
    console.log(`MicCtlTable[${i}]`, MicCtlTable[i - 1]);
  } */
</script>

<div class="grid grid-cols-[150px_150px] justify-center items-center text-center">
  <!-- Gain 1 -->
  <div class="flex flex-col items-center justify-center">
    <input
      type="range"
      min={gain1Level.valueMin}
      max={gain1Level.valueMax}
      step="0.01"
      bind:value={gain1Level.value}
      class="h-40"
      style="writing-mode: vertical-lr; direction: rtl;"
    />
    <button
      class="btn mt-2 max-w-20 {gain1Mute.state ? 'btn-error' : 'btn-outline'}"
      onclick={() => gain1Mute.toggle()}
    >
      {gain1Mute.state ? "Muted" : "Mute"}
    </button>
  </div>
  <!-- Gain 2 -->
  <div class="flex flex-col items-center justify-center">
    <!-- <input
      type="range"
      min={gain2Level.valueMin}
      max={gain2Level.valueMax}
      step="0.01"
      bind:value={gain2Level.value}
      class="h-40"
      style="writing-mode: vertical-lr; direction: rtl;"
    /> -->
    <button
      class="btn mt-2 max-w-20 {gain2Mute.state ? 'btn-error' : 'btn-outline'}"
      onclick={() => gain2Mute.toggle()}
    >
      {gain2Mute.state ? "Muted" : "Mute"}
    </button>
  </div>
  <!-- Gain 3 -->
  <!-- <div class="flex flex-col items-center">
    <input
      type="range"
      min={gain3Level.valueMin}
      max={gain3Level.valueMax}
      step="0.01"
      bind:value={gain3Level.value}
      class="h-40"
      style="writing-mode: vertical-lr; direction: rtl;"
    />
    <button
      class="btn mt-2 {gain3Mute.state ? 'btn-error' : 'btn-outline'}"
      onclick={() => gain3Mute.toggle()}
    >
      {gain3Mute.state ? 'Muted' : 'Mute'}
    </button>
    <span class="mt-1 text-xs">Gain 3</span>
  </div> -->
  <span class="mt-5 text-sm">Voice Lift</span>
  <span class="mt-5 text-sm">Codec Mic Mute</span>
</div>

<hr class="my-6 border-gray-300" />
<div class="flex flex-col items-center">
  <span class="">
    <strong>Table Mic Mutes</strong>
  </span>
</div>

<div class="border mt-10">
  <div class="flex gap-4 m-4 justify-center">
    {#each LeftControls as { name, button }}
      <div>
        <button
          class="btn {button.state ? 'btn-outline' : 'btn-error'}"
          onclick={() => button.toggle()}
        >
          {name}
        </button>
      </div>
    {/each}
  </div>

  <!-- Head controls -->
  <div class="flex gap-320 m-4 justify-center">
    {#each HeadControls as { name, button }}
      <div>
        <button
          class="btn {button.state ? 'btn-outline' : 'btn-error'}"
          onclick={() => button.toggle()}
        >
          {name}
        </button>
      </div>
    {/each}
  </div>

  <div class="flex gap-5 m-4 justify-center">
    {#each RightControls as { name, button }}
      <div>
        <button
          class="btn {button.state ? 'btn-outline' : 'btn-error'}"
          onclick={() => button.toggle()}
        >
          {name}
        </button>
      </div>
    {/each}
  </div>
</div>
