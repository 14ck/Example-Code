<script lang="ts">
  import { sources , SourceSyncName } from "$lib/data/sources";
  import type { Source } from "$lib/data/interfaces/source.interface";
  import DraggableSource from "./draggable-source.svelte";
  import { qrwc } from "$lib/qrwc";

  const ledComp = qrwc.useComponent("UsRouteNotification");
  const Led1 = ledComp.useButton("led.1");
  const Led2 = ledComp.useButton("led.2");

  const computerSources = sources.filter(
    (source) => source.type === "computer"
  );

/*   const cableTvSources = sources.filter(
    (source) => source.type === "cable_tv"
  ); */

  const PCSources = sources.filter(
    (source) => source.type === "pc"
  );

  const videoConferencingSources = sources.filter(
    (source) => source.type === "video_conferencing"
  );

  let { sourceDrag }: { sourceDrag: (arg0: Source | null) => void } = $props();

  let selectedTab = $state("computers");

 
</script>

<!-- {#if Led1.state || Led2.state} ---Deprecated Notification Shared Source
  <div class="bg-red-50 border-t-4 border-red-500 rounded-b absolute inset-y-8 left-8 z-20 h-16 w-152 shadow-md" role="alert" >
    {#if Led1.state}
      <h1 class="text text-center text-sm">
        *Laptop 1 and PC2 share a LED wall input and cannot be routed simultaneously
      </h1>
    {/if}
    {#if Led2.state}
      <h1 class="text text-center text-sm">
        *Laptop 4 and PSOC share a LED wall input and cannot be routed simultaneously
      </h1>
    {/if}
  </div>
{/if}
 -->
<div class="card card-border bg-base-100 w-full">

  <div class="card-body w-full">
    <h2 class="card-title w-full justify-center">A/V Sources</h2>
    <div class="tabs tabs-lift">
      <input
        type="radio"
        name="source_tabs"
        class=" ml-auto tab"
        aria-label="Computers"
        onclick={() => (selectedTab = "computers")}
        checked={selectedTab === "computers"}
      />
      {#if selectedTab === "computers"}
        <div class="tab-content bg-base-100 border-base-300 p-6">
          <!--DaisyUI tab-content forces flex col, so this div allows us to set a row-->
          <div class="w-full flex justify-center gap-4">
            {#each computerSources as source}
              <DraggableSource {source} listDrag={sourceDrag} />
            {/each}
          </div>
        </div>
      {/if}

      <input
        type="radio"
        name="source_tabs"
        class="tab"
        aria-label="Command PC"
        checked={selectedTab === "pc"}
        onclick={() => (selectedTab = "pc")}
      />
      {#if selectedTab === "pc"}
        <div class="tab-content bg-base-100 border-base-300 p-6">
          <!--DaisyUI tab-content forces flex col, so this div allows us to set a row-->
          <div class="w-full flex justify-center gap-4">
            {#each PCSources as source}
              <DraggableSource {source} listDrag={sourceDrag} />
            {/each}
          </div>
        </div>
      {/if}

      <input
        type="radio"
        name="source_tabs"
        class="tab mr-auto"
        aria-label="Video Conferencing"
        onclick={() => (selectedTab = "video_conferencing")}
        checked={selectedTab === "video_conferencing"}
      />
      {#if selectedTab === "video_conferencing"}
        <div class="tab-content bg-base-100 border-base-300 p-6">
          <div class="w-full flex justify-center gap-4">
            {#each videoConferencingSources as source}
              <DraggableSource {source} listDrag={sourceDrag} />
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>