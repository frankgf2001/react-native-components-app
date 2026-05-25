import { Pressable, PressableProps, Text, View } from "react-native";

interface Props extends PressableProps {
    className?: string;
    children: string 
}

const ThemedButton = ({
    className, 
    children, 
    ...res
}: Props) => {
    return (
        <Pressable
            className={`bg-light-primary dark:bg-drak-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
            {...res}
        >
            <Text className="text-white text-2xl">{children}</Text>
        </Pressable>
    )
}

export default ThemedButton;