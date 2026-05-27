import { useThemeColor } from '@/hooks/use-theme-color';
import FadeInImage from '@/presentation/images/FadeInImage';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const [isLoading, setIsLoading] = useState(false);
  const primaryColor = useThemeColor({}, 'text')


  const loadMore = async() => {
    setIsLoading(true)
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
      setIsLoading(false)
    }, 3000)
  }
  
  return (
    <ThemedView>
      <FlatList
        data={numbers}
        renderItem={({ item }) => (
          <ListItem number={ item }/>
        )}
        keyExtractor={(item) => item.toString()}
        onEndReached={ loadMore }
        onEndReachedThreshold={ 0.6 }
        ListFooterComponent={() => (
          isLoading && <View style={{ height: 150, justifyContent: 'center' }}>
            <ActivityIndicator size={40} color={primaryColor}/>
          </View>
        )}
      />
    </ThemedView>
  );
};

export default InfiniteScrollScreen;


interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return(
    <FadeInImage
      uri={ `https://picsum.photos/id/${number}/500/400` }
      style = {{
        height: 400,
        width: '100%'
      }}
    />

    // <Image
    //   source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
    //   style = {{
    //     height: 400,
    //     width: '100%'
    //   }}
    // />
  )
}