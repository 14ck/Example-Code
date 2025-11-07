<script lang="ts">
  import { qrwc } from "$lib/qrwc";
  import { type CableTvChannelPreset } from "$lib/data/interfaces/remote.interface";

  let { preset }: { preset: CableTvChannelPreset } = $props();

  let component = qrwc.useComponent(preset.recallComponentName);
  let trigger = component.useTrigger(preset.triggerButtonName);

</script>

<button class="btn bg-base-300 h-16 w-52" onclick={() => trigger.trigger()}>
  <img src={preset.icon} alt={preset.triggerButtonName} class="h-12" />
</button>
