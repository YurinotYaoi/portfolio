import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Button } from "@base-ui/react";

export const metadata: Metadata = {
  title: 'Yuri | Home',
};

export default function Home() {
  return (
    <div className="h-150 w-full
    grid grid-cols-9 grid-rows-6 gap-4">
      <Card className="col-span-4 row-span-5 
      animate__animated animate__fadeInDown
      justify-center items-center pb-0"
      style={{ '--animate-duration': '0.3s' } as React.CSSProperties}>
        <img  ratio={1 / 1} src="Images/avatar.png" className="w-9/11"/>
      </Card>

      <Card className="col-span-5 row-span-4
      animate__animated animate__fadeInRight [animation-delay:200ms]
      justify-center"
      style={{ '--animate-duration': '0.3s' } as React.CSSProperties}>
        <CardHeader>
          <CardTitle className="text-5xl font-bold">Angelo Uriel T. Solamo</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent>
          <CardTitle>Saint Dominic College of Asia</CardTitle>
          <CardDescription>
            Undergraduate | Bachelor of Science in Information Technology
          </CardDescription>
          <CardTitle className="pt-2">Based in</CardTitle>
          <CardDescription>Philippines, Cavite</CardDescription>
        </CardContent>
      </Card>
      <Card className="col-span-5 col-start-5 row-start-5 
      bg-[var(--water)]
      animate__animated animate__fadeInUp [animation-delay:350ms]"
      style={{ '--animate-duration': '0.5s' } as React.CSSProperties}>

      </Card>
      <Card className="col-span-9 col-start-1 row-start-6
      animate__animated animate__fadeInUp [animation-delay:450ms]"
      style={{ '--animate-duration': '0.5s' } as React.CSSProperties}>
        <Button className="flex justify-center items-center">
          <FontAwesomeIcon icon={faGithub} className="w-4 mr-2" />
          <p className="">GitHub</p>
        </Button>
      </Card>
    </div>
  );
}
