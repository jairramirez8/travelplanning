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

const CardTravel: React.FC<CardTravelProps> = ({ id, nombre, estatus, calificacion, imagen, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image source={{ uri: imagen }} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{nombre}</Text>
                <Text style={styles.status}>{estatus}</Text>
                <Text style={styles.rating}>Calificación: {calificacion}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    detailsContainer: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    status: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },
    rating: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CardTravel;
