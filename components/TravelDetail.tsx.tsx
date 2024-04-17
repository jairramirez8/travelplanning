import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface TravelDetailProps {
    nombre: string;
    estatus: string;
    calificacion: number;
    imagen: string;
    descripcion: string;
    fecha: string;
    total: number;
    tipoPlan: string;
}

const TravelDetail: React.FC<TravelDetailProps> = ({ nombre, estatus, calificacion, imagen, descripcion, fecha, total, tipoPlan }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{nombre}</Text>
            <Image source={{ uri: imagen }} style={styles.image} />
            <Text>{estatus}</Text>
            <Text>Calificación: {calificacion}</Text>
            <Text>Descripción: {descripcion}</Text>
            <Text>Fecha: {fecha}</Text>
            <Text>Total: {total}</Text>
            <Text>Tipo de Plan: {tipoPlan}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 10,
    },
});

export default TravelDetail;
