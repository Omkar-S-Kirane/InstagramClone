import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    marginTop: -20,
  },
  story: {
    paddingVertical: 20,
  },
  profile: {
    width: 68,
    height: 68,
    backgroundColor: 'white',
    // borderWidth: 1.8,
    // borderColor: '#c13584',
    // borderRadius: 100,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    resizeMode: 'cover',
    width: '60%',
    height: '60%',
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  icon: {
    padding: 10,
    height: 20,
    width: 20,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  firstRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userProfileImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImageView: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: '100%',
    height: 200,
  },
  userImageBottomIconsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconAlignView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  userImageBottomText: {
    marginHorizontal: 5,
    marginVertical: 5,
    colour: 'black',
    fontWeight: 'bold',
  },
  userImageBottomText2: {
    marginHorizontal: 5,
    colour: 'grey',
  },
  commentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  alignCommentSection: {
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'space-between',
  },
  alignCommentLikesSection: {
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'flex-start',
  },
  afterCommentSection: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    marginHorizontal: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  commentLogoSection: {
    resizeMode: 'cover',
    width: '70%',
    height: '70%',
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  commentLikeSection: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginHorizontal: 170,
  },
  heart: {
    height: 14,
    width: 14,
  },
});
export default styles;
