import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-gray-100 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="w-full px-4 lg:px-5 2xl:px-20 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-10">
          <div className="flex flex-col justify-center gap-8 w-full">
            <h1 className="font-bold text-[32px] md:text-4xl leading-snug">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors 
              in world-class companies with our global community.</p>
              <Button size="lg" asChild className="button bg-blue-700 w-full sm:w-fit rounded-full">
                <Link href="#events" >
                Explore Now
                </Link>
              </Button>
          </div>
          <Image 
          src="/assets/images/hero.png"
          alt="hero"
          width={1000}
          height={1000}
          className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] "
          />
        </div>
      </section>
      <section id="events" className="w-full px-4 my-8 flex flex-col gap-8 md-gap-12">
        <h2 className="font-bold text-[32px] ">Trusted by <br/> Thousands of Events</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search 
          CategoryFilter
        </div>
      </section>
    </>
  );
}
