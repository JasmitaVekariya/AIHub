import React, { useState } from 'react';
import { ContactCard } from './contact-card';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12">
          <ContactCard
            title="Get in Touch"
            description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
            contactInfo={[
              {
                icon: Mail,
                label: 'Email',
                value: 'contact@aihub.com',
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
            {submitted ? (
              <div className="text-center py-4">
                <CheckCircle size={48} className="text-success mb-3" />
                <h4 className="text-primary mb-2">Message Sent!</h4>
                <p className="text-secondary mb-4">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
                <Button
                  variant="primary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-field">
                  <Label>Name</Label>
                  <Input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="contact-form-field">
                  <Label>Email</Label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="contact-form-field">
                  <Label>Phone</Label>
                  <Input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="contact-form-field">
                  <Label>Message</Label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows="4"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-100"
                >
                  <Send size={16} className="me-2" />
                  Submit
                </Button>
              </form>
            )}
          </ContactCard>
        </div>
      </div>
    </div>
  );
};

export default ContactDemo;
