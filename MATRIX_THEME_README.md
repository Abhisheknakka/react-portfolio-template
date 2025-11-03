# Matrix Theme Portfolio Template

A Matrix movie-inspired game-themed portfolio template with animated falling code, terminal-style UI, and cyberpunk aesthetics.

## Features

- 🎮 **Matrix Rain Animation** - Animated falling code characters in the background
- 💻 **Terminal UI** - Terminal-style header with macOS-style window controls
- 🎨 **Matrix Green Theme** - Classic Matrix green (#00ff41) color scheme
- ⚡ **Glitch Effects** - Hover animations and glitch effects on headings
- 🔤 **Terminal Font** - Share Tech Mono monospace font for authentic feel
- 🌟 **Neon Glow Effects** - Text shadows and glowing borders
- 📱 **Responsive Design** - Works on all screen sizes

## How to Use

### Option 1: Replace Current App
To use the Matrix theme as your main portfolio:

1. Backup your current `src/index.tsx`
2. Replace `src/index.tsx` with `src/MatrixIndex.tsx`
3. Or manually update `src/index.tsx` to import `MatrixApp` instead of `App`

### Option 2: Keep Both Versions
You can keep both versions and switch between them:

- Regular Portfolio: Uses `App.tsx` and `index.tsx`
- Matrix Theme: Uses `MatrixApp.tsx` and `MatrixIndex.tsx`

## Files Created

- `src/components/MatrixApp.tsx` - Main Matrix-themed app component
- `src/components/MatrixApp.scss` - Matrix app styles
- `src/components/MatrixBackground.tsx` - Falling code animation component
- `src/components/MatrixBackground.scss` - Background animation styles
- `src/assets/styles/MatrixTheme.scss` - Global Matrix theme styles
- `src/MatrixIndex.tsx` - Entry point for Matrix theme

## Customization

### Colors
Edit these variables in `MatrixTheme.scss`:
- `$matrix-green: #00ff41` - Main green color
- `$matrix-cyan: #00ffff` - Hover/accents color
- `$matrix-dark: #000000` - Background color

### Animation Speed
In `MatrixBackground.tsx`, change:
- `setInterval(draw, 35)` - Lower = faster animation
- `fontSize` - Size of falling characters

### Terminal Prompt
Edit the terminal prompt text in `MatrixApp.tsx`:
```tsx
<span className="prompt-user">user@matrix</span>
<span className="prompt-path">~/portfolio</span>
```

## Tips

- The Matrix background is subtle (15% opacity) so content remains readable
- All existing components work with the Matrix theme
- The theme maintains all functionality while adding visual effects
- You can toggle between dark/light mode (though Matrix theme is optimized for dark)

## Enjoy Your Matrix Portfolio! 🎮

