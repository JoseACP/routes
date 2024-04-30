import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity,Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Main} name='Main' options={{headerShown:false}}/>
        <Stack.Screen component={HomeScreen} name='Home' options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const Main = ({navigation}) =>{
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
      <TouchableOpacity style={{backgroundColor:'#AD40AF', padding:20, width:'90%', borderRadius:5, flexDirection:'row', justifyContent:'space-between'}}
      onPress={() => navigation.navigate('Home')}
      >
        <Text style={{fontWeight:'bold', fontSize:18, color:'#fff'}}>let´s begin</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color='#fff'/>
      </TouchableOpacity>
    </SafeAreaView>
    
  );
}


;
