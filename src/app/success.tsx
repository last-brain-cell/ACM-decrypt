'use client'

import Link from 'next/link';

function Success() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold text-green-500 mb-4">
                Success!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
                Your form has been successfully submitted.
            </p>
            <Link href="/page">
                <a className="text-blue-500 hover:underline">Back to Home</a>
            </Link>
        </div>
    );
}

export default Success;
