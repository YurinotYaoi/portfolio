import Axelotle from "@/components/axelotle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MinecraftIcon } from "@xefreh/minecraft-assets-react";
import { diamond, gold_ingot, iron_ingot } from "@xefreh/minecraft-assets-react/items";
import { Car } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yuri | About Me',
};

export default function AboutMe() {

  return (
    <div className="h-150 w-full
    grid grid-cols-9 grid-rows-6 gap-2">
      <Card className="col-start-4 row-start-2 col-span-3 row-span-3
      animate__animated animate__fadeInUp justify-center items-center"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src="Images/githubpfp.png" />
        </div>
      </Card>
      <Card className="col-start-1 row-start-1 col-span-6 row-span-1
      animate__animated animate__fadeInLeft
      justify-center"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
        <CardHeader className="font-bold text-3xl text-center">
          Yuri Not Yaoi
        </CardHeader>
      </Card>
      <Card className="col-start-7 row-start-1 col-span-3 row-span-3
      animate__animated animate__fadeInRight [animation-delay:120ms]
      bg-[var(--water)] justify-center items-center"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>  
       <Axelotle/>
      </Card>
      <Card className="col-start-7 row-start-4 col-span-3 row-span-1
      animate__animated animate__fadeInUp [animation-delay:200ms]
      justify-center bg-[var(--water)]"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>  
        <CardHeader className="font-bold text-2xl text-center">
          Education
        </CardHeader>
      </Card>
      <Card className="col-start-4 row-start-5 col-span-6 row-span-2
      animate__animated animate__fadeInUp [animation-delay:300ms]
      justify-center align-center"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
        <CardContent className="flex flex-row justify-center align-center">
        <div className="h-full w-4/13 flex items-center justify-center flex-col mx-2">
          <MinecraftIcon src={iron_ingot} alt="Iron ingot" size={50} />
          <h1 className="text-lg font-bold">High School</h1>
          <p className="text-center">Eastern Bacoor National <br></br>High School</p>
        </div>
        <Separator orientation="vertical"/>
        <div className="h-full w-4/13 flex items-center justify-center flex-col mx-2">
          <MinecraftIcon src={gold_ingot} alt="Gold ingot" size={50} />
          <h1 className="text-lg font-bold">Senior High School</h1>
          <p className="text-center">University of Perpetual Help <br/>Molino System DALTA</p>
        </div>
        <Separator orientation="vertical"/>
        <div className="h-full w-4/13 flex items-center justify-center flex-col mx-2">
          <MinecraftIcon src={diamond} alt="Diamond" size={50} />
          <h1 className="text-lg font-bold">College</h1>
          <p className="text-center">Saint Dominic <br></br>College of Asia</p>
        </div>
        </CardContent>

      </Card>
      <Card className="col-start-1 row-start-3 col-span-3 row-span-3
      animate__animated animate__fadeInLeft [animation-delay:400ms]
      flex flex-col justify-center"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
        <CardHeader>
          <CardTitle className="text-xl">Hello!!! I am 
          <strong> Angelo Uriel Solamo</strong>
          </CardTitle>
        </CardHeader>
        <Separator/>
        <CardContent>
          <CardDescription className="text-lg">
            A BSIT Student from Saint Dominic College of Asia with a passion for creating enjoyable UX with beautiful UI. I always want to challange myself with innovative solutions to everyday problems.
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="col-start-1 row-start-2 col-span-3 row-span-1
      animate__animated animate__fadeInLeft [animation-delay:500ms]
      justify-center bg-[var(--water)]"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
        <CardHeader className="font-bold text-2xl text-center">
          Student Developer
        </CardHeader>
      </Card>
      <Card className="col-start-1 row-start-6 col-span-3 row-span-1
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
