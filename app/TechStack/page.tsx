import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList,  TabsTrigger } from "@/components/ui/tabs";

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
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
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
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
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
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
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
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
                      <div className="aspect-video rounded-xl bg-muted/50 w-60" />
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
