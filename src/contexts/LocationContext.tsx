'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface LocationContextType {
  coords: { lat: number; lng: number } | null;
  permission: 'granted' | 'prompt' | 'denied';
  requestLocation: () => Promise<void>;
}

const LocationContext = createContext<LocationContextType>({
  coords: null,
  permission: 'prompt',
  requestLocation: async () => {},
});

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [permission, setPermission] = useState<'granted' | 'prompt' | 'denied'>('prompt');

  const requestLocation = async () => {
    if ('geolocation' in navigator) {
      try {
        const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setPermission('granted');
      } catch {
        setPermission('denied');
      }
    }
  };

  return (
    <LocationContext.Provider value={{ coords, permission, requestLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
