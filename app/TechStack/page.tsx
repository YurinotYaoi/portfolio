import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList,  TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faTailwindCss, faTypescript } from "@fortawesome/free-brands-svg-icons";
import { faMicrochip, faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { CertificateCard } from "@/components/certificate-card";

export const metadata: Metadata = {
  title: 'Yuri | Tech Stack',
};

export default function TechStack() {

  return (
    <div className="h-150 w-full">
      <Tabs defaultValue="overview h-full">
        <Card className="w-full p-0 animate__animated animate__fadeInLeft mb-2"
        style={{ '--animate-duration': '0.4s' } as React.CSSProperties}>
          <TabsList className="grid w-full grid-cols-4" variant="line">
            <TabsTrigger value="Tools" className="cursor-pointer">
              Tools</TabsTrigger> 
            <TabsTrigger value="Programming Languages" className="cursor-pointer">
              Programming Languages</TabsTrigger>
            <TabsTrigger value="Frameworks" className="cursor-pointer">
              Frameworks</TabsTrigger>
            <TabsTrigger value="Certifications" className="cursor-pointer">
              Certifications</TabsTrigger>
          </TabsList>
        </Card>
        
        
        <Card className="p-0 animate__animated animate__fadeInRight mt-0"
        style={{ '--animate-duration': '0.4s' } as React.CSSProperties}>
          <TabsContent value="Tools" className="h-full">
            <Card>
              <CardHeader>
                <CardTitle>Tools</CardTitle>
                <CardDescription>These are the tools I use </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="w-full h-100 rounded-md border">
                  <div className="flex flex-1 flex-col gap-4 p-4">
                    <div className="flex flex-wrap gap-4 justify-evenly">
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Tools/tech-firebase.png" alt="Firebase" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>Firebase</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Tools/tech-illust-canva.png" alt="Canva" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>Canva</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Tools/tech-illust-krita.png" alt="Krita" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>Krita</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Tools/tech-postman.svg" alt="Postman" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>Postman</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Tools/tech-tools-Android-Studio.png" alt="Android Studio" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>Android Studio</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Tools/tech-tools-Apache-NetBeans_.png" alt="Apache NetBeans" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>Apache NetBeans</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Tools/tech-tools-github.png" alt="GitHub" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>GitHub</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Tools/tech-tools-mongodb.png" alt="MongoDB" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>MongoDB</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Tools/tech-tools-oracle-apex.png" alt="Oracle APEX" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>Oracle APEX</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Tools/tech-tools-render.png" alt="Render" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>Render</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Tools/tech-tools-vscode.png" alt="Visual Studio Code" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>Visual Studio Code</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <FontAwesomeIcon icon={faNetworkWired} aria-label="Wireshark" className="h-16 w-16 text-[#1679A7]" />
                        <CardTitle>Wireshark</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <FontAwesomeIcon icon={faNetworkWired} aria-label="Cisco Packet Tracer" className="h-16 w-16 text-[#049FD9]" />
                        <CardTitle>Cisco Packet Tracer</CardTitle>
                      </Card>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Programming Languages">
            <Card>
              <CardHeader>
                <CardTitle>Programming Languages</CardTitle>
                <CardDescription>These are the programming languages I know</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="w-full h-100 rounded-md border">
                  <div className="flex flex-1 flex-col gap-4 p-4">
                    <div className="flex flex-wrap gap-4 justify-evenly">
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Programming/tech-c.png" alt="C" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>C</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Programming/tech-css-3.png" alt="CSS" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>CSS</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Programming/tech-dart.png" alt="Dart" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>Dart</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Programming/tech-html-5.png" alt="HTML" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>HTML</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Programming/tech-java.png" alt="Java" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>Java</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Programming/tech-javascript.png" alt="JavaScript" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>JavaScript</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Programming/tech-sql.png" alt="SQL" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>SQL</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Programming/tech-xml.png" alt="XML" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>XML</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <FontAwesomeIcon icon={faTypescript} aria-label="TypeScript" className="h-16 w-16 text-[#3178C6]" />
                        <CardTitle>TypeScript</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <FontAwesomeIcon icon={faMicrochip} aria-label="Arduino" className="h-16 w-16 text-[#00979D]" />
                        <CardTitle>Arduino C++</CardTitle>
                      </Card>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Frameworks">
            <Card>
              <CardHeader>
                <CardTitle>Frameworks</CardTitle>
                <CardDescription>These are the frameworks I know</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="w-full h-100 rounded-md border">
                  <div className="flex flex-1 flex-col gap-4 p-4">
                    <div className="flex flex-wrap gap-4 justify-evenly">
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Programming/tech-expressjs.svg" alt="Express.js" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>Express.js</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Programming/tech-flutter.png" alt="Flutter" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>Flutter</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/Images/Tech/Programming/tech-node.js.png" alt="Node.js" width={64} height={64} className="h-16 w-16 object-contain" />
                        <CardTitle>Node.js</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <Image src="/next.svg" alt="Next.js" width={64} height={64} className="h-16 w-16 object-contain dark:invert" />
                        <CardTitle>Next.js</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <FontAwesomeIcon icon={faReact} aria-label="React" className="h-16 w-16 text-[#61DAFB]" />
                        <CardTitle>React</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-4">
                        <FontAwesomeIcon icon={faTailwindCss} aria-label="Tailwind CSS" className="h-16 w-16 text-[#06B6D4]" />
                        <CardTitle>Tailwind CSS</CardTitle>
                      </Card>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Certifications">
            <Card>
              <CardHeader>
                <CardTitle>Certificates</CardTitle>
                <CardDescription>These are the certificates that I have obtained</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="w-full h-100 rounded-md border">
                  <div className="flex flex-1 flex-col gap-4 p-4">
                    <div className="flex flex-wrap gap-4 justify-evenly">
                      <CertificateCard
                        title="Information Technology Specialist: Databases"
                        src="/Images/Certificates/database-1.png"
                      />
                      <CertificateCard
                        title="Getting Started with Cisco Packet Tracer"
                        src="/Images/Certificates/Getting_Started_with_Cisco_Packet_Tracer_certificate_angelouriel-solamo-sdca-edu-ph_dfbb072e-e01a-4234-a6bb-fe1ba0c25879_page-0001.jpg"
                      />
                      <CertificateCard
                        title="Introduction to Cybersecurity"
                        src="/Images/Certificates/Introduction_to_Cybersecurity_certificate_angelouriel-solamo-sdca-edu-ph_d94d47e3-53b9-446a-8eeb-a3046c69be2a_page-0001.jpg"
                      />
                      <CertificateCard
                        title="Introduction to IoT"
                        src="/Images/Certificates/Introduction_to_IoT_certificate_angelouriel-solamo-sdca-edu-ph_fdcc4134-a51b-417f-ab4c-81c05d364868_page-0001.jpg"
                      />
                      <CertificateCard
                        title="JavaScript"
                        src="/Images/Certificates/js_page-0001.jpg"
                      />
                      <CertificateCard
                        title="Microsoft PowerPoint 2019"
                        src="/Images/Certificates/powerpoint%202019-1.png"
                      />
                      <CertificateCard
                        title="Domini Xode 2023 Code Hunt"
                        src="/Images/Certificates/Sinegenggeng.png"
                      />
                      <CertificateCard
                        title="Software Development"
                        src="/Images/Certificates/softdev_page-0001.jpg"
                      />
                      <CertificateCard
                        title="Microsoft Word 2019"
                        src="/Images/Certificates/word%202019-1.png"
                      />
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Card>
      </Tabs>
    </div>
  );
}
