import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    //  flex: 1,
  },
  nextText: {
    color: '#FFFFFF',
    width: 38,
    height: 19,
    fontWeight: '700',
    fontSize: 16,
    fontStyle: 'normal',
  },
  imageContainer: {
    justifyContent: 'center',
    //alignItems: 'center',
    alignSelf: 'center',
    marginTop: 80,
    width: 135,
    height: 145,
    //backgroundColor: 'red',
  },
  textInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 66,
    // marginBottom: 10,
  },
  textInput1: {
    width: 343,
    color: 'gray',
    height: 56,
    //  top: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#BDBDBD',
    //  backgroundColor: '#E5E5E5',
    padding: 10,
  },
  textInput2: {
    marginTop: 20,
    width: 343,
    color: 'gray',
    height: 56,
    // top: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#BDBDBD',
    //  backgroundColor: '#E5E5E5',
    padding: 10,
  },
  orLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //    width: '78%',
    marginTop: 77,
  },
  orText: {
    width: 67,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19.2,
    color: '#333333',
    marginLeft: 10,
    marginRight: 10,
    fontFamily: 'OpenSans-SemiBold',
  },
  fbandGoogleContainer: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    marginTop: 47,
    alignSelf: 'center',
  },
  fbContainer: {
    backgroundColor: '#e6eaf2',
    height: 54,
    width: 117,
    justifyContent: 'center',
    borderRadius: 5,
  },
  fbContainerImage: {
    width: 36,
    height: 36,
    alignSelf: 'center',
    //justifyContent: 'center',

    //position: 'absolute',
  },
  GoogleContainer: {
    backgroundColor: '#fbe8e5',
    height: 54,
    width: 117,
    justifyContent: 'center',
    borderRadius: 5,
  },
  GoogleContainerImage: {
    width: 36,
    height: 36,
    alignSelf: 'center',
    //justifyContent: 'center',

    //position: 'absolute',
  },
  buttonContainer: {
    marginTop: 47,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 343,
    height: 57,
    borderRadius: 4,
    backgroundColor: '#FF5F5E',
  },
});