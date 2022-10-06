import * as React from 'react';

import {View, Text, SafeAreaView, StyleSheet,TextInput , StatusBar, Image, TouchableOpacity} from 'react-native';

import {Loginlogo,Logokpcpen, Logokominfo, Logokemenkes, Logobumn} from '../../assets';


export default LoginScreen =  ({navigation}) => {

    return (
        <SafeAreaView style={{ flex:1 }}>
         
        <View style={{backgroundColor:'red',justifyContent:'center',alignItems:'center',marginTop:100}}>
         <Image 
          style={{height:275,width:275}} 
          resizeMode={'stretch'}
          source={Loginlogo} />
           </View>

        <View style={{
            backgroundColor:'blue',margin:20 
        }}>
         <TextInput 
         style={{
            borderWidth:1,
            padding:10,
            marginHorizontal:30,
            marginVertical:10,
            paddingHorizontal:20,
            borderRadius:10,
         }} 
                    placeholder="Youremail@domain.com"
                />

        <TextInput style={{
            borderWidth:1,
            padding:10,
            marginHorizontal:30,
            marginVertical:10,
            paddingHorizontal:20,
            borderRadius:10,
        }} 
        placeholder="Password"/>

        </View>
        
        <View style={{backgroundColor:'purple'}}>
          
        </View>




        </SafeAreaView>
    );
}
