<script lang="ts">
    import { dndzone, TRIGGERS, type DndEvent } from "svelte-dnd-action"; // needs version 0.9.38 or above
    import { tick } from "svelte";
    import { flip } from "svelte/animate";
    import { sources , SourceSyncName } from "$lib/data/sources";
    import type { Source } from "$lib/data/interfaces/source.interface";
    import SourceTile from "./source-tile.svelte";
    import { qrwc } from "$lib/qrwc";

    const connectionStatusComponent = qrwc.useComponent(SourceSyncName);

    let totalsources = 4; // I only want to show the first 4 sources as connected.  Update to sources.length if you want to show all sources

    let statusLed: { [key: string]: any } = {};
    for (let i = 1; i <= totalsources; i++) {
        // the 'In ${i}' is for the actual control name within the component script and would change based on which component is being used
        statusLed[i] = connectionStatusComponent.useButton(`In ${i}`);
    }

    let {source, listDrag }: {source: Source, listDrag: (arg0: Source | null) => void} = $props();

    const flipDurationMs = 100;

    function handleSort(
        e: CustomEvent<DndEvent<Source>>,
    ) {
        const {
            detail: {
                items: newItems,
                info: { trigger, id },
            },
        } = e;
        if (trigger === TRIGGERS.DRAG_STARTED) {
            //there can only be once source per "list" so the drag event is always this source
            listDrag(source);
        }
        items = newItems;
    }
    function handleDrop(
        e: CustomEvent<DndEvent<Source>>,
    ) {
        const {
            detail: {
                items: newItems,
                info: { trigger },
            },
        } = e;
        if (
            trigger === TRIGGERS.DROPPED_INTO_ZONE ||
            trigger === TRIGGERS.DROPPED_OUTSIDE_OF_ANY
        ) {
            items = [...item];
        } else {
            items = [...item];
        }
        tick().then(() => listDrag(null));
    }
    let item = [source];
    let items = $state([...item]);
</script>

<div class="w-24 h-24 relative">
    <section
        class="h-full w-full absolute"
        style="z-index: 1;"
        use:dndzone={{ items, flipDurationMs, dropFromOthersDisabled: true }}
        onconsider={handleSort}
        onfinalize={handleDrop}
    >
        {#each items as item (item.id)}
            <div
                animate:flip={{ duration: flipDurationMs }}
                class="card bg-base-200 h-full w-full"
            >
               <SourceTile source={item}/>
               <h2 class="text-xs text-center">
                {#if statusLed[String(item.id)]?.state}
                  <span class="label w-full justify-center text-xs">Connected</span>
                {/if}
              </h2>
            </div>
        {/each}
    </section>
    <div class="absolute opacity-35 card bg-base-200 h-full w-full">
        <SourceTile source={source}/>
    </div>
</div>
