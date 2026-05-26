import { useThemeColor } from '@/hooks/use-theme-color';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';

const PullToRefreshScreen = () => {

  const [isRefreshing, setIsRefreshing] = useState(false);

  const backgroundColor = useThemeColor({dark:'white', light: 'black'}, 'background')

  const onRefresh = async() => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl 
          refreshing={isRefreshing} 
          onRefresh={ onRefresh }
          colors={['red', 'orange', 'green']}
          progressBackgroundColor={backgroundColor}
        />
      }
    >
      <ThemedView margin>
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
