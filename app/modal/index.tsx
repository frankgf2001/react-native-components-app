import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView className='justify-center items-center'>
      <Link asChild href='/modal/modal-window'>
        <ThemedText>Ir al modal</ThemedText>
      </Link>
    </ThemedView>
  );
};
export default ModalScreen;
