<script lang="ts">
    import TimezonePicker from "./timezone/timezone-picker.svelte";
    import type { Component } from "qrwc-svelte";
    let {component,index}: {component:Component,index:number} = $props();


    const panelName = component.useText(`Name ${index}`);
    const timezone = component.useText(`Timezone ${index}`);
    const format24Hour = component.useButton(`Format24Hr ${index}`);
    let timezoneDialog = $state<HTMLDialogElement | null>(null);

    function setTimezone(tz: string) {
        timezone.string = tz;
        timezoneDialog?.close();
    }

</script>

<fieldset class="fieldset w-full">
    <legend class="fieldset-legend">Panel Name</legend>
    <input type="text" class="input" placeholder="Type here" bind:value={panelName.string} />
</fieldset>

<fieldset class="fieldset w-full">
    <legend class="fieldset-legend">Timezone Selection</legend>
    <button class="input" onclick={() => timezoneDialog?.showModal()}>{timezone.string === "" ? "Select Timezone" : timezone.string}</button>
</fieldset>

<fieldset class="fieldset bg-base-100 w-full p-4">
    <legend class="fieldset-legend">24 Hour Format</legend>
    <label class="label">
      <input type="checkbox" bind:checked={format24Hour.state} class="checkbox" />
      Use 24 hour format
    </label>
  </fieldset>


<!-- Timezone Picker Modal -->
<dialog bind:this={timezoneDialog} class="modal">
    <div class="modal-box">
      
        <TimezonePicker onSelect={setTimezone} />

      <div class="modal-action mt-8">
        <form method="dialog" class="w-full flex justify-around">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn btn-outline w-32">Cancel</button>
        </form>
      </div>
    </div>
    <!-- This allows the modal to be closed by clicking the backdrop -->
    <form method="dialog" class="modal-backdrop">
      <button>Cancel</button>
    </form>
  </dialog>