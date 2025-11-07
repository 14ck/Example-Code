<!-- This component draws the clocks button and the modal that contains the clocks component -->
<!-- The actual clock controls are in the clocks.svelte component -->

<script lang="ts">
    import Cameras from "./cameras.svelte";

    let camerasDialog: HTMLDialogElement;
</script>

<!-- Button to Show Modal-->
<button
  class="btn btn-outline h-full w-32"
  onclick={() => camerasDialog.showModal()}
>
  <div class="flex flex-col h-full">
    <div class="flex-1 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-15">
            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          

    </div>
    <div class="pb-2">
      <p>Cameras</p>
    </div>
  </div>
</button>

<!-- Cameras Recall Modal -->
<dialog bind:this={camerasDialog} class="modal">
    <div class="modal-box max-w-2/3">

      <Cameras />

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