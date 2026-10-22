import Axelotle from "@/components/axelotle";
import { Card, CardHeader } from "@/components/ui/card";
import { Avatar } from "@base-ui/react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yuri | About Me',
};

export default function AboutMe() {

  return (
    <div className="h-150 w-full
    grid grid-cols-9 grid-rows-6 gap-2">
      <Card className="col-start-4 row-start-2 col-span-3 row-span-4
      animate__animated animate__fadeInUp justify-center items-center"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
        <div class="w-32 h-32 rounded-full overflow-hidden">
          <img class="w-full h-full object-cover" src="Images/githubpfp.png" />
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
      <Card className="col-start-7 row-start-1 col-span-3 row-span-4
      animate__animated animate__fadeInRight [animation-delay:120ms]
      bg-[var(--water)] justify-center items-center"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>  
       <Axelotle/>
      </Card>
      <Card className="col-start-7 row-start-5 col-span-3 row-span-1
      animate__animated animate__fadeInUp [animation-delay:200ms]
      justify-center bg-[var(--water)]"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>  
        <CardHeader className="font-bold text-2xl text-center">
          Education
        </CardHeader>
      </Card>
      <Card className="col-start-4 row-start-6 col-span-6 row-span-1
      animate__animated animate__fadeInUp [animation-delay:300ms]"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
      5
      </Card>
      <Card className="col-start-1 row-start-3 col-span-3 row-span-4
      animate__animated animate__fadeInLeft [animation-delay:400ms]"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
        <CardHeader>

        </CardHeader>
      </Card>
      <Card className="col-start-1 row-start-2 col-span-3 row-span-1
      animate__animated animate__fadeInLeft [animation-delay:500ms]
      justify-center bg-[var(--water)]"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
        <CardHeader className="font-bold text-2xl text-center">
          Student Developer
        </CardHeader>
      </Card>
    </div>
  );
}
