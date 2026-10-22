"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type CertificateCardProps = {
  title: string;
  src: string;
};

export function CertificateCard({ title, src }: CertificateCardProps) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            type="button"
            className="flex aspect-video w-60 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl bg-muted/50 p-3 text-center transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          />
        }
      >
        <Image
          src={src}
          alt=""
          width={220}
          height={124}
          className="h-20 w-full object-contain"
        />
        <span className="text-xs font-medium">{title}</span>
      </DialogTrigger>
      <DialogContent
        className="overflow-y-auto"
        style={{
          position: "fixed",
          inset: "50% auto auto 50%",
          width: "min(88vw, 1000px)",
          maxWidth: "min(88vw, 1000px)",
          maxHeight: "90dvh",
          transform: "translate(-50%, -50%)",
          translate: "none",
        }}
      >
        <DialogTitle className="pr-8 text-center">{title}</DialogTitle>
        <div className="relative w-full" style={{ height: "min(78dvh, 700px)" }}>
          <Image
            src={src}
            alt={title}
            fill
            sizes="88vw"
            className="object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
