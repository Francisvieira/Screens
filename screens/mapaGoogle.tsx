import * as React from 'react'
import MapView from 'react-native-maps';
import { View, Text, } from 'react-native'
import { formato } from '../css/Styles';
import { Marker } from 'react-native-maps';


export default function mapaGoogle() {

    const [markers, Setmarkers] = React.useState([
        {
        latlng: { latitude: -23.540659632313744, longitude: -46.575000489189726, },
        title: "Senac tatuapé",
        description: 'local de ensino tecnico' 

    },  

    {
        latlng: { latitude: -23.541202350657763, longitude: -46.57522296774691 },
        title: "Casa do pastel",
        description: 'Melhor Pastel de São Paulo' 

    },

]);


    return (
        <View style={formato.conteudo}>

            <MapView

                initialRegion={{
                    latitude: -23.540659632313744,
                    longitude: -46.575000489189726,
                    latitudeDelta: 0.007,
                    longitudeDelta: 0.007,
                }}
                style={formato.mapa}
            >

                {
                    markers.map((m, ix) => (
                        <Marker
                            key={ix}
                            coordinate={m.latlng}
                            title={m.title}
                            description={m.description}
                        />

                    ))
                }

            </MapView>




        </View>
    );
}