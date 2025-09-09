'use client';

import { useState } from 'react';
import KeyboardShortcuts from './KeyboardShortcuts';

export default function RootLayoutProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [ttsEnabled, setTtsEnabled] = useState(false);

    return (
        <>
            <KeyboardShortcuts
                onToggleTTS={() => setTtsEnabled(!ttsEnabled)}
                onNavigateNext={() => console.log('Navigate Next')}
                onNavigatePrev={() => console.log('Navigate Prev')}
            />
            {children}
        </>
    );
}
