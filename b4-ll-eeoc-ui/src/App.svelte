<script lang="ts">
  import { qrwc } from "$lib/qrwc";
  import * as bg from "$assets/and-machines-YLplJ9m_RKE-unsplash.jpg";
  import Connecting from "$lib/components/connecting.svelte";
  import Main from "$lib/main.svelte";
</script>

<!-- Global Container -->
<div
data-theme="corporate"
  class="flex flex-col items-center justify-center h-[1080px]  w-[1920px] relative overflow-hidden"
>
  <!-- Background Image -->
  <div class="absolute inset-0 w-full h-full">
    <img
        src={bg.default}
        alt="background"
        class="absolute inset-0 w-full h-full object-cover"
      />
  </div>

  <!-- Main Content -->
  <div class="absolute inset-0 w-full h-full flex flex-col items-center justify-start p-8">
    {#if qrwc.isConnected}
      <!-- Only show Main if connected -->
      <Main/>
    {:else}
      <!-- Show Connecting if not connected -->
    <div class="h-full flex flex-col justify-center align-middle">
      <Connecting/>
    </div>
    {/if}
  </div>
</div>
