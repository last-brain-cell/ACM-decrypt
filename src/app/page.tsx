import Image from 'next/image'
import { Inter } from 'next/font/google'
import Form from "./components/form"
import logo from "../../public/elicit_logo.png"
import poster from "../../public/poster.jpeg"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex h-screen flex-col  justify-between">
        <div className="flex items-center mb-8">
            <Image
                src={logo}
                alt="Logo"
                width={100}
                height={24}
                priority
                className="mr-4"
            />
            <h1 className="font-extrabold font-display text-zinc-100 text-2xl">
                Elicit
            </h1>
        </div>
      <div className="flex grid-cols-2 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/*<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">*/}
        {/*  /!*Get started by editing&nbsp;*!/*/}
        {/*</p>*/}
        <Image
            src={poster}
            alt="poster"
            width={400}
            height={600}
            className="m-8 rounded-lg shadow-lg"
            // height={24}
            // priority
        />
        <div>
          <Form/>
        </div>
      </div>
        {/*<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">*/}
        {/*</div>*/}
    </main>
  )
}
