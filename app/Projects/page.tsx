import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Yuri | Projects',
};

export default function Projects() {
  return (
    <main className="w-full space-y-2 pb-4">
      <Card
        className="animate__animated animate__fadeInLeft"
        style={{ "--animate-duration": "0.4s" } as React.CSSProperties}
      >
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Adpark</CardTitle>
          <CardDescription>Front-End Developer | Hardware Developer</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-4">
          <p>
            Collaborated with a five-person software development team to build
            an adaptive parking system.
          </p>
          <div>
            <h2 className="mb-1 font-semibold">Frontend - Next.js</h2>
            <p className="text-muted-foreground">
              Built a responsive web application for real-time parking slot
              monitoring, reservations, and user interaction, including
              dynamic dashboards and authentication features.
            </p>
          </div>
          <div>
            <h2 className="mb-1 font-semibold">Hardware - Arduino ESP32</h2>
            <p className="text-muted-foreground">
              Developed the hardware using an ESP32 microcontroller, IoT
              modules, and sensors to detect vehicle presence, transmit data,
              and connect with cloud services.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-md bg-muted px-2 py-1 text-xs">Next.js</span>
            <span className="rounded-md bg-muted px-2 py-1 text-xs">Arduino</span>
            <span className="rounded-md bg-muted px-2 py-1 text-xs">ESP32</span>
            <span className="rounded-md bg-muted px-2 py-1 text-xs">IoT</span>
          </div>
        </CardContent>
      </Card>

      <Card
        className="animate__animated animate__fadeInRight"
        style={{ "--animate-duration": "0.4s" } as React.CSSProperties}
      >
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Touch and Go</CardTitle>
          <CardDescription>Front-End Developer</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Designed and developed a mobile application for attendance
            tracking.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Built the application with Flutter and Dart.</li>
            <li>Implemented UI components for fingerprint-based login and real-time reporting.</li>
            <li>Integrated backend services to securely store and manage attendance records.</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-md bg-muted px-2 py-1 text-xs">Flutter</span>
            <span className="rounded-md bg-muted px-2 py-1 text-xs">Dart</span>
            <span className="rounded-md bg-muted px-2 py-1 text-xs">Mobile</span>
            <span className="rounded-md bg-muted px-2 py-1 text-xs">Attendance Tracking</span>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
