# Synos Landing Page

A modern, responsive landing page built with Next.js and shadcn/ui components. Dark mode by default, mobile-first approach.

## 🎨 Color System

We've got a custom color system set up in `styles/globals.css` that you can use throughout the project:

### Title Colors
```css
.text-title-primary    /* #8F8F8F - for primary title text */
.text-title-secondary  /* #E9E9E9 - for secondary title text */
```

### Highlight Color
```css
.text-highlight        /* #FF7300 - for highlight text */
.bg-highlight          /* #FF7300 - for highlight backgrounds */
.border-highlight      /* #FF7300 - for highlight borders */
```

### Button Styles
```css
.btn-highlight         /* Orange bg (#FF7300) + white text, fully rounded */
.btn-white            /* White bg + black text, fully rounded */
```

## 📱 Responsive Design

Everything's mobile-first with proper breakpoints:
- **Mobile:** < 640px (default)
- **Small:** 640px+ (`sm:`)
- **Medium:** 768px+ (`md:`)
- **Large:** 1024px+ (`lg:`)

## 🏗️ Component Structure

```
components/
├── layout/
│   ├── Header.jsx     # Navigation + mobile menu
│   ├── Footer.jsx     # Footer with links
│   └── Layout.jsx     # Main wrapper
└── sections/
    ├── Hero.jsx       # Main hero section
    ├── Media.jsx      # Media logos scroller
    ├── Quote.jsx      # Testimonials
    ├── Feature1.jsx   # Left content, right image
    ├── Feature2.jsx   # 2x2 feature grid
    └── Feature3.jsx   # Right content, left image
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:3000` (or 3001 if 3000 is taken).

## 💡 Usage Examples

### Split Titles
```jsx
<h2 className="text-2xl font-bold">
  <span className="text-title-primary">Build at the Speed of</span>
  <span className="text-title-secondary block">Thought</span>
</h2>
```

### Highlight Buttons
```jsx
<Button className="btn-highlight hover:bg-highlight/90">
  Get Started
</Button>
```

### White Buttons
```jsx
<Button className="btn-white hover:bg-gray-50">
  Learn More
</Button>
```

## 🎯 Key Features

- **Dark mode by default** - Set in `_app.js`
- **Mobile-first responsive** - Works on all screen sizes
- **Custom scrollbar hiding** - For the media section scroller
- **Smooth animations** - Hover effects and transitions
- **Accessible** - Proper semantic HTML and ARIA labels

## 📝 Notes

- All components use `.jsx` extension (not TypeScript)
- shadcn/ui components are used throughout
- Custom CSS classes are defined in `globals.css`
- The color system is consistent across all components

## 🔧 Customization

Want to change colors? Update the CSS variables in `styles/globals.css`:

```css
:root {
  --title-primary: #8F8F8F;
  --title-secondary: #E9E9E9;
  --highlight: #FF7300;
}
```

That's it! The landing page should be good to go. 🎉
