import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from './Styles';

import rayuga from '../../../assets/images/rayuga.jpg';
import amar from '../../../assets/images/amar.jpg';
import om from '../../../assets/images/om.jpg';
import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/img3.jpg';
import post1 from '../../../assets/images/post1.jpg';
import post2 from '../../../assets/images/post2.jpg';
import plus from '../../../assets/icons/plus.png';

const Stories = () => {
  return (
    <View>
      <ScrollView
        horizontal={true}
        showHorizontalScrollIndicator={false}
        style={styles.story}>
        <View>
          <View style={styles.profile}>
            <Image source={om} style={styles.profileImage} />
          </View>
          <View>
            <Image source={plus} style={styles.plus} />
          </View>
          <Text style={styles.text}>Your Story</Text>
        </View>

        <View>
          <View style={styles.profile}>
            <Image source={amar} style={styles.profileImage} />
          </View>
          <Text style={styles.text}>Amar Patil</Text>
        </View>

        <View>
          <View style={styles.profile}>
            <Image source={img1} style={styles.profileImage} />
          </View>
          <Text style={styles.text}>Rayuga</Text>
        </View>

        <View>
          <View style={styles.profile}>
            <Image source={img2} style={styles.profileImage} />
          </View>
          <Text style={styles.text}>Rayuga</Text>
        </View>

        <View>
          <View style={styles.profile}>
            <Image source={img3} style={styles.profileImage} />
          </View>
          <Text style={styles.text}>Rayuga</Text>
        </View>

        <View>
          <View style={styles.profile}>
            <Image source={post1} style={styles.profileImage} />
          </View>
          <Text style={styles.text}>Rayuga</Text>
        </View>

        <View>
          <View style={styles.profile}>
            <Image source={post2} style={styles.profileImage} />
          </View>
          <Text style={styles.text}>Rayuga</Text>
        </View>

        <View>
          <View style={styles.profile}>
            <Image source={rayuga} style={styles.profileImage} />
          </View>
          <Text style={styles.text}>Rayuga</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Stories;
