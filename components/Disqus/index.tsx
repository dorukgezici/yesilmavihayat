"use client";
import { DiscussionEmbed } from "disqus-react";

export default function Disqus() {
  return (
    <DiscussionEmbed
      shortname="yesilmavihayat"
      config={{
        url: "https://yesilmavihayat.com",
        identifier: "yorumlar",
        title: "Yeşil Mavi Hayat",
        language: "tr",
      }}
    />
  );
}
