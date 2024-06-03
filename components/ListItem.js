import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import { windowWidth } from '../utils/Dimensions'

function ListItem({photo, title, subTitle, isFree, price}) {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center', marginBottom:20}}>
        <View style={{flexDirection: 'row', alignItems: 'center', flex:1}}>
            <Image source={photo}
                style={{width:55, height:55, borderRadius:10, marginRight: 8}}
            />
            <View style={{width: windowWidth - 220}}>
                <Text
                    style={{
                        color: '#333',
                        fontWeight: 'bold',
                        fontSize: 14,
                    }}
                >
                    {subTitle}
                </Text>
                <Text
                    numberOfLines={1}
                    style={{
                        color: '#333',
                        fontWeight: '400',
                        fontSize: 14,
                        textTransform: 'uppercase'
                    }}
                >
                    {title}
                </Text>
            </View>
        </View>
        <TouchableOpacity
                style={{
                    backgroundColor:'#33AB71',
                    width: 100,
                    borderRadius: 10,
                    padding:10,
                    alignContent:'center'
                    
                }}
            >
                <Text style={{
                    color:'#fff',
                    textAlign:'center',
                    fontWeight:'600'

                }}>
                    {isFree == 'Yes' && 'Play'}
                    {isFree == 'No' && price}
                </Text>
            </TouchableOpacity>
    </View>
  )
}

export default ListItem
