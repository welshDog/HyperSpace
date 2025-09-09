'use client';

import { useEffect } from 'react';

interface KeyboardShortcutsProps {
    onToggleTTS?: () => void;
    onNavigateNext?: () => void;
    onNavigatePrev?: () => void;
}

export default function KeyboardShortcuts({ onToggleTTS, onNavigateNext, onNavigatePrev }: KeyboardShortcutsProps) {
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            // Prevent default if it's a shortcut
            if (event.ctrlKey || event.metaKey) return; // Allow Ctrl/Cmd shortcuts

            switch (event.key.toLowerCase()) {
                case 't':
                    event.preventDefault();
                    onToggleTTS?.();
                    break;
                case 'n':
                    event.preventDefault();
                    onNavigateNext?.();
                    break;
                case 'p':
                    event.preventDefault();
                    onNavigatePrev?.();
                    break;
                case 'h':
                    event.preventDefault();
                    alert('Keyboard shortcuts:\nT - Toggle TTS\nN - Next section\nP - Previous section\nH - Help');
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [onToggleTTS, onNavigateNext, onNavigatePrev]);

    return null; // This component doesn't render anything
}
