import { Href, router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import ThemedText from "../shared/ThemedText";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from '@expo/vector-icons'

interface Props {
    title: string;
    icon: keyof typeof Ionicons.glyphMap;
    name: string;

    isFirst?: boolean;
    isLast?: boolean;
}

const MenuItem = ({
    title, 
    icon, 
    name, 
    isFirst = false, 
    isLast = false
}:Props) => {

    const [routerName] = name.split('/')
    const primaryColor = useThemeColor({}, 'text')

    return (
        <Pressable 
            onPress={() => router.push(routerName as Href)}
            className="bg-white dark:bg-black/90 px-5 py-2"
            style={{
                ...(isFirst && {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    paddingTop: 10
                }),
                ...(isLast && {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingBottom: 10
                })
            }}
        >
            <View className="flex-row items-center">
                <Ionicons name={icon} size={30} color={primaryColor} className="mr-5"></Ionicons>
                <ThemedText type="h2">{title}</ThemedText>
            </View>
        </Pressable>
    )
}

export default MenuItem;