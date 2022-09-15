import {
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import styles from './Styles';

import om from '../../../assets/images/om.jpg';
import amar from '../../../assets/images/amar.jpg';

import menu from '../../../assets/icons/menu.png';
import heart from '../../../assets/icons/heart.png';
import heartFill from '../../../assets/icons/heartFill.png';
import comment from '../../../assets/icons/comment.png';
import send from '../../../assets/icons/send.png';
import bookmark from '../../../assets/icons/bookmark.png';
import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import post2 from '../../../assets/images/post2.jpg';
import post3 from '../../../assets/images/post3.jpg';
import post4 from '../../../assets/images/post4.jpg';
import post5 from '../../../assets/images/post5.jpg';

const Stories = () => {
  return (
    <View style={styles.root}>
      <View style={styles.firstRow}>
        <View style={styles.userProfileImage}>
          <View style={styles.profile}>
            <Image source={om} style={styles.profileImage} />
          </View>
          <Text style={styles.text}>Omkar Kirane</Text>
        </View>
        <View>
          <Image source={menu} />
        </View>
      </View>
      <View style={styles.userImageView}>
        <Image source={om} style={styles.userImage} />
      </View>
      <View style={styles.userImageBottomIconsView}>
        <View style={styles.iconAlignView}>
          <Image source={heartFill} style={styles.icon} />
          <Image source={comment} style={styles.icon} />
          <Image source={send} style={styles.icon} />
        </View>
        <View>
          <Image source={bookmark} style={styles.icon} />
        </View>
      </View>
      <View>
        <Text style={styles.userImageBottomText}>1.3M Likes</Text>
        <Text style={styles.userImageBottomText2}>View All 30K comments</Text>
      </View>
      <View style={styles.commentSection}>
        <View style={styles.alignCommentSection}>
          <View style={styles.alignCommentLikesSection}>
            <View style={styles.afterCommentSection}>
              <Image source={om} style={styles.commentLogoSection} />
            </View>
            <TextInput placeholder="Add a comment"></TextInput>
          </View>
          <View style={styles.commentLikeSection}>
            <Image source={heart} style={styles.heart} />
          </View>
        </View>
      </View>

      <View style={styles.firstRow}>
        <View style={styles.userProfileImage}>
          <View style={styles.profile}>
            <Image source={amar} style={styles.profileImage} />
          </View>
          <Text style={styles.text}>Rayuga</Text>
        </View>
        <View>
          <Image source={menu} />
        </View>
      </View>
      <View style={styles.userImageView}>
        <Image source={amar} style={styles.userImage} />
      </View>
      <View style={styles.userImageBottomIconsView}>
        <View style={styles.iconAlignView}>
          <Image source={heart} style={styles.icon} />
          <Image source={comment} style={styles.icon} />
          <Image source={send} style={styles.icon} />
        </View>
        <View>
          <Image source={bookmark} style={styles.icon} />
        </View>
      </View>
      <View>
        <Text style={styles.userImageBottomText}>1.3M Likes</Text>
        <Text style={styles.userImageBottomText2}>View All 30K comments</Text>
      </View>
      <View style={styles.commentSection}>
        <View style={styles.alignCommentSection}>
          <View style={styles.alignCommentLikesSection}>
            <View style={styles.afterCommentSection}>
              <Image source={om} style={styles.commentLogoSection} />
            </View>
            <TextInput placeholder="Add a comment"></TextInput>
          </View>
          <View style={styles.commentLikeSection}>
            <Image source={heart} style={styles.heart} />
          </View>
        </View>
      </View>

      <View style={styles.firstRow}>
        <View style={styles.userProfileImage}>
          <View style={styles.profile}>
            <Image source={img1} style={styles.profileImage} />
          </View>
          <Text style={styles.text}>Shanaya </Text>
        </View>
        <View>
          <Image source={menu} />
        </View>
      </View>
      <View style={styles.userImageView}>
        <Image source={post4} style={styles.userImage} />
      </View>
      <View style={styles.userImageBottomIconsView}>
        <View style={styles.iconAlignView}>
          <Image source={heart} style={styles.icon} />
          <Image source={comment} style={styles.icon} />
          <Image source={send} style={styles.icon} />
        </View>
        <View>
          <Image source={bookmark} style={styles.icon} />
        </View>
      </View>
      <View>
        <Text style={styles.userImageBottomText}>1.3M Likes</Text>
        <Text style={styles.userImageBottomText2}>View All 30K comments</Text>
      </View>
      <View style={styles.commentSection}>
        <View style={styles.alignCommentSection}>
          <View style={styles.alignCommentLikesSection}>
            <View style={styles.afterCommentSection}>
              <Image source={om} style={styles.commentLogoSection} />
            </View>
            <TextInput placeholder="Add a comment"></TextInput>
          </View>
          <View style={styles.commentLikeSection}>
            <Image source={heart} style={styles.heart} />
          </View>
        </View>
      </View>

      <View style={styles.firstRow}>
        <View style={styles.userProfileImage}>
          <View style={styles.profile}>
            <Image source={post2} style={styles.profileImage} />
          </View>
          <Text style={styles.text}>Vishal Joshi</Text>
        </View>
        <View>
          <Image source={menu} />
        </View>
      </View>
      <View style={styles.userImageView}>
        <Image source={post3} style={styles.userImage} />
      </View>
      <View style={styles.userImageBottomIconsView}>
        <View style={styles.iconAlignView}>
          <Image source={heart} style={styles.icon} />
          <Image source={comment} style={styles.icon} />
          <Image source={send} style={styles.icon} />
        </View>
        <View>
          <Image source={bookmark} style={styles.icon} />
        </View>
      </View>
      <View>
        <Text style={styles.userImageBottomText}>1.3M Likes</Text>
        <Text style={styles.userImageBottomText2}>View All 30K comments</Text>
      </View>
      <View style={styles.commentSection}>
        <View style={styles.alignCommentSection}>
          <View style={styles.alignCommentLikesSection}>
            <View style={styles.afterCommentSection}>
              <Image source={om} style={styles.commentLogoSection} />
            </View>
            <TextInput placeholder="Add a comment"></TextInput>
          </View>
          <View style={styles.commentLikeSection}>
            <Image source={heart} style={styles.heart} />
          </View>
        </View>
      </View>

      <View style={styles.firstRow}>
        <View style={styles.userProfileImage}>
          <View style={styles.profile}>
            <Image source={img2} style={styles.profileImage} />
          </View>
          <Text style={styles.text}>Vishwas Pawar</Text>
        </View>
        <View>
          <Image source={menu} />
        </View>
      </View>
      <View style={styles.userImageView}>
        <Image source={post5} style={styles.userImage} />
      </View>
      <View style={styles.userImageBottomIconsView}>
        <View style={styles.iconAlignView}>
          <Image source={heart} style={styles.icon} />
          <Image source={comment} style={styles.icon} />
          <Image source={send} style={styles.icon} />
        </View>
        <View>
          <Image source={bookmark} style={styles.icon} />
        </View>
      </View>
      <View>
        <Text style={styles.userImageBottomText}>1.3M Likes</Text>
        <Text style={styles.userImageBottomText2}>View All 30K comments</Text>
      </View>
      <View style={styles.commentSection}>
        <View style={styles.alignCommentSection}>
          <View style={styles.alignCommentLikesSection}>
            <View style={styles.afterCommentSection}>
              <Image source={om} style={styles.commentLogoSection} />
            </View>
            <TextInput placeholder="Add a comment"></TextInput>
          </View>
          <View style={styles.commentLikeSection}>
            <Image source={heart} style={styles.heart} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Stories;
