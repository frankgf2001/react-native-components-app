import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { View, Text, Animated } from 'react-native';

const Animation101Screen = () => {

  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const fade = (isShow: boolean) => {
    const anitamed = Animated.timing(animatedOpacity,{
      toValue: isShow ? 1 : 0,
      duration: 300,
      useNativeDriver: true
    });

    anitamed.start()
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
          opacity: animatedOpacity
        }}
      />

      <ThemedButton className='my-5' onPress={() => fade(true)}>
        Fade In 
      </ThemedButton>

      <ThemedButton className='my-5' onPress={() => fade(false)}>
        Fade Out 
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
