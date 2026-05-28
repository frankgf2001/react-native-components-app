import { DarkTheme, DefaultTheme, ThemeProvider, useTheme } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import { createContext, PropsWithChildren, useContext, useState } from "react";

interface ThemeChangerContextType {
    currentTheme: 'light' | 'dark';
    isSystemTheme: boolean;

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

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>          
            <ThemeChangerContext.Provider
                value={{
                    currentTheme: currentTheme ?? 'light',
                    isSystemTheme: isSystemThemedEnabled,

                    toggleTheme: async(isDark) => {
                        setIsDarkMode(isDark);
                        setColorScheme( isDark ? 'dark' : 'light');
                        setIsSystemThemedEnabled(false);

                        //TODO: Guardar en Storage
                    },

                    setSystemTheme: async(isSystem) => {
                        setIsSystemThemedEnabled(isSystem);
                        setColorScheme(isSystem ? 'system' : isDarkMode ? 'dark' : 'light');
                    },
                }}
            >
                { children }
            </ThemeChangerContext.Provider>
        </ThemeProvider>
    )
}