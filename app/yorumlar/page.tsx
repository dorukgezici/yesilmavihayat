"use client";
import img1 from "@/public/img/you/1.jpg";
import img10 from "@/public/img/you/10.jpg";
import img2 from "@/public/img/you/2.jpg";
import img3 from "@/public/img/you/3.jpg";
import img4 from "@/public/img/you/4.jpg";
import img5 from "@/public/img/you/5.jpg";
import img6 from "@/public/img/you/6.jpg";
import img7 from "@/public/img/you/7.jpg";
import img8 from "@/public/img/you/8.jpg";
import img9 from "@/public/img/you/9.jpg";
import { DiscussionEmbed } from "disqus-react";
import Image from "next/image";

export default function Reviews() {
  return (
    <main className="flex flex-col items-center justify-between space-y-8">
      <section className="flex flex-col">
        <div className="carousel carousel-center p-4 space-x-8">
          <div className="carousel-item">
            <Image src={img1} alt="1" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img2} alt="2" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img3} alt="3" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img4} alt="4" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img5} alt="5" className="rounded-box" height={400} />
          </div>
        </div>
        <div className="carousel carousel-center p-4 space-x-8">
          <div className="carousel-item">
            <Image src={img6} alt="6" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img7} alt="7" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img8} alt="8" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img9} alt="9" className="rounded-box" height={400} />
          </div>
          <div className="carousel-item">
            <Image src={img10} alt="10" className="rounded-box" height={400} />
          </div>
        </div>
      </section>

      <section className="w-2/3">
        <DiscussionEmbed
          shortname="yesilmavihayat"
          config={{
            url: "https://yesilmavihayat.com",
            identifier: "yorumlar",
            title: "Yeşil Mavi Hayat",
            language: "tr_TR",
          }}
        />
      </section>
    </main>
  );
}
