<script lang="ts">
  import CablePreset from "./cable-preset.svelte";
  import type { CableTvRemoteControl } from "$lib/data/interfaces/remote.interface";
  import DPad from "./dpad.svelte";
  import NumPad from "./num-pad.svelte";
  import { qrwc } from "$lib/qrwc";
  let { remote, name }: { remote: CableTvRemoteControl, name: string } = $props();

  const component = qrwc.useComponent(remote.componentName);
  const menuTrigger = component.useTrigger(remote.menu);
  const guideTrigger = component.useTrigger(remote.guide);
  const exitTrigger = component.useTrigger(remote.exit);
  const infoTrigger = component.useTrigger(remote.info);
  const powerTrigger = component.useTrigger(remote.power);
  const enterTrigger = component.useTrigger(remote.ok);
  const chUpTrigger = component.useTrigger(remote.chUp);
  const chDownTrigger = component.useTrigger(remote.chDown);
  const lastChTrigger = component.useTrigger(remote.lastCh);

</script>

<!-- <div class="grid p-3"> -->
  <!-- Channel Presets-->
  <!-- <div class="w-full flex flex-col"> -->
    <h1 class="text-2xl font-bold text-center col-span-3">{name} Controls</h1>
   <!--  <h1 class="text-2xl font-bold text-center">Channel Presets</h1> -->
    <div class="grid grid-cols-4 grid-rows-4 p-6 gap-6 ml-12 mr-auto">
      {#each remote.channelPresets as preset}
        <CablePreset {preset} />
      {/each}
    </div>
  <!-- </div> -->

  <!-- <div class="grid grid-cols-3 gap-8">
    
     Num Pad-->
      <!-- <div class="h-64 w-48 m-auto">
        <NumPad
          num0={remote.num0}
          num1={remote.num1}
          num2={remote.num2}
          num3={remote.num3}
          num4={remote.num4}
          num5={remote.num5}
          num6={remote.num6}
          num7={remote.num7}
          num8={remote.num8}
          num9={remote.num9}
          componentName={remote.componentName}
        />
      </div> -->
   <!--    <div class="flex flex-col gap-12 my-auto">
        <button class="btn btn-outline" onclick={() => chUpTrigger.trigger()}>CH+</button>
        <button class="btn btn-outline" onclick={() => chDownTrigger.trigger()}>CH-</button>
      </div> -->
      <!-- <div class="aspect-square w-48 m-auto">
        <DPad
          up={remote.up}
          down={remote.down}
          left={remote.left}
          right={remote.right}
          select={remote.ok}
          componentName={remote.componentName}
        />
      </div> -->
      

    <!-- <div class="mt-6 col-span-3">
        <div class="grid grid-cols-3 gap-4">
            <button class="btn btn-outline" onclick={() => menuTrigger.trigger()}>Menu</button>
            <button class="btn btn-outline" onclick={() => guideTrigger.trigger()}>Guide</button>
            <button class="btn btn-outline" onclick={() => exitTrigger.trigger()}>Exit</button>
            <button class="btn btn-outline" onclick={() => infoTrigger.trigger()}>Info</button>
            <button class="btn btn-outline" onclick={() => powerTrigger.trigger()}>Power</button>
            <button class="btn btn-outline" onclick={() => enterTrigger.trigger()}>Enter</button>
        </div>
    </div> -->
  <!-- </div> -->
<!-- </div> -->
