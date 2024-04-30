import React from 'react'
import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput, Touchable, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Carousel from 'react-native-snap-carousel';
import { sliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions'


function HomeScreen() {
  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item}/>
  }
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
          
          {/* En este view esta la parte del buscador */}
          <View style={{flexDirection:'row', borderColor:'c6c6c6', borderWidth:1, borderRadius:8, paddingHorizontal:10, paddingVertical:8}}>
            <Feather name='search' size={20} color="#c6c6c6" style={{marginRight: 5}}/>
            <TextInput placeholder='Search'/>
          </View>
          {/* Aqui se acaba el buscador */}

          <View style={{marginVertical:15, flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Upcoming</Text>
            <TouchableOpacity onPress={()=>{}}>
              <Text style={{color: '#0aada8'}}>See all</Text>
            </TouchableOpacity>
          </View>

          {/* Carrusel */}
          <Carousel
              ref={(c) => { this._carousel = c; }}
              data={sliderData}
              renderItem={renderBanner}
              sliderWidth={windowWidth -40}
              itemWidth={300}
              loop={true}
            />
          {/* Fin del carrusel */}

        </ScrollView>
       </SafeAreaView>
      );
}

export default HomeScreen
