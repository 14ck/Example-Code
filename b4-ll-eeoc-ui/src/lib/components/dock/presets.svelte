<script lang="ts">
  import { qrwc } from "$lib/qrwc";
  import type { TextControl, ButtonControl } from "qrwc-svelte";

  const presetCount = 20;

  const presetComponent = qrwc.useComponent("presets");
  
  //Preset Scope - define scope buttons in the same order as the presetScopeNames array
  const presetScope = [
    presetComponent.useButton("Scope 1"),
    presetComponent.useButton("Scope 2"),
    presetComponent.useButton("Scope 3"),
    presetComponent.useButton("Scope 4"),
    presetComponent.useButton("Scope 5"),
  ];
  const presetScopeNames = [
    "Main Wall",
    "Side Wall L",
    "Side Wall R",
    "Bull Pen",
    "Audio",
  ];

  interface Preset {
    name: TextControl;
    isProtected: ButtonControl;
    store: () => void;
    recall: () => void;
  }

  // Create individual runes for each preset using a for loop
  const presets: Preset[] = [];
  for (let i = 0; i < presetCount; i++) {
    presets.push({
      name: presetComponent.useText(`Name ${i + 1}`),
      isProtected: presetComponent.useButton(`IsProtected ${i + 1}`),
      store: presetComponent.useTrigger(`Store ${i + 1}`).trigger,
      recall: presetComponent.useTrigger(`Recall ${i + 1}`).trigger,
    });
  }




  //Recall
  let recallDialog: HTMLDialogElement;

  function recallPreset(preset: Preset) {
    recallDialog.close();
    preset.recall();
  }

  //Edit
  let editMode = $state<"store" | "delete" | null>(null);
  let editDialog: HTMLDialogElement;

  //Store
  let storeDialog: HTMLDialogElement;
  let editPreset = $state<Preset | null>(null);
  let editName = $state<string>("");
  let overwrite = $state<boolean>(false);

  function selectEditPreset(preset: Preset) {
    editPreset = preset;
    editName = editPreset.name.string;

    //we set this here so that the overwrite warning does not appear during the close animation
    overwrite = editPreset.name.string !== "";
    if (editMode === "store") {
      storeDialog.showModal();
    } else {
      deleteDialog.showModal();
    }
    editDialog.close();
  }

  function storePreset(preset: Preset) {
    if (preset.isProtected.state) {
        return;
      }
    preset.name.string = editName;
    preset.store();
    storeDialog.close();
  }

  //Delete
  let deleteDialog: HTMLDialogElement;

  function deletePreset(preset: Preset) {
    deleteDialog.close();
    preset.name.string = "";
  }
</script>


<!-- Button to Show Modal-->
<button
  class="btn btn-outline h-full w-32"
  onclick={() => recallDialog.showModal()}
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
          d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
        />
      </svg>
    </div>
    <div class="pb-2">
      <p>Presets</p>
    </div>
  </div>
</button>

<!-- Preset Recall Modal -->
<dialog bind:this={recallDialog} class="modal">
  <div class="modal-box max-w-2/3">
    <h3 class="text-lg font-bold mb-4">Select a preset to recall</h3>

    <div class="flex justify-center flex-wrap gap-2">
      {#each presets as preset, idx}
        {#if preset.name.string !== ""}
          <button
            class="btn btn-outline w-48 truncate justify-start"
            onclick={() => recallPreset(preset)}
          >
            <span class="text-xl">{String(idx + 1).padStart(2, "0")}</span>
            {preset.name.string}
          </button>
        {/if}
      {/each}
    </div>

    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <div class="card bg-base-100 border-base-300 border mt-8 p-4">
      <div class="font-semibold text-center">
        Select which areas that should be recalled when this preset is recalled.

        <form method="dialog" class="flex justify-around gap-2 mt-4">
          {#each presetScope as scope, idx}
          <label class="label">
            <input type="checkbox" bind:checked={scope.state} class="checkbox" />
            {presetScopeNames[idx]}
          </label>
          {/each}
        </form>
      </div>
    </div>

    <div class="modal-action mt-8">
      <form method="dialog" class="w-full flex justify-around">
        <!-- if there is a button in form, it will close the modal -->
        <button
          class="btn btn-outline btn-primary w-32"
          onclick={() => {
            editMode = "store";
            editDialog.showModal();
          }}>Store Preset</button
        >
        <button
          class="btn btn-outline btn-error w-32"
          onclick={() => {
            editMode = "delete";
            editDialog.showModal();
          }}>Delete Preset</button
        >
        <button class="btn btn-outline w-32">Close</button>
      </form>
    </div>
  </div>
  <!-- This allows the modal to be closed by clicking the backdrop -->
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

<!-- Preset Edit Modal -->
<dialog bind:this={editDialog} class="modal">
  <div class="modal-box max-w-2/3">
    <h3 class="text-lg font-bold mb-4">
      Select a preset slot to {editMode === "store" ? "store" : "delete"}
    </h3>

    <div class="flex justify-center flex-wrap gap-2">
      {#each presets as preset, idx}
        {#if preset.name.string !== "" || editMode === "store"}
          <button
            class="btn btn-outline w-48 truncate justify-start"
            disabled={preset.isProtected.state}
            onclick={() => selectEditPreset(preset)}
          >
            {#if preset.isProtected.state}
              <!-- Lock Icon -->
              <span class="text-xl"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </span>
            {:else}
              <span class="text-xl">{String(idx + 1).padStart(2, "0")}</span>
            {/if}
            {#if preset.name.string !== ""}
              {preset.name.string}
            {:else}
              <span class="text-xl text-base-300">Unused</span>
            {/if}
          </button>
        {/if}
      {/each}
    </div>

    <div class="modal-action mt-8">
      <form method="dialog" class="w-full flex justify-around">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-outline w-32">Cancel</button>
      </form>
    </div>
  </div>
  <!-- This allows the modal to be closed by clicking the backdrop -->
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

<!-- Preset Store Modal -->
<dialog bind:this={storeDialog} class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold mb-4">
      {editPreset?.name.string === "" ? "New Preset" : `Overwrite ${editPreset?.name.string}`}
    </h3>

    <p>
      This will store the current state of all video routes and video wall
      layouts currently active. All presets must have a unique name.
    </p>

    {#if overwrite}
      <div class="badge badge-warning h-auto flex p-2 my-4">
        <div class="w-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>
        <p>
          WARNING: This will overwrite the existing preset, this action cannot
          be undone.
        </p>
      </div>
    {/if}

    <div class="max-w-96 mx-auto mt-8">
      <p class="label">Enter a name for the preset</p>
      <input
        type="text"
        bind:value={editName}
        class="input input-bordered w-full"
        placeholder="Preset Name"
      />
    </div>

    <div class="modal-action mt-8">
      <form method="dialog" class="w-full flex justify-around">
        <button class="btn btn-outline w-32">Cancel</button>
        <button
          class="btn btn-outline {overwrite ? 'btn-error' : 'btn-primary'} w-32"
          disabled={editName === ""}
          onclick={() => storePreset(editPreset!)}
          >{overwrite ? "Overwrite" : "Store"}</button
        >
      </form>
    </div>
  </div>
</dialog>


<!-- Preset Delete Modal -->
<dialog bind:this={deleteDialog} class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold mb-4">
      Delete Preset: {editPreset?.name.string}
    </h3>

    <p>
      This will delete the preset named {editPreset?.name.string}. This action cannot be undone.
    </p>

    {#if editPreset?.name.string !== ""}
      <div class="badge badge-error h-auto flex p-2 my-4">
        <div class="w-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>
        <p>
          WARNING: You are about to delete a preset, this action cannot
          be undone.
        </p>
      </div>
    {/if}

    <div class="modal-action mt-8">
      <form method="dialog" class="w-full flex justify-around">
        <button class="btn btn-outline w-32">Cancel</button>
        <button
          class="btn btn-outline btn-error w-32"
          onclick={() => deletePreset(editPreset!)}
          >Delete</button
        >
      </form>
    </div>
  </div>
</dialog>


