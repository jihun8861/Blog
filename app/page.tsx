import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4 py-8 bg-sky-200 h-screen">
      
      <main className="bg-sky-300 ">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h5 className="">블로그 개발 프로젝트</h5>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
