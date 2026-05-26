import { TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {
    className?: string;
}

const ThemedTextInput = ({className, ...res}: Props) => {
    return (
        <TextInput
            className={`py-4 px2 text-black dark:text-white`}
            placeholderTextColor="grey"
            {...res}
        />
    )
}

export default ThemedTextInput;