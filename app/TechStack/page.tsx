import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList,  TabsTrigger } from "@/components/ui/tabs";

export default function TechStack() {

  return (
    <div className="h-150 w-full">
      <Tabs defaultValue="overview h-full">
        <Card className="w-full p-0 animate__animated animate__fadeInLeft mb-0"
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
        
        
        <Card className="w-full h-full p-0 animate__animated animate__fadeInRight mt-0"
        style={{ '--animate-duration': '0.4s' } as React.CSSProperties}>
          <TabsContent value="Tools" >
            <Card>
              <CardHeader>
                <CardTitle>Tools</CardTitle>
                <CardDescription>These are the tools I use for development</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Tool 1</p>
                <p>Tool 2</p>
                <p>Tool 3</p>
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
                <p>Language 1</p>
                <p>Language 2</p>
                <p>Language 3</p>
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
                <p>Framework 1</p>
                <p>Framework 2</p>
                <p>Framework 3</p>
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
                <p>Certification 1</p>
                <p>Certification 2</p>
                <p>Certification 3</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Card>
      </Tabs>
    </div>
  );
}
