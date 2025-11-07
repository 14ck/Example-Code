<script lang="ts">
    import { qrwc } from "$lib/qrwc";
    import type { CamCtls } from "$lib/data/cams.ts";
    let { zoomIn, zoomOut, componentName }: { zoomIn: string, zoomOut: string, componentName: string } = $props();
    
    let component = qrwc.useComponent(componentName);
    let zoomInTrigger = component.useButton(zoomIn);
    let zoomOutTrigger = component.useButton(zoomOut);
</script>

<div class="grid gap-.5 h-full grid-cols-1">
    <!-- Zoom In Button -->
    <div class="flex flex-col gap-22 justify-center">
        
        <button class="btn btn-outline w-18 h-18 {zoomInTrigger.state === true ? 'btn-primary' :''}" aria-label="Zoom In"onpointerdown ={() => zoomInTrigger.state = true} onpointerup={() => zoomInTrigger.state = false} oncontextmenu={(e) => e.preventDefault()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        </button>

        <!-- Zoom Out Button -->
        <button class="btn btn-outline w-18 h-18 {zoomOutTrigger.state === true ? 'btn-primary' :''}" aria-label="Zoom Out" onpointerdown ={() => zoomOutTrigger.state = true} onpointerup={() => zoomOutTrigger.state = false} oncontextmenu={(e) => e.preventDefault()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
        </svg>
        </button>
    </div>  
   
</div>