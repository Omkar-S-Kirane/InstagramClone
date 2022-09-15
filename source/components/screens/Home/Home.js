import {View, Text, StatusBar, Image, ScrollView} from 'react-native';
import React from 'react';

import styles from './Styles';
import Stories from '../../screenComponents/Stories';
import Post from '../../screenComponents/Post';

import more from '../../../assets/icons/more.png';
import chat from '../../../assets/icons/chat.png';

const Home = () => {
  return (
    <View style={styles.root}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View style={styles.header}>
        <View>
          <Text style={styles.insta}>Instagram</Text>
        </View>
        <View style={styles.ic}>
          <Image source={more} style={styles.more} />
          <Image source={chat} style={styles.chat} />
        </View>
      </View>

      <ScrollView>
        <Stories />
        <Post />
      </ScrollView>
    </View>
  );
};

export default Home;
