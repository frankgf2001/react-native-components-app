import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { Link, router } from 'expo-router';
import { View, Text } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView className='px-5 justify-center items-center'>
      <Link asChild href='/modal/modal-window'>
        <ThemedText type='h1'>Ir al modal</ThemedText>
      </Link>

      <ThemedButton
        onPress={() => router.push('/modal/modal-window')}
        className='my-6'
      >
        Ir al Modal
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
