import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { View, Text } from 'react-native';

const Animation101Screen = () => {
  return (
    <ThemedView margin> 
      <ThemedText className='mb-5'>Animation101Screen</ThemedText>
      <ThemedButton className='mb-5' onPress={() => console.log("Estamos en Fade In")}>
        Fade In 
      </ThemedButton>

      <ThemedButton className='mb-5' onPress={() => console.log("Estamos en Fade Out")}>
        Fade Out 
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
