<script lang="ts">
  import timezonesList from "timezones-list";
  import fuzzysort from "fuzzysort";

  //we need to add zulu time to the list
  const zuluTime = {
    label: "Zulu Time (GMT+00:00)",
    tzCode: "Etc/Zulu",
    name: "(GMT+00:00) Zulu Time",
    utc: "+00:00"
  };

  const timezones = [...timezonesList, zuluTime];

  let {onSelect}: {onSelect: (tz: string) => void} = $props();

  let search = $state("");

  //search for the timezone
  const results = $derived.by(() => {
    const results = fuzzysort.go(
      search,
      timezones.map((tz) => tz.name),
      {
        limit: 7,
      }
    )
    
    return results.map((r) => {
        const tz = timezones.find((tz) => tz.name === r.target);
        return {
            ...tz
        };
    });
  });


  function selectTimezone(tz: string) {
    onSelect(tz);
    search = "";
  }
</script>

<h1 class="text-2xl font-bold text-center">Select a Timezone</h1>

<div class="m-auto w-full flex flex-col gap-4">
  <fieldset class="fieldset m-auto">
    <legend class="fieldset-legend">Timezone</legend>
    <input
      type="text"
      class="input w-96"
      placeholder="Type here"
      bind:value={search}
    />
    <div class="flex flex-col"></div>
  </fieldset>
  <div class="w-full flex flex-col gap-2">
    {#each results as result}
    <button class="btn btn-outline w-full h-14 flex-col" onclick={() => selectTimezone(result.tzCode ?? "")}>
        <p>{result.label}</p>
        <div class="px-4 w-full">
            <p class="label w-full truncate text-center">{result.name}</p>
        </div>
        
    </button>

    {/each}
  </div>
</div>
