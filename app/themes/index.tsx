import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwtich';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { useThemeChangerContext } from '@/presentation/context/ThemeChangerContext';

const ThemesScreen = () => {

  const { toggleTheme, currentTheme, isSystemTheme, setSystemTheme } = useThemeChangerContext();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme == 'dark',
    systemdMode: isSystemTheme
  })

  const setDarkMode = (value: boolean) => {
    toggleTheme(value);

    setDarkModeSettings({
      darkMode: value,
      systemdMode: false
    })
  }
  
  const setSystemMode = (value: boolean) => {
    setSystemTheme(value);

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
