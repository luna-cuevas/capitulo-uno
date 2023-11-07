'use client';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import { useStateContext } from '@/context/StateContext';
import Image from 'next/image';

export default function Home() {
  const { state, setState } = useStateContext();
  return (
    <main className="relative  min-h-[800px] overflow-hidden">
      <div className="absolute h-full z-0 justify-evenly flex flex-col -left-4 top-0">
        <div className="relative w-[40vh] mb-4 left-1/3 h-[15vh]">
          <Image src="/images/green-shape.png" alt="shape" fill />
        </div>
        <div className="relative w-[40vh] left-8 h-[40vh]">
          <Image src="/images/red-shape.png" alt="shape" fill />
        </div>
        <div className="relative w-[40vh] -left-8 rotate-[270deg] h-[40vh]">
          <Image src="/images/blue-shape.png" alt="shape" fill />
        </div>
      </div>

      {state.signInActive && <SignIn />}
      {state.signUpActive && <SignUp />}

      <div className=" relative top-32 w-1/2 m-auto z-[1000] h-[500px]  object-cover">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/C0DPdy98e4c"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen></iframe>
      </div>

      <div className="absolute z-0 justify-evenly h-full flex  flex-col -right-12 top-0">
        <div className="relative w-[40vh] ml-auto h-[30vh]">
          <Image src="/images/orange-shape.png" alt="shape" fill />
        </div>

        <div className="relative w-[50vh] -right-1/4 rotate-[300deg] h-[40vh]">
          <Image src="/images/arches-shape.png" alt="shape" fill />
        </div>
      </div>
    </main>
  );
}
