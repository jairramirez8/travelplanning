/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import CardTravel from './components/CardTravel';

export default function App(){
  const data = [
    {id: 1, nombre: 'Cancun', estatus: 'Disponible', calificacion: 4.5, imagen: 'https://content.r9cdn.net/rimg/dimg/f2/b1/89e06bf7-city-34713-16ed2f2c7f1.jpg?width=1366&height=768&xhint=1735&yhint=2084&crop=true'},
    {id: 2, nombre: 'Paris', estatus: 'Disponible', calificacion: 4.0, imagen: 'https://a.storyblok.com/f/112937/568x464/954a33563a/paris-de-noche.jpg/m/620x0/filters:quality(70)/'},
    {id: 3, nombre: 'Colombia', estatus: 'Disponible', calificacion: 4.0, imagen: 'https://mochileros.com.mx/wp-content/uploads/2023/05/2020.02-Colombia-Capa-2-1.jpg'},
  ];


  return(
    <View>
      <ScrollView>
        {
          data.map((item) => (
            <CardTravel
              key={item.id}
              id={item.id}
              nombre={item.nombre}
              estatus={item.estatus}
              calificacion={item.calificacion}
              imagen={item.imagen}
              onPress={() => {
                console.log('Presionaste la tarjeta de viaje:', item.nombre);
              }}
            />
          ))
        }
      </ScrollView>
      
    </View>
    
  );
}

