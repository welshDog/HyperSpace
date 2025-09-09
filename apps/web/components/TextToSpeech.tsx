'use client';

import React, { useState } from 'react';

interface TextToSpeechProps {
    text: string;
    children: React.ReactNode;
}

export default function TextToSpeech({ text, children }: TextToSpeechProps) {
    const [isSpeaking, setIsSpeaking] = useState(false);

    const speak = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
        }
    };

    return (
        <div className="inline-flex items-center gap-2">
            {children}
            <button
                onClick={speak}
                className="text-dyslexia-primary hover:text-dyslexia-secondary transition-colors"
                disabled={isSpeaking}
                aria-label="Read aloud"
            >
                {isSpeaking ? '🔊' : '🔈'}
            </button>
        </div>
    );
}
