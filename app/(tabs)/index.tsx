import { Stack } from 'expo-router';
import { Text, View, Image, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';


import events from '../../assets/events.json';
import EventListItem from '~/components/EventListItem';
// const event = events[1];

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />

      <FlatList
        data={events}
        renderItem={({ item })=> <EventListItem event= {item} />}
        className='bg-white'
      />
      {/*
      <EventListItem event= {events[0]} /> // burda tek tek copy past etmek yerine FlastList kullanabiliriz.
      <EventListItem event= {events[1]} />
      <EventListItem event= {events[2]} />   */ }
  
    </>
  );
}

