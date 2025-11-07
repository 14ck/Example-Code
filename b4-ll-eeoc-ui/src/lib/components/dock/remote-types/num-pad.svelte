<script lang="ts">
  import { qrwc } from "$lib/qrwc";

  let {
    num0,
    num1,
    num2,
    num3,
    num4,
    num5,
    num6,
    num7,
    num8,
    num9,
    star,
    pound,
    includeAlphabet = false,
    componentName,
  }: {
    num0: string;
    num1: string;
    num2: string;
    num3: string;
    num4: string;
    num5: string;
    num6: string;
    num7: string;
    num8: string;
    num9: string;
    star?: string;
    pound?: string;
    includeAlphabet?: boolean;
    componentName: string;
  } = $props();

  let component = qrwc.useComponent(componentName);

  let num0Trigger = component.useTrigger(num0);
  let num1Trigger = component.useTrigger(num1);
  let num2Trigger = component.useTrigger(num2);
  let num3Trigger = component.useTrigger(num3);
  let num4Trigger = component.useTrigger(num4);
  let num5Trigger = component.useTrigger(num5);
  let num6Trigger = component.useTrigger(num6);
  let num7Trigger = component.useTrigger(num7);
  let num8Trigger = component.useTrigger(num8);
  let num9Trigger = component.useTrigger(num9);
  let starTrigger = star ? component.useTrigger(star) : null;
  let poundTrigger = pound ? component.useTrigger(pound) : null;

  const numberLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];
  const alphabetLabels = ["", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz", "", "", ""];
  const triggerButtons = [num1Trigger, num2Trigger, num3Trigger, num4Trigger, num5Trigger, num6Trigger, num7Trigger, num8Trigger, num9Trigger, starTrigger, num0Trigger, poundTrigger];
  
</script>

<div class="grid grid-cols-3 grid-rows-4 gap-2 w-full h-full">
  {#each triggerButtons as trigger, index}
    <!-- If the trigger is defined, show the button, this is to hide the star and pound buttons if they are not defined -->
    {#if trigger}

    <button
      class="btn btn-outline w-full h-full flex flex-col items-center justify-center"
      aria-label={numberLabels[index]}
      onclick={() => trigger?.trigger()}>
      {numberLabels[index]}
      {#if includeAlphabet && alphabetLabels[index] !== ""}
        <span class="text-xs">{alphabetLabels[index]}</span>
      {/if}
      </button
    >
    {:else}
    <div></div>
    {/if}
  {/each}
</div>
