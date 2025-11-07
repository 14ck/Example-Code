<script lang="ts">
    import { qrwc } from "$lib/qrwc";

    let { up, down, left, right, select, componentName }: { up: string, down: string, left: string, right: string, select?: string | undefined, componentName: string } = $props();

    let component = qrwc.useComponent(componentName);
    let upTrigger = component.useTrigger(up);
    let downTrigger = component.useTrigger(down);
    let leftTrigger = component.useTrigger(left);
    let rightTrigger = component.useTrigger(right);
    let selectTrigger = select ? component.useTrigger(select) : null;
</script>

<div class="grid grid-cols-3 grid-rows-3 gap-2 w-full h-full">
    <!-- Top Row -->
    <div></div>
    <button class="btn btn-outline w-full h-full" aria-label="Up" onclick={() => upTrigger.trigger()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>                   
    </button>
    <div></div>

    <!-- Middle Row -->
    <button class="btn btn-outline w-full h-full" aria-label="Left" onclick={() => leftTrigger.trigger()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </button>

    {#if select}
        <button class="btn btn-outline w-full h-full" aria-label="Select" onclick={() => selectTrigger?.trigger()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
              </svg>              
        </button>
    {:else}
        <div></div>
    {/if}

    <button class="btn btn-outline w-full h-full" aria-label="Right" onclick={() => rightTrigger.trigger()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>          
    </button>

    <!-- Bottom Row -->
    <div></div>
    <button class="btn btn-outline w-full h-full" aria-label="Down" onclick={() => downTrigger.trigger()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>          
    </button>
    <div></div>
</div>