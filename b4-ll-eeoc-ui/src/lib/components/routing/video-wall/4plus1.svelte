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
</script>

<div class="card card-border bg-base-100 m-auto">
    <div class="card-body grid grid-cols-2 grid-rows-1 gap-2">
        <DropDestination control={display1} {selectedSource}/>
        <DropDestination control={display2} {selectedSource}/>
        <DropDestination control={display3} {selectedSource}/>
        <DropDestination control={display4} {selectedSource}/>
        <div class="inset-y-23 absolute left-80">
            <DropDestination control={display5} {selectedSource}/>
        </div>
    </div>
   
</div>

<!-- <div class="card card-border bg-base-100 m-auto">

<div class="inset-y-23 absolute left-80">
            <DropDestination control={display5} {selectedSource}/>
        </div>
</div>     -->    