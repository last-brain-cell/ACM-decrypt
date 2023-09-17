'use client'

import React from "react";
import Image from 'next/image'
import Form from "./components/form"
import logo from "../../public/elicit_logo.png"
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Login from "./components/login";

export default function Home() {
    // @ts-ignore
    const particlesInit = async (engine) => {
        console.log(engine);
        await loadSlim(engine);
    };

    // @ts-ignore
    const particlesLoaded = async (container) => {
        await console.log(container);
    };

    // @ts-ignore
    return (
        <div className="bg-gradient-to-tr from-black via-zinc-600/20 to-black min-h-screen flex flex-col">
            <header className="p-1 sm:items-center">
                <a href={"/"}>
                    <Image
                        src={logo}
                        alt="Logo"
                        width={100}
                        height={24}
                        className="mr-4 sm:items-center"
                        priority
                    />
                </a>
                <h1 className="flex justify-center items-center text-7xl font-extrabold font-display text-zinc-100 text-2xl">
                    Decode
                </h1>
            </header>
            <main className="flex justify-center items-center">
                {/*<Form />*/}
                <Login />
            </main>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        opacity: {
                            value: 0
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
}
