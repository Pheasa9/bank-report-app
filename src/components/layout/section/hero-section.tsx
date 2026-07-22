"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <main className="overflow-x-hidden">

      {/* HERO SECTION */}
      <section>
        <div className="relative">

          <div className="aspect-2/3 relative z-10 flex flex-col justify-end px-6 lg:aspect-video">

            <div className="mx-auto w-full max-w-7xl pb-6 lg:px-12 lg:pb-32">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="max-w-lg"
              >

                <h1 className="text-balance text-5xl md:text-6xl xl:text-7xl">
                  Build 10x Faster with NS
                </h1>


                <p className="mt-6 text-balance text-lg">
                  Highly customizable components.
                </p>


                <div className="mt-8 flex items-center gap-2">


                  <Button
                    render={<Link href="#link" />}
                    nativeButton={false}
                    size="lg"
                    className="h-12 rounded-full pl-5 pr-3 text-base"
                  >
                    <span className="text-nowrap">
                      Start Building
                    </span>

                    <ChevronRight className="ml-1" />
                  </Button>



                  <Button
                    render={<Link href="#link" />}
                    nativeButton={false}
                    size="lg"
                    variant="ghost"
                    className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5"
                  >
                    <span className="text-nowrap">
                      Request a demo
                    </span>
                  </Button>


                </div>


              </motion.div>

            </div>

          </div>



          {/* VIDEO BACKGROUND */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="aspect-2/3 pointer-events-none absolute inset-1 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5"
          >

            <video
              autoPlay
              loop
              muted
              playsInline
              className="not-dark:invert size-full -scale-x-100 object-cover"
              src="https://videos.pexels.com/video-files/35968183/15249566_1920_1080_30fps.mp4"
            />

          </motion.div>


        </div>
      </section>





     


    </main>
  );
}