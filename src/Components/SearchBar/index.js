import React from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

// import { Container } from './styles';

export default function SearchBar() {
  return (
    <View
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        marginHorizontal: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 40,
        flexDirection: 'row'
      }}
    >
      <Feather
        name="search"
        size={20}
        style={{ marginRight: 10 }}
        color="rgba(0, 0, 0, 0.6)"
      />
      <TextInput
        placeholder="Pesquisar"
        style={{ fontSize: 18 }}
        placeholderTextColor="rgba(0, 0, 0, 0.6)"
      />
    </View>
  );
}
