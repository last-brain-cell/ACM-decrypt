'use client'
import {redirect, useRouter} from 'next/navigation';
import React, { useState } from 'react';


function Form() {
    const [inputValue, setInputValue] = useState<string>('');
    const router = useRouter();
    var authenticated = false; // Replace this with your actual authentication logic

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (inputValue.startsWith("#") && inputValue.endsWith("naad")) {
            authenticated = true;
        }

        if (authenticated) {
            console.log(inputValue);
            setInputValue('');

            // router.push('https://muj.acm.org/#/x');
            redirect("../pages/page1")
        } else {
            // Handle authentication error or show a message
            console.log('Authentication failed');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form onSubmit={handleSubmit} className="bg-transparent m-16 justify-items-center flex flex-col items-center justify-center">
                <h1 className="mt-10 text-4xl font-bold font-display">Decode</h1>
                <h2 className="mt-10 mb-3">Enter Discord ID to start...</h2>
                <input
                    type="text"
                    placeholder="example - Koala#6578"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{ padding: '10px', marginRight: '10px' }}
                    className="bg-opacity-50 rounded-lg text-black border border-gray-400 p-2 w-full h-12"
                />
                <button type="submit" style={{ padding: '10px' }} className="mt-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Submit
                </button>
            </form>

        </div>
    );
}

export default Form;
