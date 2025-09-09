'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Analytics() {
    const pathname = usePathname();

    useEffect(() => {
        // Track page view
        console.log(`Page viewed: ${pathname}`);
        // In a real app, send to analytics service
        // Example: gtag('event', 'page_view', { page_path: pathname });
    }, [pathname]);

    useEffect(() => {
        // Track TTS usage
        const handleTTS = () => {
            console.log('TTS used');
            // Track TTS events
        };

        window.addEventListener('tts-used', handleTTS);
        return () => window.removeEventListener('tts-used', handleTTS);
    }, []);

    return null;
}
