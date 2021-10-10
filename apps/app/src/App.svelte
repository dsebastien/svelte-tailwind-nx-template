<script lang="ts">
  import Tailwind from "./Tailwind.svelte";

  export let name: string;
</script>

<Tailwind />

<style lang="postcss">
  :global {
    body {
      @apply h-full min-h-full bg-gray-800;
    }
    h1 {
      @apply bg-pink-500 text-gray-100 font-bold text-xl rounded-lg px-5;
    }
  }
</style>

<main>
	<h1>Hello {name} from the Svelte Tailwind Nx template!</h1>
</main>
