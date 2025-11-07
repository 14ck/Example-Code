<script lang="ts">
    import * as bg from "$assets/and-machines-YLplJ9m_RKE-unsplash.jpg";
    import { qrwc } from "$lib/qrwc";   
    
    const component = qrwc.useComponent("StatusText");
    const statusText = component.useText("text.1");

</script>

<div class="absolute inset-0 w-full h-full">
    <img
        src={bg.default}
        alt="background"
        class="absolute inset-0 w-full h-full object-cover blur-xs"
    />

    <div class="absolute inset-0 flex items-center justify-center ease-in-out duration-500">
    <progress class="progress progress-primary w-300 h-20 rounded-2xl"></progress>
    </div>
    <h2 class="absolute text-5xl text-black font-bold text-center left-0 right-0 bottom-0 mb-100">
        {statusText.string}
    </h2>
</div>
