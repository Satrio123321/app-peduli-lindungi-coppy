import * as React from 'react';

import {View, Text, TextInput , Image, TouchableOpacity} from 'react-native';

import {Loginlogo,Logokpcpen, Logokominfo, Logokemenkes, Logobumn} from '../../assets';


export default LoginScreen =  ({navigation}) => {

    return (
        
         <View style={{ flex:1 }}>
        <View style={{flex:1,
        justifyContent:'flex-end'
        ,alignItems:'center',
        marginTop:10}}>
         <Image 
          style={{height:275,width:275}} 
          resizeMode={'stretch'}
          source={Loginlogo} />
           </View>


        <View style={{
            margin:10, 
        }}>
         <TextInput 
         style={{
            borderWidth:1,
            padding:10,
            marginHorizontal:30,
            marginVertical:10,
            paddingHorizontal:20,
            borderRadius:10,}}
            placeholder="Youremail@domain.com"/>

        <TextInput style={{
            borderWidth:1,
            padding:10,
            marginHorizontal:30,
            marginVertical:10,
            paddingHorizontal:20,
            borderRadius:10,}} 
            placeholder="Password"/>

        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('SplashScreen')}>
        <View style={{
            backgroundColor:'darkslategrey',justifyContent:'center',alignItems:'center',
            padding:15,
            marginHorizontal:60,
            marginTop:10,
            borderWidth:0,
            borderRadius:10
            }}>
         
                        <Text style={{
                            textAlign:'center',
                            color:'white',
                            fontSize:20,
                        }}>Login</Text>      
        </View>
        </TouchableOpacity>


        <View>
        <Text style={{
          marginStart:20,
          fontSize:15,
          marginBottom:3,
          marginTop:175
          }}>Bekerjasama Dengan : </Text>
        </View>

        <View style={{
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',}}>

        <View style={{padding:10}}>
         <Image 
          style={{width:100,height:100}} 
          resizeMode={'contain'}
          source={Logokpcpen} />
           </View>

            <View style={{padding:10}}>
         <Image 
          style={{width:100,height:50}} 
          resizeMode={'contain'}
          source={Logokominfo} />
           </View>
           
              <View style={{padding:10}}>
         <Image 
          style={{width:100,height:50}} 
          resizeMode={'contain'}
          source={Logokemenkes} />
           </View>

              <View style={{padding:10}}>
         <Image 
          style={{width:100,height:40}} 
          resizeMode={'contain'}
          source={Logobumn} />
           </View>

           </View>


        </View>
    );
}
