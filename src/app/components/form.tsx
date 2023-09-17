'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {boolean} from "zod";

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
            // Handle form submission here, e.g., send inputValue to the server

            console.log(inputValue);

            // Clear the form input field
            setInputValue('');

            // Navigate to the success page only if authenticated
            router.push('/success'); // Replace '/success' with the actual URL of the page you want to navigate to
        } else {
            // Handle authentication error or show a message
            console.log('Authentication failed');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} className={"justify-items-center"}>
                <input
                    type="text"
                    placeholder="Enter Discord ID(ex-Koala#6578)"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{ padding: '10px', marginRight: '10px' }}
                    className={"bg-opacity-50 rounded-lg text-black border border-gray-400 p-2 w-full h-12"}
                />
                <button type="submit" style={{ padding: '10px' }} className={"mt-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
