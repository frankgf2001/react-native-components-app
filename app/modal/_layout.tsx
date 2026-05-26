import { Stack } from 'expo-router';
import { Text, View } from "react-native";

const ModalLayout = () => {
    return(
        <Stack
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen
                name="modal-window"
                options={{
                    presentation: 'modal',
                }}
            />
        </Stack>
    )
} 

export default ModalLayout;