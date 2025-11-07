<script lang="ts">
    import { type Clock } from "$lib/data/clocks";
    import type { Component } from "qrwc-svelte";
    import Blank from "./blank.svelte";
    import ClockComponent from "./clock.svelte";
    import Logo from "./logo.svelte";
    import MessageComponent from "./message.svelte";
    import StopwatchComponent from "./stopwatch.svelte";
    import TimerComponent from "./timer.svelte";
    let {component, index}: {component:Component, index:number} = $props();

    const typeSelect = component.useComboBox(`PanelType ${index}`);
    
</script>

<div class="flex flex-col items-center w-full p-4">
    <h3 class="text-center text-lg font-bold">Panel {index}</h3>
    <fieldset class="fieldset w-full">
        <legend class="fieldset-legend">Panel Type</legend>
        <select class="select" bind:value={typeSelect.string}>
          {#each typeSelect.choices as choice}
            <option value={choice}>{choice}</option>
          {/each}
        </select>
      </fieldset>

      {#if typeSelect.string === "blank"}
        <Blank component={component} index={index} />
      {:else if typeSelect.string === "logo"}
        <Logo component={component} index={index} />
      {:else if typeSelect.string === "clock"}
        <ClockComponent component={component} index={index} />
      {:else if typeSelect.string === "stopwatch"}
        <StopwatchComponent component={component} index={index} />
      {:else if typeSelect.string === "timer"}
        <TimerComponent component={component} index={index} />
      {:else if typeSelect.string === "message"}
        <MessageComponent component={component} index={index} />
      {/if}
</div>