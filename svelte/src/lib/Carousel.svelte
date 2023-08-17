<script lang="ts">
  export let imgs: string[] = [];
</script>

<div class="carousel carousel-center p-4 space-x-8">
  {#each imgs as img, i}
    <div class="carousel-item">
      <img src={img} alt={`${i}`} class="rounded-box h-[400px]" />
    </div>
  {/each}
</div>
