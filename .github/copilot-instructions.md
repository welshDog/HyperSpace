# HyperFocus Zone Development Guidelines

## Project Overview
HyperFocus Zone is a dyslexia-friendly web application focused on providing an accessible reading experience. The project uses Next.js, React, and TypeScript with a focus on accessibility features.

## Development Guidelines

### Accessibility Features
- Use the Lexend font for dyslexia-friendly text
- Implement proper ARIA labels and roles
- Ensure keyboard navigation works correctly
- Maintain high contrast ratios for text
- Test with screen readers
- Follow WCAG 2.1 guidelines

### Keyboard Shortcuts
When implementing new features, maintain consistency with existing shortcuts:
- 'T' - Toggle Text-to-Speech
- 'N' - Navigate to next section
- 'P' - Navigate to previous section
- 'H' - Help menu

### Code Style
- Use TypeScript for type safety
- Follow React best practices
- Keep components focused and reusable
- Document complex accessibility implementations
- Add ARIA labels and roles where needed
- Comment complex keyboard navigation logic

### Testing
- Test keyboard navigation thoroughly
- Verify screen reader compatibility
- Check contrast ratios meet WCAG standards
- Test Text-to-Speech functionality
- Ensure responsive design works at all breakpoints

### Performance
- Optimize font loading
- Minimize bundle size
- Use proper lazy loading
- Implement proper caching strategies
- Monitor Core Web Vitals

## Contributing
1. Ensure all code follows accessibility guidelines
2. Test changes with various assistive technologies
3. Document any new features or changes
4. Keep dependencies up to date
5. Follow semantic versioning
- Work through each checklist item systematically.
- Keep communication concise and focused.
- Follow development best practices.
