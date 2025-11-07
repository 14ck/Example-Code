<script lang="ts">
  import { qrwc } from "$lib/qrwc";
  import { name, cam } from "$lib/data/cams";
  import DPad from "./cameras-types/dpad-cam.svelte";
  import CamSelect from "./cameras-types/select-cam.svelte";
  import CamPresets from "./cameras-types/cam-presets.svelte";
  import ZoomCam from "./cameras-types/zoom-cam.svelte";
  import CamTrack from "./cameras-types/cam-tracking.svelte";
  import { camPresets, pset } from "$lib/data/cams";

  const component = qrwc.useComponent(camPresets.componentName);
  const psetsaved = component.useButton(camPresets.saved);
  const psetswait = component.useButton(camPresets.wait);

  let SavedPreset = $state<number>(0);
  let SelectedCam = $state<number>(0);

  function onPresetSave(num: number) {
    //console.log(`Preset ${num} saved`);
    SavedPreset = num;
  }

  function onSelectedCam(num: number) {
    //console.log(`Cam ${num} selected`);
    SelectedCam = num;
  }
</script>

<div class="w-full m-auto">
  <div class="w-1/2 m-auto mb-10">
    <CamSelect {onSelectedCam} />
  </div>

  <!-- MAIN CAMERA CONTROL AREA -->
  <div class="flex flex-row gap-50 justify-center">
    <!-- DPad -->
    <DPad
      up={name.up}
      down={name.down}
      left={name.left}
      right={name.right}
      select={name.select}
      componentName={cam.componentName}
    />

    <!-- ZoomCam vertically stacked -->
    <ZoomCam
      zoomIn={name.zoomIn}
      zoomOut={name.zoomOut}
      componentName={cam.componentName}
    />
  </div>

  <!-- Preset Buttons -->
  <div class="flex items-center justify-center">
    {#if psetswait.state === true}
      <svg class="animate-spin" viewBox="0 0 24 24" width="24" height="24">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="black"
          stroke-width="4"
          fill="none"
        />
        <path
          d="M22 12a10 10 0 0 1-10 10"
          stroke="white"
          stroke-width="4"
          fill="none"
        />
      </svg>
    {/if}

    {#if psetsaved.state === true}
      <div
        style="min-height:2rem;display:flex;align-items:center;justify-content:center;"
      >
        <span class="label label-primary">
          Saved Cam {SelectedCam} Coordinates to Preset {SavedPreset}
        </span>
      </div>
    {:else}
      <div
        style="min-height:2rem;display:flex;align-items:center;justify-content:center;"
      ></div>
    {/if}
    
  </div>
  <div class="w-1/2 m-auto">
    <CamPresets {onPresetSave} />
  </div>

  <h2 class="text-center w-full mt-5 m-auto text-l font-bold">
    Camera Tracking
  </h2>

  <div class="w-1/2 m-auto mb-2">
    <CamTrack />
  </div>
</div>
