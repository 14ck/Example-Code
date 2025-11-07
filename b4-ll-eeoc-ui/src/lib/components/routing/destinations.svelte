<script lang="ts">
  import { qrwc } from "$lib/qrwc";
  import type { Source } from "$lib/data/interfaces/source.interface";
  import VWall4x2 from "./video-wall/4x2-vwall.svelte";
  import DropDestination from "./drop-destination.svelte";
  import VWall2x1 from "./video-wall/2x1-vwall.svelte";
  import VWall4Plus1 from "./video-wall/4plus1.svelte";
  import VWallFull from "$assets/VwallFull.svg";
  import VWallSplit from "$assets/VwallSplit.svg";
  import VWallsplit4PlusOne from "$assets/Vwall4+1.svg";
  import BullPen from "./video-wall/bull-pen.svelte";
  let { selectedSource }: { selectedSource: Source | null } = $props();

  let selectedTab = $state<"main" | "sideL" | "sideR" | "bullpen">("main");

  //LayoutModes -- There is a bug in the current version of Q-SYS Designer that prevents us from using the "selection" string for the layout mode. So we need to use the buttons and output.
  const VWall1LayoutComponent = qrwc.useComponent("VWall1Preset");
  const VWall1PresetSelect = VWall1LayoutComponent.useText("value");
  const VWall1Layout1Select = VWall1LayoutComponent.useButton("selector.0");
  const VWall1Layout2Select = VWall1LayoutComponent.useButton("selector.1");
  const VWall1Layout3Select = VWall1LayoutComponent.useButton("selector.2");

  const VWall2LayoutComponent = qrwc.useComponent("VWall2Preset");
  const VWall2PresetSelect = VWall2LayoutComponent.useText("value");
  const VWall2Layout1Select = VWall2LayoutComponent.useButton("selector.0");
  const VWall2Layout2Select = VWall2LayoutComponent.useButton("selector.1");
  const VWall2Layout3Select = VWall2LayoutComponent.useButton("selector.2");

  const VWall3LayoutComponent = qrwc.useComponent("VWall3Preset");
  const VWall3PresetSelect = VWall3LayoutComponent.useText("value");
  const VWall3Layout1Select = VWall3LayoutComponent.useButton("selector.0");
  const VWall3Layout2Select = VWall3LayoutComponent.useButton("selector.1");
  const VWall3Layout3Select = VWall3LayoutComponent.useButton("selector.2");

  const PresetComponent = qrwc.useComponent("presets");
  const PresetRecalling = PresetComponent.useButton("RecallBusy");
  let layoutDialog: HTMLDialogElement;

  //Audio
  const VCCallIsActive = qrwc.useComponent("CallActive").useButton("out");

  const audio = qrwc.useComponent("AudioSelect");
  const audioRoute = audio.useKnob("integer.1");
  //Don't allow the VC to be routed to audio as it is always active
  const audioExcludedSources = ["6", "8", "9", "10", "11", "12", "13", "14", "15"];

  const VCRouter = qrwc.useComponent("CodecShare");
  const VCShareRouter = VCRouter.useKnob("integer.1");
  //Don't allow Cable Boxes or the VC itself to be routed to the VC system as content
  const VCShareExcludedSources = [
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
  ];
</script>

<div class="card card-border bg-base-100 w-full">
  <div class="card-body w-full">
    {#if PresetRecalling.state}
      <div class="bg-gray-200 rounded-b absolute inset-y-8 top-[55px] z-20 h-100 w-360 left-20 shadow-md" >
        <div class="flex flex-col content-center text-center items-center gap-10">
          <h1 class="text-center text-3xl font-bold p-4 mt-25">
            Please wait While the Preset is being loaded...
          </h1>
        <progress class="progress progress-primary w-150 h-10 rounded-2xl"></progress>
      </div>
    </div>
    {/if}
    <h2 class="card-title w-full justify-center">Destinations</h2>
    <div class="grid" style="grid-template-columns: 1fr 4fr 1fr;">
      <div class="flex flex-col justify-center items-center m-auto">
        <button
          class="btn btn-outline h-36 w-36 m-auto flex flex-col justify-center items-center"
          onclick={() => layoutDialog.showModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
            />
          </svg>
          <span>Change Layout</span>
        </button>
      </div>
      <!-- Video Destinations-->
      <div class="tabs tabs-lift">
        <!-- Main Wall -->
        <input
          type="radio"
          name="destination_tabs"
          class=" ml-auto tab"
          aria-label="Main Wall"
          onclick={() => (selectedTab = "main")}
          checked={selectedTab === "main"}
        />
        {#if selectedTab === "main"}
          <div
            class="tab-content bg-base-100 border-base-300 p-6 flex flex-col h-[300px]"
          >
            <div class="flex justify-center w-fit mx-auto h-[300px]">
              {#if VWall1PresetSelect.string === "4x2"}
                <VWall4x2 {selectedSource} componentName="VWall1" />
              {:else if VWall1PresetSelect.string === "2x1"}
                <VWall2x1 {selectedSource} componentName="VWall1" />
              {:else if VWall1PresetSelect.string === "4plus1"}
                <VWall4Plus1 {selectedSource} componentName="VWall1" />
              {/if}
            </div>
          </div>
        {/if}

        <!-- Side Wall L -->
        <input
          type="radio"
          name="destination_tabs"
          class="tab"
          aria-label="Side Wall L"
          checked={selectedTab === "sideL"}
          onclick={() => (selectedTab = "sideL")}
        />
        {#if selectedTab === "sideL"}
          <div
            class="tab-content bg-base-100 border-base-300 p-6 flex flex-col"
          >
            <div class="flex justify-center w-fit mx-auto h-[300px]">
              {#if VWall2PresetSelect.string === "4x2"}
                <VWall4x2 {selectedSource} componentName="VWall2" />
              {:else if VWall2PresetSelect.string === "2x1"}
                <VWall2x1 {selectedSource} componentName="VWall2" />
              {:else if VWall2PresetSelect.string === "4plus1"}
                <VWall4Plus1 {selectedSource} componentName="VWall2" />
              {/if}
            </div>
          </div>
        {/if}

         <!-- Side Wall R -->
        <input
          type="radio"
          name="destination_tabs"
          class="tab"
          aria-label="Side Wall R"
          checked={selectedTab === "sideR"}
          onclick={() => (selectedTab = "sideR")}
        />
        {#if selectedTab === "sideR"}
          <div
            class="tab-content bg-base-100 border-base-300 p-6 flex flex-col"
          >
            <div class="flex justify-center w-fit mx-auto h-[300px]">
              {#if VWall3PresetSelect.string === "4x2"}
                <VWall4x2 {selectedSource} componentName="VWall3" />
              {:else if VWall3PresetSelect.string === "2x1"}
                <VWall2x1 {selectedSource} componentName="VWall3" />
              {:else if VWall3PresetSelect.string === "4plus1"}
                <VWall4Plus1 {selectedSource} componentName="VWall3" />
              {/if}
            </div>
          </div>
        {/if}

        <!-- Bull Pen -->
        <input
          type="radio"
          name="destination_tabs"
          class="tab mr-auto"
          aria-label="Bull Pen"
          onclick={() => (selectedTab = "bullpen")}
          checked={selectedTab === "bullpen"}
        />
        {#if selectedTab === "bullpen"}
          <div class="tab-content bg-base-100 border-base-300 p-6">
            <div class="flex justify-center w-fit mx-auto h-[300px]">
              <BullPen {selectedSource} componentName="BullPen" />
            </div>
          </div>
        {/if}
      </div>
      <div class="card bg-base-100 flex flex-col justify-center items-center">
        {#if VCCallIsActive.state}
        <h2 class="text-center text-xl">Call Content Share</h2>
        <div class="card-body">
          <DropDestination
            control={VCShareRouter}
            {selectedSource}
            excludedSources={VCShareExcludedSources}
            label="Share To Call"
          />
        </div>
        {:else}
          <h2 class="text-center text-xl">Audio</h2>
          <div class="card-body">
            <DropDestination
              control={audioRoute}
              {selectedSource}
              excludedSources={audioExcludedSources}
              label="Audio"
            />
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<!-- Layout Dialog-->
<dialog bind:this={layoutDialog} class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold mb-4">Video Wall Layout Mode</h3>
    <!-- Main Wall -->
    <h4 class="text-lg font-bold text-center m-2">Main Wall</h4>
    <div class="flex justify-around gap-2">
      <button
        class="btn btn-outline flex flex-col items-center h-32 {VWall1Layout1Select.state
          ? 'bg-info'
          : ''}"
        onclick={() => VWall1Layout1Select.toggle()}
      >
        <img src={VWallSplit} alt="VWallFull" class="size-24" />
        <p>8-way Split</p>
      </button>
      <button
        class="btn btn-outline flex flex-col items-center h-32 {VWall1Layout2Select.state
          ? 'bg-info'
          : ''}"
        onclick={() => VWall1Layout2Select.toggle()}
      >
        <img src={VWallFull} alt="VWallFull" class="size-24" />
        <p>Side By Side</p>
      </button>
      <button
        class="btn btn-outline flex flex-col items-center h-32 {VWall1Layout3Select.state
          ? 'bg-info'
          : ''}"
        onclick={() => VWall1Layout3Select.toggle()}
      >
        <img src={VWallsplit4PlusOne} alt="VWallFull" class="size-24" />
        <p>Four Plus One</p>
      </button>
    </div>




    <!-- Side Wall L -->
    <h4 class="text-lg font-bold text-center m-2">Side Wall L</h4>
    <div class="flex justify-around gap-2">
      <button
        class="btn btn-outline flex flex-col items-center h-32 {VWall2Layout1Select.state
          ? 'bg-info'
          : ''}"
        onclick={() => VWall2Layout1Select.toggle()}
      >
        <img src={VWallSplit} alt="VWallFull" class="size-24" />
        <p>8-way Split</p>
      </button>
      <button
        class="btn btn-outline flex flex-col items-center h-32 {VWall2Layout2Select.state
          ? 'bg-info'
          : ''}"
        onclick={() => VWall2Layout2Select.toggle()}
      >
        <img src={VWallFull} alt="VWallFull" class="size-24" />
        <p>Side By Side</p>
      </button>
      <button
        class="btn btn-outline flex flex-col items-center h-32 {VWall2Layout3Select.state
          ? 'bg-info'
          : ''}"
        onclick={() => VWall2Layout3Select.toggle()}
      >
        <img src={VWallsplit4PlusOne} alt="VWallFull" class="size-24" />
        <p>Four Plus One</p>
      </button>
    </div>


        <!-- Side Wall R -->
    <h4 class="text-lg font-bold text-center m-2">Side Wall R</h4>
    <div class="flex justify-around gap-2">
      <button
        class="btn btn-outline flex flex-col items-center h-32 {VWall3Layout1Select.state
          ? 'bg-info'
          : ''}"
        onclick={() => VWall3Layout1Select.toggle()}
      >
        <img src={VWallSplit} alt="VWallFull" class="size-24" />
        <p>8-way Split</p>
      </button>
      <button
        class="btn btn-outline flex flex-col items-center h-32 {VWall3Layout2Select.state
          ? 'bg-info'
          : ''}"
        onclick={() => VWall3Layout2Select.toggle()}
      >
        <img src={VWallFull} alt="VWallFull" class="size-24" />
        <p>Side By Side</p>
      </button>
      <button
        class="btn btn-outline flex flex-col items-center h-32 {VWall3Layout3Select.state
          ? 'bg-info'
          : ''}"
        onclick={() => VWall3Layout3Select.toggle()}
      >
        <img src={VWallsplit4PlusOne} alt="VWallFull" class="size-24" />
        <p>Four Plus One</p>
      </button>
    </div>

    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
  <!-- This allows the modal to be closed by clicking the backdrop -->
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
