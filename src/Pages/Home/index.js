import React, { useState, useEffect } from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { StyleSheet, View, FlatList, StatusBar } from 'react-native';

import axios from 'axios';

import {
  Container,
  PageHeader,
  PageHeaderTitle,
  PageTitle,
  RoundedImage
} from './styles';

import ChatListItem from '../../Components/ChatListItem';
import SearchBar from '../../Components/SearchBar';
import Stories from '../../Components/Stories';
import BottomNavigation from '../../Components/BottomNavigation';

export default function Home() {
  const insets = useSafeArea();

  const [data, setData] = useState([
    {
      id: 1000
    },
    {
      id: 1001
    }
  ]);

  useEffect(() => {
    (async () => {
      const response = await axios.get('https://api.github.com/users');
      if (response.data) setData([data, ...response.data]);
    })();
  }, [data]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container
        style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      >
        <PageHeader>
          <PageHeaderTitle>
            <RoundedImage
              style={{ marginRight: 10 }}
              source={{
                uri: 'https://avatars1.githubusercontent.com/u/46795234?v=4'
              }}
            />
            <PageTitle>Chats</PageTitle>
          </PageHeaderTitle>
          <PageHeaderTitle>
            <View style={styles.headerIcon}>
              <FontAwesome name="camera" size={20} />
            </View>
            <View style={styles.headerIcon}>
              <Feather name="edit-2" size={20} />
            </View>
          </PageHeaderTitle>
        </PageHeader>
        <FlatList
          // contentContainerStyle={{ paddingHorizontal: 16 }}
          data={data}
          keyExtractor={user => user.id}
          renderItem={({ item, index }) => {
            if (index === 0) return <SearchBar key={'item' + item.id} />;
            if (index === 1) return <Stories key={'item' + item.id} />;
            return <ChatListItem data={item} key={'item' + item.id} />;
          }}
        />
        <BottomNavigation />
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  headerIcon: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 40,
    padding: 10,
    marginLeft: 10
  }
});
