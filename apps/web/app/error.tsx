'use client';

import React from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    React.useEffect(() => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance('An error occurred. Please try again.');
            window.speechSynthesis.speak(utterance);
        }
    }, [error]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-dyslexia-background text-dyslexia-text font-dyslexia">
            <div className="text-center p-8">
                <h1 className="text-dyslexia-xl font-bold mb-4 text-red-600">Oops! Something went wrong</h1>
                <p className="text-dyslexia-base mb-6">
                    We encountered an error while loading this page. This might be due to a temporary issue.
                </p>
                <button
                    onClick={reset}
                    className="bg-dyslexia-primary text-white px-6 py-3 rounded font-bold hover:bg-opacity-90 transition-colors"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}
