import { useEffect } from "react";

export default function Carousel({ imgs }: { imgs: ImageMetadata[] }) {
  useEffect(() => {
    // Fisher-Yates (aka Knuth) Shuffle
    let currentIndex = imgs.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [imgs[currentIndex], imgs[randomIndex]] = [imgs[randomIndex], imgs[currentIndex]];
    }
  }, [imgs]);

  return (
    <div className="carousel carousel-center p-4 space-x-8">
      {imgs.map((img) => (
        <div key={img.src} className="carousel-item">
          <img src={img.src} alt="Yeşil Mavi Hayat" className="rounded-box w-auto h-[400px]" height={400} />
        </div>
      ))}
    </div>
  );
}
