'use client'

import Image from 'next/image'
import Form from "./components/form"
import logo from "../../public/elicit_logo.png"

export default function Home() {
  return (
          <div className="bg-gradient-to-tr from-black via-zinc-600/20 to-black h-screen">
              <div className="bg-gradient-to-tr from-black via-zinc-600/20 to-black h-screen">
                  <div className="overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black h-screen">
                            <main className="flex flex-col justify-between overflow-hidden">
                                <div className="inline-flex items-center">
                                    <a href={"/"}>
                                        <Image
                                            src={logo}
                                            alt="Logo"
                                            width={100}
                                            height={24}
                                            priority
                                            className="mr-4"
                                        />
                                    </a>
                                    <h1 className="font-extrabold font-display text-zinc-100 text-2xl">
                                        Elicit
                                    </h1>
                                </div>
                                <div>
                                  <Form/>
                                </div>
                            </main>
                      </div>
                  </div>
              </div>
  )
}
