import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from "@/constants/Routes";
import { useThemeChangerContext } from "@/presentation/context/ThemeChangerContext";
import MenuItem from "@/presentation/menu/MenuItem";
import ThemedView from "@/presentation/shared/ThemedView";
import { View } from "react-native"

const ComponentsApp = () => {

    const { bgColor } = useThemeChangerContext();

    return (
        <ThemedView 
            margin
            bgColor={ bgColor }
        >
            {
                animationMenuRoutes.map((route, index) => (
                    <MenuItem 
                        key={ route.title }
                        title={ route.title }
                        icon={ route.icon }
                        name={ route.name }
                        isFirst={ index == 0 }
                        isLast={ index == animationMenuRoutes.length - 1 }
                    />
                ))
            }
            
            <View className="my-2"/>

            {
                uiMenuRoutes.map((route, index) => (
                    <MenuItem 
                        key={ route.title }
                        title={ route.title }
                        icon={ route.icon }
                        name={ route.name }
                        isFirst={ index == 0 }
                        isLast={ index == uiMenuRoutes.length - 1 }
                    />
                ))
            }

            <View className="my-2"/>

            {
                menuRoutes.map((route, index) => (
                    <MenuItem 
                        key={ route.title }
                        title={ route.title }
                        icon={ route.icon }
                        name={ route.name }
                        isFirst={ index == 0 }
                        isLast={ index == menuRoutes.length - 1 }
                    />
                ))
            }
        </ThemedView>
    )
};

export default ComponentsApp;