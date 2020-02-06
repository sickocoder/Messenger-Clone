import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Container, RoundedImage } from './styles';

const data = [
  {
    id: 0,
    login: 'josetony'
  },
  {
    id: 1,
    login: 'josetony'
  },
  {
    id: 2,
    login: 'joaotony'
  },
  {
    id: 3,
    login: 'abeltony'
  },
  {
    id: 4,
    login: 'martinhojr'
  }
];

export default function Stories() {
  return (
    <Container>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16 }}
        data={data}
        keyExtractor={user => user.id}
        renderItem={({ item, index }) => {
          if (index === 0)
            return (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginRight: 16
                }}
              >
                <View style={styles.newStorie}>
                  <Entypo name="plus" size={32} />
                </View>
                <Text>My Storie</Text>
              </View>
            );
          return (
            <View
              key={item.id}
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: 16
              }}
            >
              <View
                style={{
                  borderColor: '#0099ff',
                  borderWidth: 3,
                  padding: 4,
                  borderRadius: 40,
                  marginBottom: 4
                }}
              >
                <RoundedImage
                  source={{
                    uri: 'https://avatars1.githubusercontent.com/u/46795234?v=4'
                  }}
                />
              </View>
              <Text>{item.login}</Text>
            </View>
          );
        }}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  newStorie: {
    width: 61,
    height: 60,
    marginBottom: 4,
    borderRadius: 32,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
