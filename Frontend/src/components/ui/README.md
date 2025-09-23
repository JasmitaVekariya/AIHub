# LumaSpin Component

A beautiful animated loading spinner with dual rotating rings, adapted for JavaScript/Bootstrap projects.

## Features

- 🎨 **Beautiful Animation**: Dual rotating rings with smooth transitions
- 🌙 **Dark Theme Support**: Automatically adapts to your app's dark theme
- 📱 **Responsive**: Works perfectly on all screen sizes
- 🎯 **Size Variants**: Multiple size options (sm, md, lg, xl)
- ⚡ **Lightweight**: Pure CSS animations, no external dependencies
- 🔧 **Easy Integration**: Simple import and use

## Installation

The component is already integrated into your project. No additional dependencies required.

## Usage

### Basic Usage

```jsx
import { LumaSpin } from './components/ui/luma-spin';

function MyComponent() {
  return (
    <div>
      <LumaSpin />
    </div>
  );
}
```

### Size Variants

```jsx
// Small (40px)
<div className="luma-spin-sm">
  <LumaSpin />
</div>

// Default (65px)
<LumaSpin />

// Large (80px)
<div className="luma-spin-lg">
  <LumaSpin />
</div>

// Extra Large (100px)
<div className="luma-spin-xl">
  <LumaSpin />
</div>
```

### Integration with LoadingSpinner

```jsx
import LoadingSpinner from './components/LoadingSpinner';

// Use LumaSpin variant
<LoadingSpinner variant="luma" size="lg" text="Loading..." />

// Use default Bootstrap spinner
<LoadingSpinner variant="bootstrap" size="md" text="Loading..." />
```

### Integration with ChatInterface

```jsx
import ChatInterface from './components/ChatInterface';

// Use LumaSpin in send button
<ChatInterface 
  session={session}
  onClose={onClose}
  onDelete={onDelete}
  useLumaSpinner={true}
/>
```

## Styling

The component automatically adapts to your app's theme:

- **Light Theme**: Uses gray colors (`#374151`)
- **Dark Theme**: Uses light colors (`#f3f4f6`)
- **Bootstrap Dark**: Automatically detects Bootstrap dark theme classes

### Custom Styling

You can override the colors by targeting the CSS classes:

```css
.luma-spin-ring-1,
.luma-spin-ring-2 {
  box-shadow: inset 0 0 0 3px #your-color !important;
}
```

## Animation Details

- **Duration**: 2.5 seconds per cycle
- **Easing**: Linear for smooth continuous motion
- **Delay**: Second ring has -1.25s delay for offset effect
- **Keyframes**: 8-step animation creating smooth ring rotation

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Demo

Visit `/luma-demo` in your app to see the component in action with all size variants and usage examples.

## Files

- `luma-spin.jsx` - Main component
- `luma-spin.css` - Styles and animations
- `luma-spin-demo.jsx` - Demo component
- `README.md` - This documentation

## Integration Examples

### 1. Loading States

```jsx
function DataComponent() {
  const [loading, setLoading] = useState(true);
  
  if (loading) {
    return (
      <div className="text-center p-4">
        <LumaSpin />
        <p className="mt-2">Loading data...</p>
      </div>
    );
  }
  
  return <div>Your content here</div>;
}
```

### 2. Button Loading States

```jsx
function SubmitButton({ loading, onClick }) {
  return (
    <button 
      className="btn btn-primary" 
      disabled={loading}
      onClick={onClick}
    >
      {loading ? (
        <div className="luma-spin-sm">
          <LumaSpin />
        </div>
      ) : (
        'Submit'
      )}
    </button>
  );
}
```

### 3. Full Page Loading

```jsx
function App() {
  const [appLoading, setAppLoading] = useState(true);
  
  if (appLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center">
          <LumaSpin />
          <h4 className="mt-3">Loading AIHub...</h4>
        </div>
      </div>
    );
  }
  
  return <YourAppContent />;
}
```

## Performance

- **CSS-only animations**: No JavaScript animation loops
- **Hardware accelerated**: Uses transform properties
- **Minimal DOM**: Only 2 span elements
- **Small footprint**: ~2KB CSS + minimal JS

## Accessibility

- **Screen reader friendly**: No text content to announce
- **Reduced motion support**: Respects `prefers-reduced-motion`
- **High contrast**: Works with high contrast themes

## Troubleshooting

### Animation not showing
- Ensure `luma-spin.css` is imported
- Check that the container has proper dimensions
- Verify no CSS conflicts with `inset` property

### Colors not adapting
- Check if your app uses Bootstrap dark theme classes
- Verify CSS custom properties are available
- Override colors manually if needed

### Performance issues
- Ensure hardware acceleration is enabled
- Check for CSS conflicts
- Verify no JavaScript animation loops are running
