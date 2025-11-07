<script lang="ts">
    import { qrwc } from "$lib/qrwc";

    const LightToggle = qrwc.useComponent("GymLightTog");
    const LightState = LightToggle.useTrigger("toggle");
    const StateFeedback = LightToggle.useButton("not");

    const ClockPwrCtl = qrwc.useComponent("ClocksPower");
    const ClockLeftPwr = ClockPwrCtl.useTrigger("trigger.1");
    const ClockRightPwr = ClockPwrCtl.useTrigger("trigger.2");

    const ClockLFbCtl = qrwc.useComponent("ClockLfb");
    const ClockLState = ClockLFbCtl.useButton("out");

    const ClockRFbCtl = qrwc.useComponent("ClockRfb");
    const ClockRState = ClockRFbCtl.useButton("out");
</script>

<div class="flex   flex-col items-center justify-center">

    <div class="flex items-center flex-row gap-12 ml-5">
        <h1 class="text-lg">Gym Light Toggle</h1>
        <h1 class="text-lg">Left Clock Power</h1>
        <h1 class="text-lg">Right Clock Power</h1>
    </div>



    <div class="flex flex-row items-center ml-5 gap-24">
        <!-- <div class="w-1/2 m-auto mb-10"></div> -->
            
            <button class="btn btn-xl mt-2 {StateFeedback.state ? 'btn-error' : 'btn-outline'}" onclick={() => LightState.trigger()}>
                {StateFeedback.state ? 'On' : 'Off'}
            </button>

            <button class="btn btn-xl mt-2 {ClockLState.state ? 'btn-success' : 'btn-error'}" onclick={() => ClockLeftPwr.trigger()}>
                {ClockLState.state ? 'On' : 'Off'}
            </button>

            <button class="btn btn-xl mt-2 {ClockRState.state ? 'btn-success' : 'btn-error'}" onclick={() => ClockRightPwr.trigger()}>
                {ClockRState.state ? 'On' : 'Off'}
            </button>


        <!-- MAIN CAMERA CONTROL AREA -->
    <!--  <div class="flex flex-row gap-50 justify-center"></div> -->
    </div>
</div>
