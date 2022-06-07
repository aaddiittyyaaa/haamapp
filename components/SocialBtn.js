import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


const LoginBtn = ({ onPress, title, }) => (
  <TouchableOpacity onPress={onPress} style={styles.SocialBtnStyle}>
    <Text style={styles.loginButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    SocialBtnStyle: {
      borderColor:'#000',
        backgroundColor: '#FFFFFF',
        marginTop: 50,
        borderRadius: 10,
        height: 50,
        marginTop:10,
        marginBottom:10,
        color:'black',
        borderColor:'#a5a5a5',
        borderWidth:1,
        width:'80%'
    },
    btnImage:{
      width:20,
      height:20,
      marginLeft:5,
  },
  
    loginButtonText: {
        color: '#000',
        borderColor:'#000',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default LoginBtn;