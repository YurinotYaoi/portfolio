import { Card, CardHeader } from "@/components/ui/card";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yuri | About Me',
};

export default function AboutMe() {

  return (
    <div className="h-150 w-full
    grid grid-cols-9 grid-rows-6 gap-4">
      <Card className="col-start-4 row-start-2 col-span-3 row-span-4
      animate__animated animate__fadeInUp"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
        1
      </Card>
      <Card className="col-start-1 row-start-1 col-span-6 row-span-1
      animate__animated animate__fadeInLeft
      justify-center"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
        <CardHeader className="font-bold text-4xl text-center">Yuri Not Yaoi</CardHeader>
      </Card>
      <Card className="col-start-7 row-start-1 col-span-3 row-span-4
      animate__animated animate__fadeInRight [animation-delay:120ms]"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>  
       3
      </Card>
      <Card className="col-start-7 row-start-5 col-span-3 row-span-1
      animate__animated animate__fadeInUp [animation-delay:200ms]"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>  
      4
      </Card>
      <Card className="col-start-4 row-start-6 col-span-6 row-span-1
      animate__animated animate__fadeInUp [animation-delay:300ms]"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
      5
      </Card>
      <Card className="col-start-1 row-start-3 col-span-3 row-span-4
      animate__animated animate__fadeInLeft [animation-delay:400ms]"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
      6
      </Card>
      <Card className="col-start-1 row-start-2 col-span-3 row-span-1
      animate__animated animate__fadeInLeft [animation-delay:500ms]"
      style={{ '--animate-duration': '0.1s' } as React.CSSProperties}>
      7
      </Card>
    </div>
  );
}
