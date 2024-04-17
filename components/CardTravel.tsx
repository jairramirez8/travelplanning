import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface CardTravelProps {
    id: number;
    nombre: string;
    estatus: string;
    calificacion: number;
    imagen: string;
    onPress: () => void;
}

function CardTravel({ id, nombre, estatus, calificacion, imagen, onPress }: CardTravelProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{nombre}</Text>
            <Image source={{ uri: imagen }} style={styles.image} />
            <Text>{estatus}</Text>
            <Text>Calificación: {calificacion}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 10,
    },
});

export default CardTravel;
