import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className=" w-400 h-150 py-10
    grid grid-cols-9 grid-rows-6 gap-4 ml-8">
      <Card className="col-span-3 row-span-6 ">

      </Card>
      <Card className="col-span-6 row-span-4 bg-red-900">

      </Card>
      <Card className="col-span-6 col-start-4 row-start-5">

      </Card>
      <Card className="col-span-6 col-start-4 row-start-6">

      </Card>
    </div>
  );
}
