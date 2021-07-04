import React from "react"
import { View, StyleSheet, Image, Text } from "react-native"

const Card = ({ product }) => (
    <View style={styles.listItem}>
        <View style={styles.imageArea}>
            <Image style={styles.image} source={{ uri: product.imgURL }} />
        </View>
        <View style={styles.innerContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            {
                product.inStock == false ? <Text style={styles.inStock}>Stokta yok</Text> : null
            }
        </View>
    </View>
)

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1
    },
    title: {
        fontSize: 17,
        minHeight: 40,
        fontWeight: "bold",
        flex: 1
    },
    inStock: {
        color: "red",
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: "bold",
    },
    price: {
        fontSize: 13,
        color: "gray",
    },
    image: {
        backgroundColor: "white",
        flex: 1,
        resizeMode: 'contain',
        borderRadius: 10,
        overflow: "hidden"
    },
    listItem: {
        flex: 1,
        backgroundColor: "#eceff1",
        padding: 10,
        margin: 5,
        borderRadius: 10,
    },
    imageArea: {
        borderRadius: 10,
        overflow: "hidden",
        height: 200
    }
})

export default Card