'use client';

import { Suspense } from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import { LocationProvider } from '@/contexts/LocationContext';
import LocationPermissionModal from '@/components/LocationPermissionModal';
import App from '@/App';

export default function Page() {
  return (
    <Suspense>
      <AuthProvider>
        <LocationProvider>
          <LocationPermissionModal />
          <App />
        </LocationProvider>
      </AuthProvider>
    </Suspense>
  );
}
