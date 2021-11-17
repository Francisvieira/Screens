import * as React from 'react';
import {ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { formato } from '../css/Styles';
export default function Home({navigation}) {
    return (
        <View>
            <ImageBackground source={{ uri: "https://us.123rf.com/450wm/modusuper5/modusuper51308/modusuper5130800003/21800798-abstract-modern-red-and-black-background-gradient-pattern.jpg?ver=6" }} style={formato.fundo}
            >
                <View style={formato.menu}>
                    <TouchableOpacity style={formato.btn} 
                    onPress={()=>{
                     navigation.navigate("Camera"); 
                    }}>
                    
                    <Text style={formato.txtbtn}> Camera </Text>
                    </TouchableOpacity>
                        
                </View>
               

            </ImageBackground>

        </View>
    )
}