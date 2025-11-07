<!-- This component draws the remotes button and the modal that contains the remotes component -->
<!-- The actual remote controls are in the remotes.svelte component -->

<script lang="ts">
  import type { Source } from "$lib/data/interfaces/source.interface";
  import Remotes from "./remotes.svelte";
  import { setRemoteCallback } from "$lib/shared/call-remote";

  let remoteDialog: HTMLDialogElement;
  let remotesComponent: Remotes;

  //allow the routing page to select a remote
  export function selectRemote(source: Source) {
    remoteDialog.showModal();
    remotesComponent.selectRemote(source);
  }

  //register the remote callback handler
  setRemoteCallback((src:Source) => {selectRemote(src)});
</script>

<!-- Button to Show Modal-->
<button
  class="btn btn-outline h-full w-32"
  onclick={() => remoteDialog.showModal()}
>
  <div class="flex flex-col h-full">
    <div class="flex-1 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-15"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    </div>
    <div class="pb-2">
      <p>Remotes</p>
    </div>
  </div>
</button>

<!-- Preset Recall Modal -->
<dialog bind:this={remoteDialog} class="modal">
  <div class="modal-box max-w-2/3">
    <Remotes bind:this={remotesComponent} />

    <div class="modal-action mt-8">
      <form method="dialog" class="w-full flex justify-around">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-outline w-32">Close</button>
      </form>
    </div>
  </div>
  <!-- This allows the modal to be closed by clicking the backdrop -->
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
