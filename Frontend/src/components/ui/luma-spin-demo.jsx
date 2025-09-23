import React from 'react';
import { LumaSpin } from './luma-spin';

export default function LumaSpinDemo() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card bg-secondary border-primary">
            <div className="card-body text-center p-5">
              <h2 className="text-primary mb-4">Luma Spin Component Demo</h2>
              <p className="text-secondary mb-4">
                A beautiful animated loading spinner with dual rotating rings
              </p>
              
              {/* Default size */}
              <div className="mb-4">
                <h5 className="text-primary mb-3">Default Size (65px)</h5>
                <LumaSpin />
              </div>
              
              {/* Different sizes */}
              <div className="row mb-4">
                <div className="col-md-3 text-center">
                  <h6 className="text-primary mb-2">Small (40px)</h6>
                  <div className="luma-spin-sm">
                    <LumaSpin />
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <h6 className="text-primary mb-2">Default (65px)</h6>
                  <LumaSpin />
                </div>
                <div className="col-md-3 text-center">
                  <h6 className="text-primary mb-2">Large (80px)</h6>
                  <div className="luma-spin-lg">
                    <LumaSpin />
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <h6 className="text-primary mb-2">Extra Large (100px)</h6>
                  <div className="luma-spin-xl">
                    <LumaSpin />
                  </div>
                </div>
              </div>
              
              {/* Usage examples */}
              <div className="mt-5">
                <h5 className="text-primary mb-3">Usage Examples</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card bg-tertiary border-secondary mb-3">
                      <div className="card-body text-center">
                        <h6 className="text-primary">Loading State</h6>
                        <LumaSpin />
                        <p className="text-secondary small mt-2">Perfect for loading states</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card bg-tertiary border-secondary mb-3">
                      <div className="card-body text-center">
                        <h6 className="text-primary">Processing</h6>
                        <LumaSpin />
                        <p className="text-secondary small mt-2">Great for processing indicators</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Code example */}
              <div className="mt-4">
                <h6 className="text-primary mb-2">How to use:</h6>
                <pre className="bg-dark text-light p-3 rounded">
                  <code>{`import { LumaSpin } from './components/ui/luma-spin';

// Basic usage
<LumaSpin />

// With size variants
<div className="luma-spin-sm">
  <LumaSpin />
</div>`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
