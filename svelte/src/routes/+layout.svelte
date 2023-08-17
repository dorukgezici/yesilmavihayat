<script>
  import { Footer, Header } from "$lib";
  import "@fontsource-variable/inter";
  import "@fontsource/charmonman";
  import "@fontsource/gotu";
  import "../app.css";
</script>

<Header />
<div class="flex flex-col min-h-screen">
  <slot />
</div>
<Footer />

<style>
  :global(body) {
    font-family: "Inter Variable", sans-serif;
  }
</style>
