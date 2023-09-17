import React, { useState } from 'react';
import {redirect} from "next/navigation";

export default function Login() {
    const [discordId, setDiscordId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (discordId === '111') {
            setDiscordId('');
            redirect("https://unstop.com/competitions/decode-30-elicit23-muj-acm-752561")
        } else {
            setDiscordId('');
            alert('Incorrect Discord ID. Please try again.');
        }
    };

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-zinc-200 bg rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-400">
                    Enter Discord id
                </h1>
                <form className="mt-1" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <input
                            type="text"
                            placeholder="88241299120"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={discordId}
                            onChange={(e) => setDiscordId(e.target.value)}
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
