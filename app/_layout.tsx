import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { useThemeColor } from '@/hooks/use-theme-color';
import { Stack } from 'expo-router';
import { allRoutes } from '@/constants/Routes';

import "../global.css"
import { ThemeChangerProvider } from '@/presentation/context/ThemeChangerContext';

export default function RootLayout() {
  
  const backgroundColor = useThemeColor({}, 'background')
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style = {{ backgroundColor: backgroundColor, flex: 1 }}>
      {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
      <ThemeChangerProvider>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor
            },
            headerStyle: {
              backgroundColor: backgroundColor
            }
          }}
        >
          <Stack.Screen 
            name='index'
            options={{
              title: ''
            }}
          />

          {
            allRoutes.map(route => (
              <Stack.Screen
                key={ route.name }
                name={ route.name }
                options={{
                  title: route.title,
                  headerShown: !route.title.includes('Slides')
                }}
              />
            ))
          }
        </Stack>
      </ThemeChangerProvider>
      {/* </ThemeProvider> */}
    </GestureHandlerRootView> 

  );
}
