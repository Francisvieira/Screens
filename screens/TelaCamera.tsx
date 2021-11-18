import * as React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { Camera, getCameraPermissionsAsync } from 'expo-camera';
import { useEffect } from 'react';
import { formato } from '../css/Styles';
import { useRef } from 'react';

export default function TelaCamera() {
 //tirar foto
    const ref = useRef(null);

    // permissao da camera
    const [permissao, setPermissao] = React.useState(false);
    // Definifir o lado da camera// 
    const [tipo, setTipo] = React.useState(Camera.Constants.Type.back);
    
    // quando a tela da camera abrir,iremos fazer a camera ter acesso
    React.useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            
            setPermissao(status === "granted");
        })();

    }, []);

    if (permissao == false) {
        return <View />;
    }

    return (
        <View style={formato.conteudo}>
            <Camera style={formato.conteudo} type={tipo} >
                        
                
                


                <TouchableOpacity onPress={() => {
                    setTipo(
                        tipo === Camera.Constants.Type.back ?
                            Camera.Constants.Type.front :
                            Camera.Constants.Type.back

                    );
                }} >
                    <Text style={formato.txtbtn}>
                        {""}
                        Flip{""}
                    </Text>
                </TouchableOpacity>


            </Camera>
            <Button  
                title="Tirar Foto"
                onPress={()=>{
                    async() =>{
                        const foto = await ref.current.takePictureAsync();
                        console.log(foto)
                    };
                }}

                />
        </View>
            )
}