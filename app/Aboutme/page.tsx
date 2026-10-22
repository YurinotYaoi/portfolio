import Axelotle from "@/components/axelotle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { diamond, gold_ingot, iron_ingot } from "@xefreh/minecraft-assets-react/items";
import { Car } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yuri | About Me',
};

export default function AboutMe() {

  return (
    <div className="grid w-full grid-cols-3 gap-2 pb-4 md:h-150 md:grid-cols-9 md:grid-rows-6">
      <Card className="col-start-1 col-span-1 row-start-2
      md:col-start-4 md:row-start-2 md:col-span-3 md:row-span-3
      animate__animated animate__fadeInUp justify-center items-center"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
        <div className="h-20 w-20 overflow-hidden rounded-full md:h-32 md:w-32">
          <img className="h-full w-full object-cover" src="Images/githubpfp.png" alt="Yuri's profile avatar" />
        </div>
      </Card>
      <Card className="col-span-3 row-start-1
      md:col-start-1 md:row-start-1 md:col-span-6 md:row-span-1
      animate__animated animate__fadeInLeft
      justify-center"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
        <CardHeader className="text-center text-2xl font-bold md:text-3xl">
          Yuri Not Yaoi
        </CardHeader>
      </Card>
      <Card className="col-start-2 col-span-2 row-start-2 min-h-24
      [&_img]:h-20 [&_img]:w-20 md:col-start-7 md:row-start-1 md:col-span-3 md:row-span-3 md:min-h-0
      md:[&_img]:h-72 md:[&_img]:w-72
      animate__animated animate__fadeInRight [animation-delay:120ms]
      bg-[var(--water)] justify-center items-center"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>  
       <Axelotle/>
      </Card>
      <Card className="col-span-3 row-start-5
      md:col-start-7 md:row-start-4 md:col-span-3 md:row-span-1
      animate__animated animate__fadeInUp [animation-delay:200ms]
      justify-center bg-[var(--water)]"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>  
        <CardHeader className="text-center text-xl font-bold md:text-2xl">
          Education
        </CardHeader>
      </Card>
      <Card className="col-span-3 row-start-6
      md:col-start-4 md:row-start-5 md:col-span-6 md:row-span-2
      animate__animated animate__fadeInUp [animation-delay:300ms]
      justify-center align-center"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
        <CardContent className="flex flex-row items-stretch justify-center">
        <div className="mx-1 flex min-w-0 flex-1 flex-col items-center justify-center md:mx-2">
          <Image src={iron_ingot} alt="Iron ingot" width={50} height={50} unoptimized style={{ imageRendering: "pixelated" }} />
          <h1 className="text-center text-sm font-bold md:text-lg">High School</h1>
          <p className="text-center text-xs md:text-sm">Eastern Bacoor National <br></br>High School</p>
        </div>
        <Separator orientation="vertical"/>
        <div className="mx-1 flex min-w-0 flex-1 flex-col items-center justify-center md:mx-2">
          <Image src={gold_ingot} alt="Gold ingot" width={50} height={50} unoptimized style={{ imageRendering: "pixelated" }} />
          <h1 className="text-center text-sm font-bold md:text-lg">Senior High School</h1>
          <p className="text-center text-xs md:text-sm">University of Perpetual Help <br/>Molino System DALTA</p>
        </div>
        <Separator orientation="vertical"/>
        <div className="mx-1 flex min-w-0 flex-1 flex-col items-center justify-center md:mx-2">
          <Image src={diamond} alt="Diamond" width={50} height={50} unoptimized style={{ imageRendering: "pixelated" }} />
          <h1 className="text-center text-sm font-bold md:text-lg">College</h1>
          <p className="text-center text-xs md:text-sm">Saint Dominic <br></br>College of Asia</p>
        </div>
        </CardContent>

      </Card>
      <Card className="col-span-3 row-start-4
      md:col-start-1 md:row-start-3 md:col-span-3 md:row-span-3
      animate__animated animate__fadeInLeft [animation-delay:400ms]
      flex flex-col justify-center"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
        <CardHeader>
          <CardTitle className="text-sm lg:text-xl">Hello!!! I am 
          <strong> Angelo Uriel Solamo</strong>
          </CardTitle>
        </CardHeader>
        <Separator/>
        <CardContent>
          <CardDescription className="text-xs lg:text-base">
            A BSIT Student from Saint Dominic College of Asia with a passion for creating enjoyable UX with beautiful UI. I always want to challange myself with innovative solutions to everyday problems.
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="col-span-3 row-start-3
      md:col-start-1 md:row-start-2 md:col-span-3 md:row-span-1
      animate__animated animate__fadeInLeft [animation-delay:500ms]
      justify-center bg-[var(--water)]"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
        <CardHeader className="text-center text-xl font-bold md:text-2xl">
          About Me
        </CardHeader>
      </Card>
      <Card className="col-span-3 row-start-7
      md:col-start-1 md:row-start-6 md:col-span-3 md:row-span-1
      animate__animated animate__fadeInUp [animation-delay:400ms]
      justify-center bg-[var(--water)]"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
        <CardHeader className="font-bold text-xl text-center">
          Continue the pursuit of knowledge
        </CardHeader>
      </Card>
    </div>
  );
}
