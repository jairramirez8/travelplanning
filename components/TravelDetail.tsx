// TravelDetail.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface TravelDetailProps {
    nombre: string;
    descripcion: string;
    fecha: string;
    total: number;
    tipoPlan: string;
}

function TravelDetail({ nombre, descripcion, fecha, total, tipoPlan }: TravelDetailProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{nombre}</Text>
            <Text>{descripcion}</Text>
            <Text>Fecha: {fecha}</Text>
            <Text>Total: {total}</Text>
            <Text>Tipo de plan: {tipoPlan}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
});

export default TravelDetail;
