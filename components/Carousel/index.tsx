import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useCallback } from "react";

export default function Carousel({ imgs }: { imgs: StaticImageData[] }) {
  const shuffle = useCallback(() => {
    // Fisher-Yates (aka Knuth) Shuffle
    let currentIndex = imgs.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [imgs[currentIndex], imgs[randomIndex]] = [
        imgs[randomIndex],
        imgs[currentIndex],
      ];
    }
  }, [imgs]);

  // shuffle imgs on every render
  shuffle();

  return (
    <div className="carousel carousel-center p-4 space-x-8">
      {imgs.map((img) => (
        <div key={img.src} className="carousel-item">
          <Image
            src={img}
            alt="Yeşil Mavi Hayat"
            className="rounded-box"
            height={400}
          />
        </div>
      ))}
    </div>
  );
}
