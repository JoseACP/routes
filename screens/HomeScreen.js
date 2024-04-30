import React from 'react'
import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput } from 'react-native'


function HomeScreen() {
    return(
       <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
        <ScrollView style={{padding:20}}>
            {/* En este view esta en el encabezado de la pantalla */}
          <View
          style={{
            flexDirection:'row',
            justifyContent: 'space-between',
            marginBottom: 20
          }}
          >
          <Text style={{fontWeight:'bold', fontSize:16}}>
            Bienvenido <Text style={{fontWeight:'600', color:'#B20000', fontSize:16}}>
            Usuario
            </Text>
          </Text>
            <ImageBackground 
            source={require('../assets/images/kemonito.png')}
            style={{width:35, height:35}}
            imageStyle={{borderRadius:25}}
            />
          </View>
          {/* Aquí se acaba el encabezado de la pantalla */}

          <View>
            <TextInput/>
          </View>
        </ScrollView>
       </SafeAreaView>
      );
}

export default HomeScreen
