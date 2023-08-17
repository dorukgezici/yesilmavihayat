<script>
  import { Carousel } from "$lib";
  import img1 from "$lib/assets/you/1.jpg";
  import img10 from "$lib/assets/you/10.jpg";
  import img11 from "$lib/assets/you/11.jpg";
  import img12 from "$lib/assets/you/12.jpg";
  import img13 from "$lib/assets/you/13.jpg";
  import img14 from "$lib/assets/you/14.jpg";
  import img15 from "$lib/assets/you/15.jpg";
  import img16 from "$lib/assets/you/16.jpg";
  import img17 from "$lib/assets/you/17.jpg";
  import img18 from "$lib/assets/you/18.jpg";
  import img19 from "$lib/assets/you/19.jpg";
  import img2 from "$lib/assets/you/2.jpg";
  import img20 from "$lib/assets/you/20.jpg";
  import img21 from "$lib/assets/you/21.jpg";
  import img22 from "$lib/assets/you/22.jpg";
  import img23 from "$lib/assets/you/23.jpg";
  import img24 from "$lib/assets/you/24.jpg";
  import img25 from "$lib/assets/you/25.jpg";
  import img26 from "$lib/assets/you/26.jpg";
  import img27 from "$lib/assets/you/27.jpg";
  import img28 from "$lib/assets/you/28.jpg";
  import img3 from "$lib/assets/you/3.jpg";
  import img4 from "$lib/assets/you/4.jpg";
  import img5 from "$lib/assets/you/5.jpg";
  import img6 from "$lib/assets/you/6.jpg";
  import img7 from "$lib/assets/you/7.jpg";
  import img8 from "$lib/assets/you/8.jpg";
  import img9 from "$lib/assets/you/9.jpg";
  import { onMount } from "svelte";
  // import { DiscussionEmbed } from "disqus-react";

  const imgs1 = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];
  const imgs2 = [
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
  ];
  onMount(() => {
    var d = document,
      s = d.createElement("script");

    // IMPORTANT: Replace EXAMPLE with your forum shortname!
    s.src = "https://EXAMPLE.disqus.com/embed.js";

    s.setAttribute("data-timestamp", `${new Date()}`);
    // (d.head ?? d.body)?.appendChild(s);
  });
</script>

<main class="flex flex-col items-center justify-between space-y-8">
  <section class="flex flex-col">
    <Carousel imgs={imgs1} />
    <Carousel imgs={imgs2} />
  </section>

  <section class="w-5/6">
    <!-- <Comments
      identifier="yorumlar"
      url="https://yesilmavihayat.com"
      language="tr"
    /> -->
    <!-- <DiscussionEmbed
          shortname="yesilmavihayat"
          config={{
            url: "https://yesilmavihayat.com",
            identifier: "yorumlar",
            title: "Yeşil Mavi Hayat",
            language: "tr",
          }}
        /> -->
  </section>
</main>
