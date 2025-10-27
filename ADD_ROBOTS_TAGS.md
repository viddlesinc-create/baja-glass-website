# Add Robots Meta Tags to Remaining Pages

Add this line to the `<Helmet>` section of each page, right after the description meta tag:

```jsx
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
```

## Pages that still need this tag:
- src/pages/Index.tsx
- src/pages/ShowerDoorsHub.tsx
- src/pages/FramelessShowerDoors.tsx
- src/pages/SemiFramelessShowerDoors.tsx
- src/pages/SlidingShowerDoors.tsx
- src/pages/HingedShowerDoors.tsx
- src/pages/CustomEnclosures.tsx
- src/pages/SteamShowerEnclosures.tsx
- src/pages/ShowerGlassRepair.tsx
- src/pages/GlassCompanyLasVegas.tsx
- src/pages/ResidentialGlassRepair.tsx
- src/pages/OfficeEnclosures.tsx
- src/pages/Gallery.tsx
- src/pages/AreasServed.tsx
- src/pages/About.tsx
- src/pages/Resources.tsx
- src/pages/Contact.tsx

## Next Steps:
1. Add robots tags to remaining pages
2. Update package.json build script to: `"build": "node scripts/build-ssr.js"`
3. Run `npm run build` to test
4. Deploy and verify with curl
