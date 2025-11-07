<script lang="ts">
  import { qrwc } from "$lib/qrwc";
  import SourceTile from "./source-tile.svelte";
  import { sources } from "$lib/data/sources";
  import type { Source } from "$lib/data/interfaces/source.interface";
  import { dndzone, TRIGGERS, type DndEvent } from "svelte-dnd-action"; // needs version 0.9.38 or above
  import { type KnobControl } from "qrwc-svelte";
  import { callRemote } from "$lib/shared/call-remote";


  let {control, selectedSource, label = "", excludedSources = [] }: {control: KnobControl, selectedSource: Source | null, label?: string, excludedSources?: string[]} = $props();

  let source = $derived<Source>(
    sources.find((source) => source.id === control.value.toString()) ??
      sources[0]
  );

  let isActive = $state(false);

  let isExcluded = $derived(excludedSources?.includes(selectedSource?.id ?? "99999999"));

  function handleConsider(
    e: CustomEvent<DndEvent<Source>>
  ) {
    const { detail: {info: { trigger },},} = e;

    if(isExcluded) {
      return;
    }

    if (trigger === TRIGGERS.DRAGGED_ENTERED) {
      isActive = true;
    } else if (trigger === TRIGGERS.DRAGGED_LEFT) {
      isActive = false;
    }
    //source = { ...source };
  }
  function handleDrop(e: CustomEvent<DndEvent<Source>>) {
    if(isExcluded) {
      return;
    }

    //source = { ...source };
    isActive = false;

    control.value = parseInt(selectedSource?.id ?? "0");
  }

  //This allows us to summon a remote control if the destination clicked is displaying a source with a remote control
  function handleClick(source: Source) {
    if(source.remote) {
      callRemote(source);
    }
  }
</script>



<div class="flex flex-col m-auto {isExcluded ? 'opacity-25' : ''}">
  <section
    use:dndzone={{ items: [source], dragDisabled: true }}
    onconsider={handleConsider}
    onfinalize={handleDrop}

    class="card card-compact {isActive ? 'bg-cyan-600' : 'bg-base-200'} p-3 m-auto "
  >
    <button style={isActive ? "opacity: 0.3" : "opacity:1"} class="text-center prose" onclick={() => handleClick(source)}>
       <SourceTile {source} />
    </button>
    {#if label !== ""}
      <h6 class="text-center pt-1">{label}</h6>
    {/if}
  </section>
</div>