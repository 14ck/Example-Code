<script lang="ts">
  import { qrwc } from "$lib/qrwc";
  import { camSelector, camnum } from "$lib/data/cams";
  const component = qrwc.useComponent(camSelector.componentName);
  const control = component.useKnob(camSelector.ctl);

  const camNames = {
    "1": "R Side Left",
    "2": "R Side Right",
    "3": "L Side Left",
    "4": "L Side Right",
    "5": "Front Left",
    "6": "Front Right",
  }
  let { onSelectedCam }: { onSelectedCam: (arg0: number) => void } = $props();
  $effect(() => {
    if (control.value !== undefined) {
      onSelectedCam(control.value);
    }
  });
</script>

<div class="flex flex-row gap-2 justify-center mt-10 w-126 flex-wrap m-auto">
  {#each Object.entries(camnum) as [num, value]}
    <button
      class="btn w-30 {control.value === Number(value) ? 'btn-primary' : ''} "
      onpointerdown={() => {control.value = Number(value);}}
      oncontextmenu={(e) => e.preventDefault()}
    >
      {camNames[num as keyof typeof camNames]}
    </button>
  {/each}
</div>
