import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Button, buttonVariants} from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: 'Yuri | Home',
};

export default function Home() {
  return (
    <div className="h-150 w-full
    grid grid-cols-9 grid-rows-9 gap-2">

        <img src="Images/avatar.png" className=" w-full h-full
        md:col-span-4 md:row-span-9 
        animate__animated animate__fadeInDown
        justify-center items-center pb-0 rounded-xl object-cover
        col-span-4 row-span-5"
        style={{ '--animate-duration': '0.3s' } as React.CSSProperties}/>

      <Card className="md:col-span-5 md:row-span-4
      animate__animated animate__fadeInRight [animation-delay:200ms]
      justify-center
      col-span-5 row-span-5"
      style={{ '--animate-duration': '0.3s' } as React.CSSProperties}>
        <CardHeader>
          <CardTitle className="text-3xl font-bold pb-2 md:text-base lg:text-2xl">Angelo Uriel T. Solamo</CardTitle>
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
      
      <Card className="md:col-span-5 md:col-start-5 md:row-start-5 
      bg-[var(--water)]
      animate__animated animate__fadeInRight [animation-delay:300ms]
      flex flex-row justify-center
      col-start-1 row-start-6 col-span-9"
      style={{ '--animate-duration': '0.5s' } as React.CSSProperties}>
        <ButtonGroup className="w-full h-full">
          <a className={cn("flex justify-center items-center cursor-pointer w-1/2", 
          buttonVariants({ variant: "link", size: "sm" }))}
          href="https://github.com/YurinotYaoi" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="w-4 mr-2" />
            <p className="text-lg">GitHub</p>
          </a>
          <ButtonGroupSeparator/>
          <a className={cn("flex justify-center items-center cursor-pointer w-1/2", 
          buttonVariants({ variant: "link", size: "sm" }))}
          href="https://www.linkedin.com/in/angelo-solamo" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="w-4 mr-2" />
            <p className="text-lg">Linkedin</p>
          </a>
        </ButtonGroup>
      </Card>

      <img src="Images/minecraft-dragon.gif" className="object-cover
      md:col-span-5 row-span-4 w-full h-full rounded-xl
      animate__animated animate__fadeInUp [animation-delay:400ms]
      col-span-9" style={{ '--animate-duration': '0.5s' } as React.CSSProperties}/>
    </div>
  );
}
