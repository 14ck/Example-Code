<script lang="ts">
    import { qrwc } from "$lib/qrwc";
    import DropDestination from "../drop-destination.svelte";
    import type { Source } from "$lib/data/interfaces/source.interface";

    let {selectedSource, componentName }: {selectedSource: Source | null, componentName: string} = $props();

   /*  const Exclusions = [
        "10",
        "11",
    ] */

/*     excludedSources={Exclusions} */

    const component = qrwc.useComponent(componentName);


    const display1 = component.useKnob("integer.1");
    const display2 = component.useKnob("integer.2");
    const display3 = component.useKnob("integer.3");
    const display4 = component.useKnob("integer.4");
    const display5 = component.useKnob("integer.5");
    const display6 = component.useKnob("integer.6");
    const display7 = component.useKnob("integer.7");
    const display8 = component.useKnob("integer.8");
</script>

<div class="card card-border bg-base-100 m-auto">
    <div class="card-body grid grid-cols-4 grid-rows-2 gap-2">
        <DropDestination control={display1} {selectedSource}/>
        <DropDestination control={display2} {selectedSource}/>
        <DropDestination control={display3} {selectedSource}/>
        <DropDestination control={display4} {selectedSource}/>
        <DropDestination control={display5} {selectedSource}/>
        <DropDestination control={display6} {selectedSource}/>
        <DropDestination control={display7} {selectedSource}/>
        <DropDestination control={display8} {selectedSource}/>
    </div>
</div>