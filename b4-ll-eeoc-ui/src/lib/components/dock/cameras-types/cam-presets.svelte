<script lang="ts">
  import { qrwc } from "$lib/qrwc";
  import { camPresets, pset } from "$lib/data/cams";

  let { onPresetSave }: { onPresetSave: (arg0: number) => void } = $props();

  const component = qrwc.useComponent(camPresets.componentName);

  // Create a map of all preset buttons
  const buttons: Record<string, any> = {};

  for (const key in pset) {
    const presetValue = pset[key as unknown as keyof typeof pset];
    buttons[presetValue] = component.useButton(presetValue);
    //console.log(`Button for ${presetValue} initialized:`, buttons[presetValue]);
  }

  export function presetLabel(num: string | number) {
    return `Preset ${num}`;
  }
</script>

<div class="flex flex-row gap-2 justify-center mt-5 w-126 flex-wrap m-auto">
  {#each Object.entries(pset) as [num, value]}
    <button
      class="btn w-30 {buttons[value].state === true ? 'btn-primary' : ''} "
      onpointerdown={() => {
        buttons[value].state = true;
        onPresetSave(parseInt(num));
      }}
      onpointerup={() => (buttons[value].state = false)}
      onpointerout={() => (buttons[value].state = false)}
      onpointerleave={() => (buttons[value].state = false)}
      oncontextmenu={(e) => e.preventDefault()}
    >
      {presetLabel(num)}
    </button>
  {/each}
</div>
