import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;
    
    const fadeIn = ({
        toValue = 1,
        duration = 300,
        useNativeDriver = true,
        easing = Easing.linear,
        callback = () => {}
    }) => {
        Animated.timing(animatedOpacity,{
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing
        }).start(callback);
    }

    const fadeOut = ({
        toValue = 0,
        duration = 300,
        useNativeDriver = true,
        easing = Easing.ease,
        callback = () => {}
    }) => {
        Animated.timing(animatedOpacity,{
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing
        }).start(callback);
    }

    const startMovingTopPosition = ({
        initialPosition = -100,
        toValue = 0,
        duration = 700,
        useNativeDriver = true,
        easing = Easing.bounce,
        callback = () => {}
    }) => {

        animatedTop.setValue(initialPosition);

        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing
        }).start(callback);
    }

    const startMovingBottomPosition = ({
        toValue = +200,
        duration = 700,
        useNativeDriver = true,
        easing = Easing.bounce,
        callback = () => {}
    }) => {
        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing
        }).start(callback);
    }

    return {
        animatedOpacity,
        animatedTop,

        //Metehods
        fadeIn,
        fadeOut,
        startMovingTopPosition,
        startMovingBottomPosition
    }
}

