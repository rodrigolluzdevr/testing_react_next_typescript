import { Geist, Geist_Mono } from "next/font/google";
import Card from "@/components/Card";

function VerifyDesc(n1: number, n2: number) {
  const verify = n1 - n2
  const verify2 = n1 - n2/2
  if (verify > 1000) {
    return verify
  } else {
    return verify2
  }
}

export default function Home() {
  return (
    <main>
      <div className='flex justify-center gap-3'>
        <Card product={'Course Typescript'} value={1600} descount={100} funct={VerifyDesc}/>
        <Card product={'Course Golang'} value={1800} descount={100} funct={VerifyDesc}/>
        <Card product={'Course PHP'} value={600} descount={100} funct={VerifyDesc}/>
      </div>
    </main>
  );
}
