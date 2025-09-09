import React from 'react';

'use client';

export default function Loading() {
    // Optional: Add TTS for loading
    React.useEffect(() => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance('Loading page');
            window.speechSynthesis.speak(utterance);
        }
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-dyslexia-background">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-dyslexia-primary mx-auto mb-4"></div>
                <p className="text-dyslexia-base font-dyslexia">Loading...</p>
            </div>
        </div>
    );
}
