import React from 'react';
import { FeatureSteps } from './feature-section';
import { BackgroundPaths } from '../BackgroundPaths';

const features = [
  { 
    step: 'Step 1', 
    title: 'Learn the Basics',
    content: 'Start your Web3 journey by learning the basics of blockchain technology and decentralized systems.', 
    image: 'https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    step: 'Step 2',
    title: 'Deep Dive',
    content: 'Dive deep into blockchain fundamentals and smart contract development with hands-on projects.',
    image: 'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 3',
    title: 'Build Projects',
    content: 'Graduate with hands-on Web3 experience through building decentralized applications and protocols.',
    image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
  },
];

export function FeatureStepsDemo() {
  return (
    <BackgroundPaths>
      <div className="min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary mb-3">Feature Section Demo</h1>
            <p className="lead text-muted">Interactive step-by-step guide with animated transitions</p>
          </div>
          
          <FeatureSteps 
            features={features}
            title="Your Journey Starts Here"
            autoPlayInterval={4000}
            imageHeight="h-500px"
          />
        </div>
      </div>
    </BackgroundPaths>
  );
}
