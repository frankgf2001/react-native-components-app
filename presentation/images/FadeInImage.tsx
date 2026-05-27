import { useAnimation } from "@/hooks/useAnimation";
import { useState } from "react";
import { ActivityIndicator, Animated, Image, ImageStyle, StyleProp, Text, View } from "react-native"

interface Props {
    uri: string;
    style: StyleProp<ImageStyle>
}


const FadeInImage = ({uri, style}: Props) => {

    const [isLoading, setIsLoading] = useState(true);

    const { animatedOpacity, fadeIn, startMovingTopPosition } = useAnimation()

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {
                isLoading && (
                    <ActivityIndicator 
                        style={{
                            position: 'absolute'
                        }}
                        color='gray'
                        size={35}
                    />
                )
            }
            <Animated.Image
                source={{uri}}
                style={[
                    style,
                    { 
                        opacity: animatedOpacity 
                    }
                ]}
                onLoadEnd={() => {
                    fadeIn({
                        duration: 5000
                    });
                    setIsLoading(false);
                }}
            />
        </View>
    )
}

export default FadeInImage;