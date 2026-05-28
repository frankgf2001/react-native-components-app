import { allRoutes } from "@/constants/Routes";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useThemeChangerContext } from "@/presentation/context/ThemeChangerContext";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";


const RootLayoutContent = () => {
    const bgColor = useThemeColor({}, 'background');

    return (
        <GestureHandlerRootView style = {{ backgroundColor: bgColor, flex: 1 }}>
            <Stack
                screenOptions={{
                    headerShadowVisible: false,
                    contentStyle: {
                        backgroundColor: bgColor
                    },
                    headerStyle: {
                        backgroundColor: bgColor
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
        </GestureHandlerRootView> 
    )
}

export default RootLayoutContent;