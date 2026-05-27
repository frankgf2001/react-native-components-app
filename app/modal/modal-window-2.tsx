import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { router } from "expo-router";
import { StatusBar } from 'expo-status-bar'
import { Platform } from "react-native";


const ModalWindow2 = () => {
    return (
        <ThemedView
            className="justify-center items-center flex-1"
            bgColor="#A45213"
        >
            <ThemedText>Gracias por usar Modal</ThemedText>

            <ThemedButton 
                onPress={() => router.dismissAll()}
                className="my-5"
            >
                Cerrar modal
            </ThemedButton>


            <StatusBar style={ Platform.OS == 'ios' ? 'light' : 'auto' }/>
        </ThemedView>
    )
}

export default ModalWindow2;