import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text,TextInput, View ,Button,Image,TouchableOpacity} from 'react-native';
export default function App() {
  const [email,setEmail]=useState('yunus');
  const [password,setPassword]=useState();
  const [hidePass, setHidePass] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.upperbox}>
      <Image
          style={styles.logo}
          source={require("../assets/FumuY.png")}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="Email..." 
          placeholderTextColor="#323c"
          onChangeText={(val)=>setEmail()}/>
      </View>
      <View style={styles.inputView} >
          <TextInput  
            password={true}
            secureTextEntry={hidePass ? true : false}
            style={styles.inputText}
            autoCompleteType="password"
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={(val)=>setPassword()}/>
           <Icon
              style={styles.hideicon}
              name={hidePass ? 'eye-slash' : 'eye'}
              size={15}
              color="grey"
              onPress={() => setHidePass(!hidePass)}
            />

      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>

        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6600CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperbox: {
    height:80,
    marginBottom:40
  },
  logo:{
    width: 240,
    height:80,
    marginBottom:60
  },
  hideicon: {
    color:'white',
    paddingBottom:15,
  },
  inputView:{
    flexDirection: 'row',
    width:"80%",
    backgroundColor:"#cc0066",
    borderRadius:25,
    height:50,
    marginBottom:20,
    alignItems: 'center',
    justifyContent:"center",
    padding:20
  },
  inputText:{
    flex :1,
    height:50,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color:"white"
  }, 
  loginBtn:{
    width:"50%",
    backgroundColor:"#E492C3",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  forgot:{
    color:"#ffff",
    fontSize:11
  },
  loginText:{
    color:"white"
  }
});
