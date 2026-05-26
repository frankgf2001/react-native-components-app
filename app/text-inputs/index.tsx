import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';

const TextInputsScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  return (
    <KeyboardAvoidingView
      behavior='height'
    >
      <ScrollView>
        <ThemedView margin>
          <View className='mb-5'>
            <ThemedCard>
              <ThemedTextInput
                placeholder='Nombre completo'
                autoCapitalize={'words'}
                autoCorrect={false}
                onChangeText={(text) => setForm({...form, name: text})}
              />
            </ThemedCard>
            
            <ThemedCard className='my-4'>
              <ThemedTextInput
                placeholder='Correo electrónico'
                autoCorrect={false}
                keyboardType='email-address'
                onChangeText={(text) => setForm({...form, email: text})}
                className='my-5'
              />
            </ThemedCard>

            <ThemedCard>
              <ThemedTextInput
                placeholder='Teléfono'
                autoCorrect={false}
                keyboardType='phone-pad'
                onChangeText={(text) => setForm({...form, phone: text})}
              />
            </ThemedCard>
          </View>

          <ThemedCard className='my-3'>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          
          <ThemedCard className='my-3'>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          
          <ThemedCard className='my-3'>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          
          <ThemedCard className='my-3'>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          
          <ThemedCard className='my-3'>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
        
          <ThemedCard>
            <ThemedTextInput
              placeholder='Teléfono'
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={(text) => setForm({...form, phone: text})}
            />
          </ThemedCard>

          <View style={{ marginBottom: 100 }}/>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
