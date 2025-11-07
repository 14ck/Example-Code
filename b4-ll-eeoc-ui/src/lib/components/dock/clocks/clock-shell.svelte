<script lang="ts">
  import { type Clock } from "$lib/data/clocks";
  import { qrwc } from "$lib/qrwc";
  import ClockPanel from "./clock-panel.svelte";
  let { clock } = $props<{ clock: Clock }>();

  const component = qrwc.useComponent(clock.component);
  const panelsKnob = component.useKnob("NumberOfPanels");
</script>

<div class="flex flex-col items-center w-full">
  <!-- Clock Panel count setting -->
  <div class="flex flex-col">
    <h2 class="text-center text-lg font-bold">Clock Panels</h2>
    <div class="flex">
      <button
        class="btn btn-outline btn-circle"
        onclick={() => panelsKnob.value--}
        disabled={panelsKnob.value <= 1}>-</button
      >
      <span class="text-lg font-bold m-auto w-12 text-center"
        >{panelsKnob.value}</span
      >
      <button
        class="btn btn-outline btn-circle"
        onclick={() => panelsKnob.value++}
        disabled={panelsKnob.value >= 6}>+</button
      >
    </div>
  </div>
  <div class="h-4"></div>
  <!-- Clock Panels -->
  <div class="grid gap-4 w-full" style="grid-template-columns: repeat({panelsKnob.value}, 1fr);">
    {#each Array.from({ length: panelsKnob.value }) as _, index}
      <div class="card card-border bg-base-100 w-46 h-[500px]">
        <ClockPanel component={component} index={index + 1} />
      </div>
    {/each}
  </div>
</div>
