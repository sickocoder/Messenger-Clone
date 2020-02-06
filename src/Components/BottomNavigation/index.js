import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { Container, BottomNavigationItem } from './styles';

export default function BottomNavigation() {
  return (
    <Container>
      <BottomNavigationItem>
        <Feather name="message-circle" size={24} />
        <Text style={styles.itemText}>Chats</Text>
      </BottomNavigationItem>
      <BottomNavigationItem>
        <Feather name="user" size={24} />
        <Text style={styles.itemText}>People</Text>
      </BottomNavigationItem>
    </Container>
  );
}

const styles = StyleSheet.create({
  itemText: { fontSize: 12, marginTop: 3 }
});
