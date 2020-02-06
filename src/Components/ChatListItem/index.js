import React from 'react';
import { View, Text } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import { Container, LeftSection, RoundedImage } from './styles';

export default function ChatListItem({ data }) {
  return (
    <Container>
      <LeftSection>
        <View
          style={{
            borderColor: '#0099ff',
            borderWidth: 3,
            padding: 4,
            borderRadius: 40
          }}
        >
          <RoundedImage source={{ uri: data.avatar_url }} />
        </View>
        <View style={{ marginLeft: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 2 }}>
            {data.login}
          </Text>
          <Text style={{ color: 'rgba(0, 0, 0, .7)' }}>
            Eu: We! Fiz o meu clone do Messenger...
          </Text>
        </View>
      </LeftSection>
      <FontAwesome name="check-circle" size={18} color="rgba(0, 0, 0, 0.3)" />
    </Container>
  );
}
