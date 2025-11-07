<script lang="ts">
    import { qrwc } from "$lib/qrwc";
    import Mixer from "./Mixer.svelte";
    let mixerDialog: HTMLDialogElement;

    const VCCallIsActive = qrwc.useComponent("CallActive").useButton("out");

    const mainGain = qrwc.useComponent('MainVol')
    const mainGainLevel = mainGain.useKnob('gain');
    const mainGainMute = mainGain.useButton('mute');

    const VCGain = qrwc.useComponent('VCVolume')
    const VCGainLevel = VCGain.useKnob('gain');
    const VCGainMute = VCGain.useButton('mute');
</script>


<div class="card card-border bg-base-100 w-full h-full">
    {#if VCCallIsActive.state}
    <h2 class="card-title p-4 w-full text-center flex justify-center">Call Volume</h2>
    <div class="card-body h-full w-full grid" style="grid-template-rows: 1fr 4rem;">

        <input type="range" bind:value={VCGainLevel.value} min={VCGainLevel.valueMin} max={VCGainLevel.valueMax} class="h-full" style="writing-mode: vertical-lr; direction: rtl;"/>

        <button class="btn mt-4 {VCGainMute.state ? 'btn-error' : 'btn-outline'}" onclick={() => VCGainMute.toggle()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
              </svg>
            Mute              
        </button>
    </div>
    {:else}
    <h2 class="card-title p-4 w-full text-center flex justify-center">Main Volume</h2>
    <div class="card-body h-full w-full grid" style="grid-template-rows: 1fr 4rem;">

        <input type="range" bind:value={mainGainLevel.value} min={mainGainLevel.valueMin} max={mainGainLevel.valueMax} class="h-full" style="writing-mode: vertical-lr; direction: rtl;"/>

        <button class="btn mt-4 {mainGainMute.state ? 'btn-error' : 'btn-outline'}" onclick={() => mainGainMute.toggle()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
              </svg>
            Mute              
        </button>
    </div>
    {/if}

    <button class="btn btn-outline m-6 mt-1" onclick={() => mixerDialog.showModal()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
          </svg>
          
        Mixer
    </button>
</div>


<dialog bind:this={mixerDialog} class="modal">
    <div class="modal-box max-w-max">
      <h3 class="text-lg font-bold">Audio Mixer</h3>
      <Mixer />

      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>