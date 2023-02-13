import React, { Suspense } from 'react';

import { Layout } from '../layout/Layout';
import { ErrorBoundary } from '../error-boudary/ErrorBoundary';
import './App.css';

function App() {

  return (
    <>
      <div className="app">
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary>
            <Layout />
          </ErrorBoundary>
        </Suspense>
      </div>
      <div>
      
      </div>
    </>
  );
}

export default App;
