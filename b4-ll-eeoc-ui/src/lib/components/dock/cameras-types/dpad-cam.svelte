<script lang="ts">
    import { qrwc } from "$lib/qrwc";
    let { up, down, left, right, select, componentName }: { up: string, down: string, left: string, right: string, select?: string | undefined, componentName: string } = $props();
    
    let component = qrwc.useComponent(componentName);
    let upTrigger = component.useButton(up);
    let downTrigger = component.useButton(down);
    let leftTrigger = component.useButton(left);
    let rightTrigger = component.useButton(right);
    let selectTrigger = select ? component.useButton(select) : null;
</script>

<div class="grid grid-cols-3 gap-2">
    <!-- Top Row -->
    <div></div>
    <button class="btn btn-outline w-18 h-18 {upTrigger.state === true ? 'btn-primary' :''}" aria-label="Up" onpointerdown ={() => upTrigger.state = true} onpointerup={() => upTrigger.state = false} oncontextmenu={(e) => e.preventDefault()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>                   
    </button>
    <div></div>

    <!-- Middle Row -->
    <button class="btn btn-outline w-18 h-18 {leftTrigger.state === true ? 'btn-primary' :''}" aria-label="Left" onpointerdown ={() => leftTrigger.state = true} onpointerup={() => leftTrigger.state = false} oncontextmenu={(e) => e.preventDefault()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </button>

    {#if selectTrigger}
        <button class="btn btn-outline w-18 h-18 {selectTrigger?.state === true ? 'btn-primary' :""}" aria-label="Select" onpointerdown ={() => selectTrigger.state = true} onpointerup={() => selectTrigger.state = false} oncontextmenu={(e) => e.preventDefault()}>
            Home          
        </button>
    {:else}
        <div></div>
    {/if}

    <button class="btn btn-outline w-18 h-18 {rightTrigger.state === true ? 'btn-primary' :''}" aria-label="Right" onpointerdown ={() => rightTrigger.state = true} onpointerup={() => rightTrigger.state = false} oncontextmenu={(e) => e.preventDefault()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>          
    </button>

    <!-- Bottom Row -->
    <div></div>
    <button class="btn btn-outline w-18 h-18 {downTrigger.state === true ? 'btn-primary' :''}" aria-label="Down" onpointerdown ={() => downTrigger.state = true} onpointerup={() => downTrigger.state = false} oncontextmenu={(e) => e.preventDefault()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>          
    </button>
    <div></div>
</div>
