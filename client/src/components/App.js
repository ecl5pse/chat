import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const SignUpPage = lazy(() => import('./pages/SignUpPage'));

function App () {
  return (
    <Suspense fallback={ <div>Loading...</div> }>
      <Route path={ '/sign_up' } component={ SignUpPage }/>
    </Suspense>
  );
}

export default App;
