<!-- This component draws the clocks button and the modal that contains the clocks component -->
<!-- The actual clock controls are in the clocks.svelte component -->

<script lang="ts">
    import Clocks from "./clocks/clocks.svelte";

    let clockDialog: HTMLDialogElement;
</script>

<!-- Button to Show Modal-->
<button
  class="btn btn-outline h-full w-32"
  onclick={() => clockDialog.showModal()}
>
  <div class="flex flex-col h-full">
    <div class="flex-1 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-15">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

    </div>
    <div class="pb-2">
      <p>Clocks</p>
    </div>
  </div>
</button>

<!-- Preset Recall Modal -->
<dialog bind:this={clockDialog} class="modal">
    <div class="modal-box max-w-2/3">
      
      <Clocks />

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