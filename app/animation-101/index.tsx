import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

const Animation101Screen = () => {

  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(animatedOpacity,{
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start();

    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      //easing: Easing.elastic(3)
      easing: Easing.bounce
    }).start();
  }

  const fadeOut = () => {
    Animated.timing(animatedOpacity,{
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start();

    Animated.timing(animatedTop, {
      toValue: +100,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.bounce
    }).start(() => animatedTop.resetAnimation());
  }

  return (
    <ThemedView
      className='flex-1 justify-center items-center' 
      margin
    > 
      
      <Animated.View 
        className='bg-light-secondary dark:bg-light-secondary rounded-xl'
        style = {{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [
            {
              translateY: animatedTop
            }
          ]
        }}
      />

      <ThemedButton className='my-5' onPress={fadeIn}>
        Fade In 
      </ThemedButton>

      <ThemedButton className='my-5' onPress={fadeOut}>
        Fade Out 
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
