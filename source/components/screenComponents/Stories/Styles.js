import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  story: {
    paddingVertical: 20,
  },
  profile: {
    width: 68,
    height: 68,
    backgroundColor: 'white',
    borderWidth: 1.8,
    borderColor: '#c13584',
    borderRadius: 100,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    resizeMode: 'cover',
    width: '92%',
    height: '92%',
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  plus: {
    position: 'absolute',
    bottom: 0,
    right: 3,
    zIndex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 10,
    marginVertical: 5,
    fontWeight: 'bold',
  },
});
export default styles;
