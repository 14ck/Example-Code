<script lang="ts">
    import SourceIcon from "../icon/source-icon.svelte";
import type { Source } from "$lib/data/interfaces/source.interface";

    let {source}: {source: Source} = $props();
</script>

<div class="card card-border bg-base-100 w-24 h-24 flex flex-col items-center justify-center">
    <div class="card-body w-full">
        <SourceIcon icon={source.icon} size={16} />
        <h2 class="label w-full justify-center text-xs">{source.name}</h2>
    </div>
</div>