import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute flex flex-col -left-4 top-0">
        <div className="relative w-[30vh] h-[10vh]">
          <Image src="/images/green-shape.png" alt="shape" fill />
        </div>
        <div className="relative w-[30vh] h-[30vh]">
          <Image src="/images/red-shape.png" alt="shape" fill />
        </div>
        <div className="relative w-[30vh] rotate-[270deg] h-[30vh]">
          <Image src="/images/blue-shape.png" alt="shape" fill />
        </div>
      </div>
    </main>
  );
}
