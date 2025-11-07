<script lang="ts">
  import Destinations from "./destinations.svelte";
  import type { Source } from "$lib/data/interfaces/source.interface";
  import Sources from "./sources.svelte";

  let selectedSource: Source | null = $state(null);
  let onSourceDrag: (source: Source | null) => void = $state(
    (source: Source | null) => {
      selectedSource = source;
    }
  );
</script>

<Sources sourceDrag={onSourceDrag} />
<div class="h-6"></div>
<Destinations {selectedSource} />
