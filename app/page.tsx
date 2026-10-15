import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-400 h-150 py-10
    grid grid-cols-9 grid-rows-6 gap-4 ml-8">
      <div className="bg-red-50 rounded-2xl
      col-span-3 row-span-6"></div>
      <div className="bg-red-900 rounded-2xl
      col-span-6 row-span-4"></div>
      <div className="dark:bg-zinc-900 bg-slate-50 rounded-2xl
      col-span-6 col-start-4 row-start-5"></div>
      <div className="bg-slate-900 rounded-2xl
      col-span-6 col-start-4 row-start-6"></div>
    </div>
  );
}
