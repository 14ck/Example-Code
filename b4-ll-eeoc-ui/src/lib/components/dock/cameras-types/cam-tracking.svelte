<script lang="ts">
    import { qrwc } from "$lib/qrwc";
    import { camTrack } from "$lib/data/cams";
    const component = qrwc.useComponent(camTrack.componentName);
    const setBtn = component.useTrigger(camTrack.on);
    const resetBtn = component.useTrigger(camTrack.off);
    const Active = component.useButton(camTrack.active);
    const InActive = component.useButton(camTrack.inactive);
</script>

<div class="flex flex-row gap-2 justify-center mt-10 w-126 flex-wrap m-auto">
    <div></div>
    <!-- Zoom In Button -->
    
        <div class="flex flex-row gap-5 my-auto">
            <button
                class="btn w-30 {Active.state === true ? 'btn-primary' :''}"
                aria-label="Enable Tracking"
                onpointerdown={() => {setBtn.trigger()}}
                oncontextmenu={(e) => e.preventDefault()}
            >
                On
            </button>

            <!-- Zoom Out Button -->
            <button
                class="btn w-30 {InActive.state === true ? 'btn-primary' :''}"
                aria-label="Disable Tracking"
                onpointerdown={() => {resetBtn.trigger()}}
                oncontextmenu={(e) => e.preventDefault()}
            >
                Off
            </button>
        </div>
    
</div>
