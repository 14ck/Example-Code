<script lang="ts">
    import { qrwc } from "$lib/qrwc";
</script>

<div class="card card-border bg-base-100 w-96">
    <div class="card-body">
      <h2 class="card-title">Connecting to core...</h2>
      <p>Please wait while we connect to the core...</p>

      {#if qrwc.connectionAttemptCount > 5}
        <div class="badge badge-warning h-auto flex p-2 my-4">

          <div class="w-24">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            
          </div>
          <p>
            Connecting is taking longer than expected. Please check cable connections. If this persists contact the M3 NOC at 833-M3-HELPS (833-634-3577).
          </p>
        </div>
      {/if}

      <progress class="progress progress-primary w-full"></progress>
      <div class="flex justify-between w-full text-gray-400 text-xs">
        <p>Attempts: {qrwc.connectionAttemptCount}</p>
        <p class="text-right">Redundancy Mode: {qrwc.activeCore}</p>
      </div>
    </div>
  </div>