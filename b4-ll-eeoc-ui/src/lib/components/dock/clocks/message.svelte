<script lang="ts">
    import TimezonePicker from "./timezone/timezone-picker.svelte";
    import type { Component } from "qrwc-svelte";
    let {component,index}: {component:Component,index:number} = $props();


    const panelName = component.useText(`Name ${index}`);
    const textMessage = component.useText(`TextMessage ${index}`);


</script>

<fieldset class="fieldset w-full">
    <legend class="fieldset-legend">Panel Name</legend>
    <input type="text" class="input" placeholder="Type here" bind:value={panelName.string} />
</fieldset>

<fieldset class="fieldset w-full">
    <legend class="fieldset-legend">Message</legend>
    <input type="text" class="input" placeholder="Type here" bind:value={textMessage.string} />
</fieldset>