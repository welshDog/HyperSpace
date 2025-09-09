# HyperFocus Zone

A dyslexia-friendly web application designed to provide an accessible and intuitive reading experience.

## Features

- **Dyslexia-Friendly Design**:
  - Lexend font optimized for readability
  - High contrast color schemes
  - Proper spacing and typography
  - Clear visual hierarchy

- **Accessibility Features**:
  - Text-to-Speech integration (press 'T')
  - Keyboard navigation shortcuts
  - ARIA-compliant components
  - Screen reader support

- **Keyboard Shortcuts**:
  - `T` - Toggle Text-to-Speech
  - `N` - Navigate to next section
  - `P` - Navigate to previous section
  - `H` - Show help menu

- **Technical Stack**:
  - Next.js 14
  - React 18
  - TypeScript
  - Tailwind CSS 3
  - Monorepo with Turborepo

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 8.6.12

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm run dev
```

### Project Structure

```
apps/
  web/              # Next.js web application
    app/            # App router pages
    components/     # React components
    public/         # Static assets
packages/
  ui-components/    # Shared UI components library
```

## Contributing

Please read our [contributing guidelines](.github/copilot-instructions.md) before submitting any changes.

Key points:
- Follow accessibility best practices
- Test with screen readers
- Maintain keyboard navigation
- Document new features
- Keep the code clean and type-safe

## Packages

- `@hyperspace/web`: Main Next.js web application
- `@hyperspace/ui-components`: Shared UI component library

## License

MIT

### Build

```bash
pnpm run build
```

### Test

```bash
pnpm run test
```

## Project Structure

```
.
├── apps/
│   └── web/          # Next.js application
├── packages/
│   └── ui-components/ # Shared UI components
├── .github/
│   └── workflows/    # CI/CD pipelines
└── turbo.json        # Turborepo configuration
```

## Accessibility Features

- High contrast color schemes (#1176dc, #7dd3fc)
- Dyslexia-friendly fonts (Open Dyslexic)
- Text-to-speech functionality
- Accessible component library
- WCAG compliance

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT
