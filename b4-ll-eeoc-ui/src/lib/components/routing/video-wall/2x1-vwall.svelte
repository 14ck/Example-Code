<script lang="ts">
    import { qrwc } from "$lib/qrwc";
    import DropDestination from "../drop-destination.svelte";
    import type { Source } from "$lib/data/interfaces/source.interface";

    let {selectedSource, componentName }: {selectedSource: Source | null, componentName: string} = $props();

    const component = qrwc.useComponent(componentName);

    const display1 = component.useKnob("integer.1");
    const display2 = component.useKnob("integer.2");
</script>

<div class="card card-border bg-base-100 m-auto">
    <div class="card-body grid grid-cols-2 gap-2">
        <DropDestination control={display1} {selectedSource}/>
        <DropDestination control={display2} {selectedSource}/>
    </div>
</div>