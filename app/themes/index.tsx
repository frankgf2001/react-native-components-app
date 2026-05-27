import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwtich';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text } from 'react-native';

import { useColorScheme } from "nativewind";

const ThemesScreen = () => {

  const { colorScheme, setColorScheme } = useColorScheme();
  // const theme = useColorScheme();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: colorScheme == 'dark',
    systemdMode: false
  })

  const setDarkMode = (value: boolean) => {
    setColorScheme(value ? 'dark' : 'light')

    setDarkModeSettings({
      darkMode: value,
      systemdMode: false
    })
  }
  
  const setSystemMode = (value: boolean) => {
    setColorScheme(value ? 'system' : (colorScheme == 'dark' ? 'dark' : 'light')  )

    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemdMode: value
    })
  }

  return (
    <ThemedView>
      <ThemedCard>
        <ThemedSwitch 
          text='Dark mode'
          className='mb-5'
          value={ darkModeSettings.darkMode }
          onValueChange={ setDarkMode }
        />

        <ThemedSwitch 
          text='System mode'
          className='mb-5'
          value={ darkModeSettings.systemdMode }
          onValueChange={ setSystemMode }
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
