<script lang="ts">
  import { enhance } from "$app/forms";

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<h1>Form</h1>

<form method="post" use:enhance>
  <button>Generate Random number</button>
</form>

{#if form}
  <p>Your random number is: {form.randomNumber}</p>
{/if}
