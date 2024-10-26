import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { View, Text, Image } from 'react-native';

 export default function EventListItem({event}) {
    return (
        <View className='p-8 gap-3'>
        <View className='flex-row'>
          <View className='flex-1 gap-2'>
            <Text className='text-lg font-semibold uppercase text-amber-800'>Wed 13, Sep . 19.30 CET</Text>
            <Text className='text-xl font-bold'>{event.title}</Text>
            <Text className='text-gray-800'>{event.location}</Text>
          </View>
           {/*Event image*/}
          <Image source={{ uri: event.image }} 
          className='aspect-video w-2/5 rounded-xl' />
  
        </View>
  
      {/*Event actions*/}
        <View className='flex-row gap-3'>
          <Text className='text-gray-800 mr-auto'>16 going</Text>
          <Entypo name="share-alternative" size={24} color="black" />
          <Feather name="bookmark" size={24} color="black" />
        </View>
        </View>
      
    );
}