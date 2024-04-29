import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity,Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function App() {
  return (
    <Home/>
  )
}

const Main = () =>{
  return (
    <SafeAreaView 
    style={{
      flex:1, 
      justifyContent: 'center', 
      alignItems:'center',
      backgroundColor:'#ffffff'}}
      > 
      <View>
      
        <Text style={{fontSize:30, fontWeight:'bold', color:'#20315f'}}>
          GAMEON
        </Text>
      
      </View>
      <Image
        source={require('./assets/images/dualsense.png')}
        style={{ width: 370,
          height: 250,
          resizeMode: 'cover'}}
      />
      <TouchableOpacity style={{backgroundColor:'#AD40AF', padding:20, width:'90%', borderRadius:5, flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontWeight:'bold', fontSize:18, color:'#fff'}}>let´s begin</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color='#fff'/>
      </TouchableOpacity>
    </SafeAreaView>
    
  );
}

const Home = () =>{
  return(
    <SafeAreaView 
  style={{
    flex:1, 
    justifyContent: 'center', 
    alignItems:'center',
    backgroundColor:'#000000'}}
    > 
    <View>
    
      <Text style={{fontSize:30, fontWeight:'bold', color:'#20315f'}}>
        GAMEON
      </Text>
    
    </View>
    <Image
      source={require('./assets/images/dualsense.png')}
      style={{ width: 370,
        height: 250,
        resizeMode: 'cover'}}
    />
    <TouchableOpacity style={{backgroundColor:'#AD40AF', padding:20, width:'90%', borderRadius:5, flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={{fontWeight:'bold', fontSize:18, color:'#fff'}}>let´s begin</Text>
      <MaterialIcons name="arrow-forward-ios" size={22} color='#fff'/>
    </TouchableOpacity>
  </SafeAreaView>
  );
}

;
