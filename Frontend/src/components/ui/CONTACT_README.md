# Contact Card Component - Enhanced Contact System

A beautiful, modern contact card component adapted for JavaScript/Bootstrap with dark theme support and professional styling.

## 🎨 Features

- **🌙 Dark Theme**: Beautiful dark UI with gradient backgrounds and glass-morphism effects
- **📱 Responsive Design**: Works perfectly on desktop and mobile devices
- **✨ Decorative Elements**: Plus icons in corners for visual appeal
- **📋 Contact Information**: Display multiple contact methods with icons
- **📝 Contact Form**: Integrated form with validation and submission handling
- **🎯 Professional Layout**: Two-column layout with information and form sections
- **♿ Accessibility**: Full keyboard navigation and screen reader support
- **🎨 Customizable**: Easy to customize colors, content, and styling

## 📁 File Structure

```
src/components/ui/
├── contact-card.jsx          # Main contact card component
├── contact-card.css          # Dark theme styles and layout
├── button.jsx               # Button component
├── button.css               # Button styles
├── input.jsx                # Input component
├── input.css                # Input styles
├── label.jsx                # Label component
├── label.css                # Label styles
├── textarea.jsx             # Textarea component
├── textarea.css             # Textarea styles
├── contact-demo.jsx         # Demo component for testing
└── CONTACT_README.md        # This documentation
```

## 🚀 Usage

### Basic Implementation

```jsx
import { ContactCard } from './components/ui/contact-card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <ContactCard
      title="Get in Touch"
      description="Contact us for any questions or support."
      contactInfo={[
        {
          icon: Mail,
          label: 'Email',
          value: 'contact@example.com',
        },
        {
          icon: Phone,
          label: 'Phone',
          value: '+1 (555) 123-4567',
        },
        {
          icon: MapPin,
          label: 'Address',
          value: 'San Francisco, CA',
        }
      ]}
    >
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form-field">
          <Label>Name</Label>
          <Input type="text" name="name" required />
        </div>
        <div className="contact-form-field">
          <Label>Email</Label>
          <Input type="email" name="email" required />
        </div>
        <div className="contact-form-field">
          <Label>Message</Label>
          <Textarea name="message" rows="4" required />
        </div>
        <Button type="submit" variant="primary" className="w-100">
          Submit
        </Button>
      </form>
    </ContactCard>
  );
}
```

### With Form State Management

```jsx
import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <ContactCard
      title="Contact Us"
      description="We'd love to hear from you."
      contactInfo={contactInfo}
    >
      {submitted ? (
        <div className="text-center py-4">
          <CheckCircle size={48} className="text-success mb-3" />
          <h4 className="text-primary mb-2">Message Sent!</h4>
          <p className="text-secondary mb-4">
            Thank you for contacting us. We'll get back to you soon.
          </p>
          <Button variant="primary" onClick={() => setSubmitted(false)}>
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          {/* Form fields */}
        </form>
      )}
    </ContactCard>
  );
}
```

## 🎛️ Component Props

### ContactCard Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Contact With Us'` | Main title of the contact card |
| `description` | `string` | `'If you have any questions...'` | Description text |
| `contactInfo` | `array` | `[]` | Array of contact information objects |
| `className` | `string` | `''` | Additional CSS classes |
| `formSectionClassName` | `string` | `''` | Additional CSS classes for form section |
| `children` | `ReactNode` | - | Form content to display in the form section |

### ContactInfo Object Structure

```jsx
{
  icon: LucideIcon,    // Icon component from lucide-react
  label: string,       // Label for the contact method
  value: string,       // Contact value (email, phone, address)
  className?: string   // Optional additional CSS classes
}
```

## 🎨 Styling & Theming

### CSS Variables Used

The component uses your existing CSS variables for consistent theming:

```css
:root {
  --bg-primary: #0f0f0f;
  --bg-secondary: #1a1a1a;
  --bg-tertiary: #262626;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --text-muted: #666666;
  --accent-color: #3b82f6;
  --accent-color-hover: #2563eb;
  --accent-color-rgb: 59, 130, 246;
  --border-color: rgba(255, 255, 255, 0.1);
}
```

### Custom Styling

You can override styles by targeting the component classes:

```css
/* Custom contact card styling */
.contact-card {
  background: your-custom-gradient;
  border-radius: 20px;
}

/* Custom form styling */
.contact-form-field {
  margin-bottom: 1.5rem;
}

/* Custom button styling */
.btn-primary {
  background: your-custom-color;
}
```

## 🔧 Form Components

### Button Component

```jsx
<Button 
  variant="primary"     // default, destructive, outline, secondary, ghost, link
  size="default"        // default, sm, lg, icon
  className="custom-class"
  disabled={false}
>
  Button Text
</Button>
```

### Input Component

```jsx
<Input 
  type="text"           // text, email, tel, password, etc.
  name="fieldName"
  placeholder="Enter text"
  required={true}
  className="custom-class"
/>
```

### Label Component

```jsx
<Label htmlFor="inputId" className="custom-class">
  Label Text
</Label>
```

### Textarea Component

```jsx
<Textarea 
  name="message"
  rows="4"
  placeholder="Enter message"
  required={true}
  className="custom-class"
/>
```

## 📱 Responsive Behavior

### Desktop (1024px+)
- Two-column layout (contact info + form)
- Large decorative plus icons
- Full contact information display
- Side-by-side content

### Tablet (768px - 1023px)
- Two-column layout maintained
- Medium-sized elements
- Optimized spacing

### Mobile (< 768px)
- Single column layout
- Stacked content (info above form)
- Smaller decorative elements
- Touch-optimized form elements

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all form elements
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators and logical tab order
- **High Contrast**: Support for high contrast mode
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Color Contrast**: WCAG compliant color ratios

## 🔒 Form Validation

### Built-in Validation

- **Required Fields**: HTML5 required attribute validation
- **Email Format**: Automatic email format validation
- **Input Types**: Proper input types for different data
- **Error Handling**: Graceful error display and management

### Custom Validation

```jsx
const [errors, setErrors] = useState({});

const validateForm = (data) => {
  const newErrors = {};
  
  if (!data.name.trim()) {
    newErrors.name = 'Name is required';
  }
  
  if (!data.email.trim()) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    newErrors.email = 'Email is invalid';
  }
  
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
```

## 🎯 Integration Examples

### With React Router

```jsx
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  const navigate = useNavigate();
  
  const handleSubmit = async (formData) => {
    try {
      await submitContactForm(formData);
      navigate('/thank-you');
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return <ContactCard>{/* form content */}</ContactCard>;
}
```

### With API Integration

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSubmitted(true);
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### With State Management

```jsx
import { useDispatch } from 'react-redux';

function ContactPage() {
  const dispatch = useDispatch();
  
  const handleSubmit = (formData) => {
    dispatch(submitContactForm(formData));
  };

  return <ContactCard>{/* form content */}</ContactCard>;
}
```

## 🐛 Troubleshooting

### Common Issues

**Form not submitting:**
- Check that form has proper `onSubmit` handler
- Verify all required fields are filled
- Check browser console for JavaScript errors

**Styling issues:**
- Ensure all CSS files are imported
- Check CSS variables are defined
- Verify no conflicting styles

**Responsive issues:**
- Test on different screen sizes
- Check CSS media queries
- Verify Bootstrap classes are working

**Icons not displaying:**
- Ensure lucide-react is installed
- Check icon imports are correct
- Verify icon components are properly passed

### Debug Mode

Enable debug logging:

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form data:', formData);
  console.log('Form validation:', validateForm(formData));
  // Process form...
};
```

## 🚀 Performance

- **Optimized Rendering**: Efficient React components with minimal re-renders
- **CSS-only Animations**: Hardware-accelerated animations for smooth performance
- **Lazy Loading**: Form validation and submission handled efficiently
- **Bundle Size**: Lightweight implementation with minimal dependencies
- **Memory Efficient**: Proper cleanup of event listeners and state

## 🔄 Migration from Old Contact Forms

If migrating from existing contact forms:

1. **Replace form structure** with ContactCard component
2. **Update form handlers** to match new data structure
3. **Test form validation** thoroughly
4. **Update any custom styling** to use new classes
5. **Verify accessibility** features work correctly

## 📚 Demo & Testing

- **Demo Page**: `/contact-demo` - See the component in action
- **Support Page**: `/support` - Integrated with your support system
- **Form Testing**: Try form submission and validation
- **Responsive Testing**: Test on different screen sizes
- **Accessibility Testing**: Use keyboard navigation and screen readers

## 🎉 Conclusion

The Contact Card component provides a modern, accessible, and beautiful contact experience that integrates seamlessly with your existing AIHub application. It maintains your dark theme while adding sophisticated styling and improved user experience.

The component is production-ready and includes all the features you need for a professional contact system, including form validation, responsive design, and accessibility support.
