# Small Business Website Starter Manual

## Overview
This is a comprehensive Next.js starter template designed for small business websites. It includes all necessary components and features commonly needed for a professional business website.

## Key Features
- Modern, responsive design
- Dark/light mode support
- SEO-friendly structure
- Pre-built components using shadcn/ui
- Mobile-first approach
- Performance optimized

## Project Structure
```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # Reusable components
│   ├── ui/             # UI components from shadcn/ui
│   ├── navigation.tsx  # Main navigation
│   └── footer.tsx      # Footer component
└── lib/                # Utility functions
```

## Available Components
All components from shadcn/ui are available and styled:
- Button
- Card
- Dialog
- Dropdown Menu
- Form components
- Navigation Menu
- Toast notifications
- And many more...

## Customization

### Branding
1. Update the brand name in `navigation.tsx`
2. Modify the color scheme in `globals.css`
3. Update the metadata in `layout.tsx`

### Navigation
Modify the navigation items in `components/navigation.tsx`:
```typescript
const navigation = [
  { name: "Home", href: "/" },
  // Add your pages here
]
```

### Theme
The template uses Tailwind CSS for styling. Customize the theme in:
- `tailwind.config.ts` - For Tailwind configuration
- `globals.css` - For global styles and CSS variables

## Pages to Create
1. `/about` - Company information
2. `/services` - Service offerings
3. `/portfolio` - Work showcase
4. `/contact` - Contact form
5. `/blog` (optional) - Company blog

## Best Practices
1. Keep components small and focused
2. Use semantic HTML
3. Optimize images
4. Implement proper SEO
5. Maintain accessibility standards

## Deployment
1. Build the project: `npm run build`
2. Test the build: `npm run start`
3. Deploy to your preferred platform

## Support
For questions or issues:
1. Check the documentation
2. Review component examples
3. Contact support

Remember to regularly update dependencies and follow security best practices.