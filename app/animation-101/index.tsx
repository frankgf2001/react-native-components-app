import { useAnimation } from '@/hooks/useAnimation';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

const Animation101Screen = () => {

  const { 
    fadeIn, 
    fadeOut, 
    animatedOpacity, 
    animatedTop,
    startMovingTopPosition,
    startMovingBottomPosition 
  } = useAnimation()

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

      <ThemedButton className='my-5' onPress={() => {
        fadeIn({})
        startMovingTopPosition({
          initialPosition: -200
        })
      }}>
        Fade In 
      </ThemedButton>

      <ThemedButton className='my-5' onPress={() => {
        fadeOut({})
        startMovingBottomPosition({})
      }}>
        Fade Out 
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
