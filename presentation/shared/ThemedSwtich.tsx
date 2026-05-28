import { Pressable, Switch, View } from "react-native";
import ThemedText from "./ThemedText";

interface Props {
    text?: string;
    value: boolean;
    className?: string;

    onValueChange: (value: boolean) => void
}

const ThemedSwitch = ({ text, value, className, onValueChange }:Props) => {
    return (
        <Pressable
            className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
            onPress={() => onValueChange(!value)}
        >
            {
                text ? <ThemedText type="h2">{text}</ThemedText> : <View/>
            }
            <Switch 
                value={value} 
                onValueChange={ onValueChange }
                thumbColor={ value ? '#069615' : '#79807a' }
                ios_backgroundColor={ value ? '#069615' : '#79807a'  }
                trackColor={{
                    false: '#575463',
                    true: '#88c190'
                }} 
            />
        </Pressable>
    )
}

export default ThemedSwitch;