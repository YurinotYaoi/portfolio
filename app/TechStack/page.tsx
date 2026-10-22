import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList,  TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Metadata } from "next";

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
                <CardDescription>These are the tools I use for development</CardDescription>
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
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Certifications">
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
                <CardDescription>These are the certifications I have obtained</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="w-full h-100 rounded-md border">
                  <div className="flex flex-1 flex-col gap-4 p-4">
                    <div className="flex flex-wrap gap-4 justify-evenly">
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-3">
                        <Image src="/Images/Certificates/database-1.png" alt="Information Technology Specialist: Databases" width={220} height={124} className="h-20 w-full object-contain" />
                        <CardTitle className="text-center text-xs">Information Technology Specialist: Databases</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-3">
                        <Image src="/Images/Certificates/Getting_Started_with_Cisco_Packet_Tracer_certificate_angelouriel-solamo-sdca-edu-ph_dfbb072e-e01a-4234-a6bb-fe1ba0c25879_page-0001.jpg" alt="Getting Started with Cisco Packet Tracer" width={220} height={124} className="h-20 w-full object-contain" />
                        <CardTitle className="text-center text-xs">Getting Started with Cisco Packet Tracer</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-3">
                        <Image src="/Images/Certificates/Introduction_to_Cybersecurity_certificate_angelouriel-solamo-sdca-edu-ph_d94d47e3-53b9-446a-8eeb-a3046c69be2a_page-0001.jpg" alt="Introduction to Cybersecurity" width={220} height={124} className="h-20 w-full object-contain" />
                        <CardTitle className="text-center text-xs">Introduction to Cybersecurity</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-3">
                        <Image src="/Images/Certificates/Introduction_to_IoT_certificate_angelouriel-solamo-sdca-edu-ph_fdcc4134-a51b-417f-ab4c-81c05d364868_page-0001.jpg" alt="Introduction to IoT" width={220} height={124} className="h-20 w-full object-contain" />
                        <CardTitle className="text-center text-xs">Introduction to IoT</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-3">
                        <Image src="/Images/Certificates/js_page-0001.jpg" alt="JavaScript certificate" width={220} height={124} className="h-20 w-full object-contain" />
                        <CardTitle className="text-center text-xs">JavaScript</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-3">
                        <Image src="/Images/Certificates/powerpoint%202019-1.png" alt="Microsoft PowerPoint 2019 certificate" width={220} height={124} className="h-20 w-full object-contain" />
                        <CardTitle className="text-center text-xs">Microsoft PowerPoint 2019</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-3">
                        <Image src="/Images/Certificates/Sinegenggeng.png" alt="Domini Xode 2023 Code Hunt certificate" width={220} height={124} className="h-20 w-full object-contain" />
                        <CardTitle className="text-center text-xs">Domini Xode 2023 Code Hunt</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-3">
                        <Image src="/Images/Certificates/softdev_page-0001.jpg" alt="Software Development certificate" width={220} height={124} className="h-20 w-full object-contain" />
                        <CardTitle className="text-center text-xs">Software Development</CardTitle>
                      </Card>
                      <Card className="aspect-video w-60 items-center justify-center gap-2 rounded-xl bg-muted/50 p-3">
                        <Image src="/Images/Certificates/word%202019-1.png" alt="Microsoft Word 2019 certificate" width={220} height={124} className="h-20 w-full object-contain" />
                        <CardTitle className="text-center text-xs">Microsoft Word 2019</CardTitle>
                      </Card>
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
