<script lang="ts">
    import * as bg from "$assets/and-machines-YLplJ9m_RKE-unsplash.jpg";
    import * as logo from "$assets/EPEO_Logo_navy_and_orange_with_white_circle-RGB.svg";
    import { qrwc } from "$lib/qrwc";

    const component = qrwc.useComponent("StartShutdown");
    const start = component.useTrigger("trigger.1");
</script>

<div class="absolute inset-0 w-full h-full">
    <img
        src={bg.default}
        alt="background"
        class="absolute inset-0 w-full h-full object-cover"
    />

    <h1
        class="absolute text-4xl text-black font-bold text-center inset-0 justify-top p-20"
    >
        Welcome to the EEOC
    </h1>
    <h2
        class="absolute text-5xl text-black font-bold text-center left-0 right-0 bottom-0 mb-40"
    >
        Touch anywhere to start the System
    </h2>
    <button
        type="button"
        class="absolute text-2xl text-black font-bold text-center w-full h-full cursor-pointer bg-transparent border-none outline-none"
        onpointerdown={() => start.trigger()} 
        oncontextmenu={(e) => e.preventDefault()}
    >
        <div class="absolute flex items-center justify-center inset-0">
            <img src={logo.default} alt="logo" class="w-160 h-160" />
        </div>
    </button>
</div>
