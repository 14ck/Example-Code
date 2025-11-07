<script lang="ts">
  import Routing from "$lib/components/routing/routing.svelte";
  import AudioSidebar from "$lib/components/audio/AudioSidebar.svelte";
  import Dock from "$lib/components/dock/dock.svelte";
  import { qrwc } from "$lib/qrwc";
  import SplashPage from "./components/pages/splash-page.svelte";
  import LoadingPage from "./components/pages/loading-page.svelte";
  import * as logo from "$assets/EPEO_Logo_navy_and_orange_with_white_circle-RGB.svg";

  const component = qrwc.useComponent("PageFlip");
  const splashPage = component.useButton("selector.0");
  const loadingPage = component.useButton("selector.1");

  const shutdowncomponent = qrwc.useComponent("StartShutdown");
  const shutdown = shutdowncomponent.useTrigger("trigger.2");

  let ShowConfirmation: HTMLDialogElement;
</script>

{#if splashPage.state === true}
  <SplashPage />
{:else if loadingPage.state === true}
  <LoadingPage />
{:else}
  <button class="" type="button" onclick={() => ShowConfirmation.showModal()}>
    <div class="absolute bottom-0 left-0 p-12">
      <img src={logo.default} alt="logo" class="w-36 h-36" />
    </div>
  </button>
  <div
    class="h-dvh w-full grid gap-12"
    style="grid-template-columns: 12rem 1fr 12rem; grid-template-rows: 1fr 12rem;"
  >
    <dialog bind:this={ShowConfirmation} class="modal">
      <div class="modal-box max-w-1/3">
        <h3 class="font-bold pt-10 pb-20 text-5xl text-center">Are you sure you want to shutdown?</h3>

        <div class="modal-action mt-8">
          <form method="dialog" class="w-full flex justify-around">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn btn-outline w-52 h-32 bg-green-600 font-bold text-2xl">NO</button>
            <button class="btn btn-outline w-52 h-32 bg-red-600 font-bold text-2xl" onclick={() => shutdown.trigger()} >YES</button>
          </form>
        </div>
      </div>
      <!-- This allows the modal to be closed by clicking the backdrop -->
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>

    <div class="w-full h-full col-span-2">
      <Routing />
    </div>

    <div class="w-full h-full row-span-2">
      <AudioSidebar />
    </div>
    <div></div>
    <div class="h-full w-full">
      <Dock />
    </div>
  </div>
{/if}
