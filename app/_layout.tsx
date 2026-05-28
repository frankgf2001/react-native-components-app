import 'react-native-reanimated';
import React from 'react';
import { ThemeChangerProvider } from '@/presentation/context/ThemeChangerContext';
import RootLayoutContent from './root-layout-content';

import "../global.css"

export default function RootLayout() {
  return (
    <ThemeChangerProvider>
      <RootLayoutContent/>
    </ThemeChangerProvider>
  );
}
