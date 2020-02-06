import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './Pages/Home';

export default function() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}
