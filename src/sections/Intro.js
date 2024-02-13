import React from 'react';
import selfie from '../../public/selfie.png'
import Image from 'next/image'
import Link from 'next/link'

const Intro = () => {
  return (
    <section id="intro" className="flex flex-col md:flex-row items-center justify-center h-screen w-full px-4 md:px-24 mx-auto">
        <div className="flex-1 flex items-end md:items-center justify-center mb-4 md:mb-0">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden">
                <Image
                    src={selfie}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'top center',
                      }}
                    alt="Ruibo's selfie"
                    className="rounded-full"
                />
            </div>
        </div>
      <div className="flex-1 flex flex-col items-start justify-center space-y-4">
        <div>
          <h1 className="md:text-5xl font-bold text-3xl">Hi, I&#39;m Ruibo Xu</h1>
          <p className="md:text-2xl py-5 text-lg">I&#39;m a software engineer.</p>
        </div>
        <Link href='./Resume.pdf' target="_blank">
        <button className="px-8 py-4 bg-gray-800 text-white rounded hover:bg-slate-600 text-2xl">
            See my Resume
        </button>
        </Link>
      </div>
    </section>
  );
}

export default Intro;