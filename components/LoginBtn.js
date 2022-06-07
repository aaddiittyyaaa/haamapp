import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const LoginBtn = ({ onPress, title, }) => (
  <TouchableOpacity onPress={onPress} style={styles.loginBtnStyle}>
    <Text style={styles.loginButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    loginBtnStyle: {
        backgroundColor: '#ff8c00',
      alignItems:'center',
      justifyContent:'center',
        marginTop: 50,
        borderRadius: 15,
        height: 50,
        marginTop:10,
        marginBottom:10,
        width:300
        

    },
    loginButtonText: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default LoginBtn;