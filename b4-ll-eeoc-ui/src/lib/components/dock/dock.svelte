<script lang="ts">
  import Presets from "./presets.svelte";
  import ClocksButton from "./clocks-button.svelte";
  import RemotesButton from "./remotes-button.svelte";
  import CamerasButton from "./cameras-button.svelte";
  import SettingsButton from "./settings-button.svelte";
</script>

<div class="flex justify-center h-full w-full">
  <div class="card card-border bg-base-100 h-full w-auto m-auto">
    <div class="card-body p-4 flex flex-row gap-4">
      <Presets/>
      <ClocksButton/>
      <CamerasButton/>
      <!-- <RemotesButton/> -->
      <SettingsButton/>
    </div>
  </div>
</div>
