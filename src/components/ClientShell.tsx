'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import { LocationProvider } from '@/contexts/LocationContext';
import LocationPermissionModal from '@/components/LocationPermissionModal';
import App from '@/App';

export default function ClientShell() {
  return (
    <AuthProvider>
      <LocationProvider>
        <LocationPermissionModal />
        <App />
      </LocationProvider>
    </AuthProvider>
  );
}
