<script lang="ts">
  import CableRemote from "./remote-types/cable-remote.svelte";
  import { sources } from "$lib/data/sources";
  import { type CableTvRemoteControl } from "$lib/data/interfaces/remote.interface";
  import type { Source } from "$lib/data/interfaces/source.interface";
  import { blur } from "svelte/transition";
  import { qrwc } from "$lib/qrwc";
  
  const CatvSelComponent = qrwc.useComponent("CatvSelect");
  const Catv1 = CatvSelComponent.useButton("selector.0")
  const Catv2 = CatvSelComponent.useButton("selector.1")
  const Catv3 = CatvSelComponent.useButton("selector.2")
  const Catv4 = CatvSelComponent.useButton("selector.3")
  const Catv1Label = CatvSelComponent.useText("label.0");
  const Catv2Label = CatvSelComponent.useText("label.1");
  const Catv3Label = CatvSelComponent.useText("label.2");
  const Catv4Label = CatvSelComponent.useText("label.3");
  const CatvSelection = CatvSelComponent.useText("value");

  const CtlArray = {
    "8": Catv1,
    "9": Catv2,
    "10": Catv3,
    "11": Catv4
  }

  const CtlLabelArray = {
    "8": Catv1Label,
    "9": Catv2Label,
    "10": Catv3Label,
    "11": Catv4Label
  }
  //for debug so i don't have to select a source every time
  const debugSource = sources.filter((s) => s.remote !== undefined)[0];
  let selectedRemote = $state<Source | null>(debugSource);

  $effect(() => {
  if (CatvSelection.string) {
    const matchingSource = sources.find(source => String(source.id) === CatvSelection.string);
    if (matchingSource && matchingSource.remote) {
      selectedRemote = matchingSource;
    }
  }
});


  export function selectRemote(source: Source) {
    selectedRemote = source;
    CtlArray[selectedRemote?.id as keyof typeof CtlArray].state = true
  }
</script>

<div class="grid gap-2" style="grid-template-columns: 12rem 1fr;">
  <!-- Device Select -->
  <div class="w-full h-full card card-border p-4">
    <div class="flex flex-col gap-2 my-auto">
      <h2 class="text-lg font-bold text-center">Select a Device</h2>
      {#each sources.filter((s) => s.remote !== undefined) as source}
        <button
          class={`btn w-full ${CtlArray[source?.id as keyof typeof CtlArray]?.state === true ? 'btn-primary' : ''}`}
          onclick={() => (selectedRemote = source)}
          onpointerdown={() => CtlArray[source?.id as keyof typeof CtlArray].state = true}
          oncontextmenu={(e) => e.preventDefault()}
        >
          {source.name}
        </button>
      {/each}
    </div>
  </div>

  <!-- Remote Controls -->
  <div class="flex flex-col gap-2 card card-border">
    <!-- Key is used to force a re-render when the selected remote changes -->
    {#key selectedRemote?.id}
     <div in:blur={{ duration: 350 }}>
      {#if selectedRemote?.remote}
        <!-- {console.log(selectedRemote.remote)} -->
        {#if selectedRemote.remote.type === "cable_tv"}
          <CableRemote
            remote={selectedRemote.remote as CableTvRemoteControl}
            name={selectedRemote.name}
          />
        {/if}
      {/if}
    </div>
    {/key}
  </div>
</div>
