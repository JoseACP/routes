import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput, Touchable, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Carousel from 'react-native-snap-carousel';
import { freeGames, paidGames, sliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions'
import CustomSwitch from '../components/CustomSwitch';

import ListItem from '../components/ListItem';


function HomeScreen({navigation}) {
  const [gamesTab, setGameTab] = useState(1)

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item}/>
  };

  const onSelectSwitch = (value) => {
    setGameTab(value)
     
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
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground 
            source={require('../assets/images/kemonito.png')}
            style={{width:35, height:35}}
            imageStyle={{borderRadius:25}}
            />
          </TouchableOpacity>
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
          <View style={{marginVertical:'5%'}}>
            <CustomSwitch 
            selectionMode={1} 
            option1="Free to play" 
            option2="Paid games"
            onSelectSwitch={onSelectSwitch}
            />
          </View>
          
          {gamesTab == 1 && 
            freeGames.map(item => (
              <ListItem 
              key={item.id} 
              photo={item.poster} 
              title={item.title} 
              subTitle={item.subtitle}
              isFree={item.isFree}
              />
              ))
          }
          {gamesTab == 2 && 
            paidGames.map(item => (
              <ListItem 
              key={item.id} 
              photo={item.poster} 
              title={item.title} 
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              />
            ))
          }

        </ScrollView>
       </SafeAreaView>
      );
}

export default HomeScreen
