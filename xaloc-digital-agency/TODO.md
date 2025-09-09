# Responsive Refactor TODO List

## Hero Section (XalocHero.jsx)
- [x] Scale large text from text-3xl on mobile to text-6xl+ on desktop
- [x] Center text on mobile (text-center)
- [x] Ensure videos/images use w-full h-auto object-cover and not overflow
- [x] Replace fixed paddings with responsive ones (px-6 md:px-16, py-10 md:py-20)

## Services Section (Services.jsx)
- [x] Use flex-col on mobile, flex-row on desktop for layout
- [x] Ensure cards stack properly (w-full on mobile, w-1/2 or w-1/3 on larger screens)
- [x] Replace fixed paddings/margins with responsive ones (px-6 md:px-20, py-10 md:py-32)
- [x] Adjust text sizes responsively

## About Section (About.jsx)
- [ ] Use flex-col on mobile, flex-row on desktop for layout
- [ ] Ensure blocks stack properly (w-full on mobile, w-1/2 on larger screens)
- [ ] Replace fixed paddings/margins with responsive ones
- [ ] Adjust text sizes and grid layouts responsively

## Navigation (Header.jsx & Navigation.jsx)
- [ ] Add mobile-friendly hamburger menu (hidden md:flex for desktop, md:hidden for mobile)
- [ ] Ensure dropdown or sidebar menu appears when clicked on mobile
- [ ] Hide desktop nav on mobile and vice versa

## Portfolio Section (Portfolio.jsx)
- [ ] Grid should be 1 column on mobile, 2-3 columns on tablet/desktop
- [ ] Replace fixed paddings with responsive ones

## Footer (Footer.jsx)
- [ ] Centered layout on mobile, row layout on larger screens
- [ ] Adjust grid columns responsively

## Global Styles (globals.css or index.html)
- [ ] Add overflow-x-hidden to body to prevent sideways scrolling
- [ ] Ensure base styles support mobile-first approach

## Testing
- [ ] Test layouts at common breakpoints: 320px, 375px, 768px, 1024px, 1440px
- [ ] Verify typography, images, and animations adjust smoothly
