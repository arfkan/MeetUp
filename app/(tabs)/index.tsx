import { Stack } from 'expo-router';
import { Text, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';


import events from '../../assets/events.json';
import EventListItem from '~/components/EventListItem';
// const event = events[1];

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <EventListItem event= {events[0]} />
      <EventListItem event= {events[1]} />
      <EventListItem event= {events[2]} />
    
  
    </>
  );
}

