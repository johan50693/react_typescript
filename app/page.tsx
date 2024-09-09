"use client"; // This is a client component

import { Randomfox } from "@/components/Randomfox";
import Image from "next/image";
import { useState } from "react";


const random = () => Math.floor(Math.random() * 123) + 1;
const generateId = () => Math.random().toString(36).substr(2,9)

type ImageItems = {
  id: string;
  url: string;
}
export default function Home() {

  const [images, setImages] = useState<ImageItems[]>([
    {id: generateId() ,url: `https://randomfox.ca/images/${random()}.jpg`,},
    {id: generateId() ,url: `https://randomfox.ca/images/${random()}.jpg`,},
    {id: generateId() ,url: `https://randomfox.ca/images/${random()}.jpg`,},
    {id: generateId() ,url: `https://randomfox.ca/images/${random()}.jpg`,},
  ])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="text-3xl font-bold underline">
        Hello world!

        {
          images.map(({id,url}) => (
            <div >
              <Randomfox key={id} img={url} />
            </div>
          ))
        }

      </h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       footer
      </footer>
    </div>
  );
}
