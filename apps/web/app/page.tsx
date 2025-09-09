export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-dyslexia-primary text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-dyslexic font-bold">Dyslexia-First Web App</h1>
          <p className="mt-2 font-dyslexic">Press H at any time to see keyboard shortcuts</p>
        </div>
      </header>

      <main className="container mx-auto p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-dyslexic mb-4">Quick Start Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-dyslexic">
              <div className="p-4 bg-gray-50 rounded">
                <h3 className="font-bold mb-2">Keyboard Controls</h3>
                <ul className="space-y-2">
                  <li>
                    <kbd className="px-2 py-1 bg-white rounded shadow">T</kbd>
                    <span className="ml-2">Toggle Text-to-Speech</span>
                  </li>
                  <li>
                    <kbd className="px-2 py-1 bg-white rounded shadow">N</kbd>
                    <span className="ml-2">Next Section</span>
                  </li>
                  <li>
                    <kbd className="px-2 py-1 bg-white rounded shadow">P</kbd>
                    <span className="ml-2">Previous Section</span>
                  </li>
                  <li>
                    <kbd className="px-2 py-1 bg-white rounded shadow">H</kbd>
                    <span className="ml-2">Help Menu</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h3 className="font-bold mb-2">Features</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Dyslexia-friendly font</li>
                  <li>Text-to-speech support</li>
                  <li>High contrast design</li>
                  <li>Keyboard navigation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-dyslexic mb-4">Try It Out</h2>
            <p className="font-dyslexic text-lg leading-relaxed mb-4">
              This text is using our dyslexia-friendly font. Notice how the letters
              are more distinct and easier to read? Try pressing the &apos;T&apos; key
              to have this text read aloud.
            </p>
            <p className="font-dyslexic text-lg leading-relaxed">
              Use the &apos;N&apos; and &apos;P&apos; keys to navigate between different sections
              of content. Each section is clearly marked and easy to distinguish.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-dyslexic mb-4">Font Comparison</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded">
                <p className="font-sans text-lg">
                  This text uses Inter (Default Sans-Serif)
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <p className="font-mono text-lg">
                  This text uses JetBrains Mono (Monospace)
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <p className="font-dyslexic text-lg">
                  This text uses our Dyslexia-Friendly Font
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
