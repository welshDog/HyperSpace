'use client';

import KeyboardShortcuts from './KeyboardShortcuts';

export default function KeyboardShortcutsWrapper() {
    return (
        <KeyboardShortcuts
            onToggleTTS={() => console.log('Toggle TTS')}
            onNavigateNext={() => console.log('Navigate Next')}
            onNavigatePrev={() => console.log('Navigate Prev')}
        />
    );
}
