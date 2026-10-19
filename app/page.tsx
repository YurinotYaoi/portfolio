import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="h-150 w-full
    grid grid-cols-9 grid-rows-6 gap-4">
      <Card className="col-span-3 row-span-6 
      animate__animated animate__fadeInDown"
      style={{ '--animate-duration': '0.3s' } as React.CSSProperties}>

      </Card>
      <Card className="col-span-6 row-span-4
      animate__animated animate__fadeInRight [animation-delay:200ms]"
      style={{ '--animate-duration': '0.3s' } as React.CSSProperties}>

      </Card>
      <Card className="col-span-6 col-start-4 row-start-5 bg-red-900
      animate__animated animate__fadeInUp [animation-delay:350ms]"
      style={{ '--animate-duration': '0.5s' } as React.CSSProperties}>

      </Card>
      <Card className="col-span-6 col-start-4 row-start-6
      animate__animated animate__fadeInUp [animation-delay:450ms]"
      style={{ '--animate-duration': '0.5s' } as React.CSSProperties}>

      </Card>
    </div>
  );
}
