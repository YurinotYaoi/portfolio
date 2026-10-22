import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";

export const metadata: Metadata = {
  title: 'Yuri | Home',
};

export default function Home() {
  return (
    <div className="h-150 w-full
    grid grid-cols-9 grid-rows-9 gap-2">

        <img src="Images/avatar.png" className=" w-full h-full
        col-span-4 row-span-8 
        animate__animated animate__fadeInDown
        justify-center items-center pb-0 rounded-xl object-cover"
        style={{ '--animate-duration': '0.3s' } as React.CSSProperties}/>

      <Card className="col-span-5 row-span-4
      animate__animated animate__fadeInRight [animation-delay:200ms]
      justify-center"
      style={{ '--animate-duration': '0.3s' } as React.CSSProperties}>
        <CardHeader>
          <CardTitle className="text-5xl font-bold pb-2">Angelo Uriel T. Solamo</CardTitle>
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
      animate__animated animate__fadeInRight [animation-delay:300ms]
      flex flex-row justify-center"
      style={{ '--animate-duration': '0.5s' } as React.CSSProperties}>
        <ButtonGroup className="w-full h-full">
          <Button className="flex justify-center items-center cursor-pointer w-1/2" variant="link">
            <FontAwesomeIcon icon={faGithub} className="w-4 mr-2" />
            <p className="text-lg">GitHub</p>
          </Button>
          <ButtonGroupSeparator/>
          <Button className="flex justify-center items-center cursor-pointer w-1/2" variant="link">
            <FontAwesomeIcon icon={faLinkedin} className="w-4 mr-2" />
            <p className="text-lg">Linkedin</p>
          </Button>
        </ButtonGroup>
      </Card>

      <img src="Images/minecraft-dragon.gif" className="object-cover
      col-span-5 row-span-3 w-full h-full rounded-xl
      animate__animated animate__fadeInUp [animation-delay:400ms]" style={{ '--animate-duration': '0.5s' } as React.CSSProperties}/>
    </div>
  );
}
