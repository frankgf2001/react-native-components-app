import { DarkTheme, DefaultTheme, ThemeProvider, useTheme } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from "@/constants/Colors";

interface ThemeChangerContextType {
    currentTheme: 'light' | 'dark';
    isSystemTheme: boolean;
    bgColor: string;

    toggleTheme: (isDark: boolean) => void;
    setSystemTheme: (isSystem: boolean) => void;
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType);

// Custom Hook para acceder al ThemeChangerContext
export const useThemeChangerContext = () => {
    const themeChanger = useContext(ThemeChangerContext);
    return themeChanger;
}

// Provider
export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
    const { colorScheme, setColorScheme } = useColorScheme();

    const [isDarkMode, setIsDarkMode] = useState(colorScheme == 'dark')
    const [isSystemThemedEnabled, setIsSystemThemedEnabled] = useState(true);

    const currentTheme = (isSystemThemedEnabled) ? colorScheme : ((isDarkMode) ? 'dark' : 'light');

    const backgroundColor = isDarkMode
        ? Colors.dark.background
        : Colors.light.background


    useEffect(() => {
        AsyncStorage.getItem('selected-theme').then((theme) => {
            if(!theme) return;

            setIsDarkMode(theme == 'dark');
            setIsSystemThemedEnabled(theme == 'system');
            setColorScheme(theme as 'light' | 'dark' | 'system');
        });
    }, []);

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>          
            <ThemeChangerContext.Provider
                value={{
                    currentTheme: currentTheme ?? 'light',
                    isSystemTheme: isSystemThemedEnabled,
                    bgColor: backgroundColor,

                    toggleTheme: async(isDark) => {
                        setIsDarkMode(isDark);
                        setColorScheme( isDark ? 'dark' : 'light');
                        setIsSystemThemedEnabled(false);

                        //TODO: Guardar en Storage
                        await AsyncStorage.setItem('selected-theme', isDark ? 'dark' : 'light')
                    },

                    setSystemTheme: async(isSystem) => {
                        setIsSystemThemedEnabled(isSystem);
                        setColorScheme(isSystem ? 'system' : isDarkMode ? 'dark' : 'light');

                        await AsyncStorage.setItem('selected-theme', isSystem ? 'system' : isDarkMode ? 'dark' : 'light')
                    },
                }}
            >
                { children }
            </ThemeChangerContext.Provider>
        </ThemeProvider>
    )
}