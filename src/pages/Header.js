import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const headerImage = require('../assets/images/header.jpg');
const notification = require('../assets/images/Notification.png');

const Header = () => {
    return (
        <View style={styles.header}>
            <ImageContainer image={headerImage} />
            <HeaderTitle />
            <ImageContainer image={notification} height={'50%'} width={'50%'} />
        </View>
    )
}

export default Header

const ImageContainer = ({ image, height = '100%', width = '100%' }) => (
    <View style={styles.imageContainer}>
        <Image source={image} style={[{ height, width }]} />
    </View>
);

const HeaderTitle = () => (
    <View style={styles.title}>
        <Text style={styles.bigTitle}>Hi, Olakino</Text>
        <Text style={styles.smallTitle}>May 09, 2022</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        height: 50,
        width: 50,
        borderRadius: 25,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigTitle: { fontSize: 16, fontFamily: 'Poppins-Medium' },
    smallTitle: { fontSize: 10, fontFamily: 'Poppins-Regular', opacity: 0.6 },
    offer: { color: 'white', fontFamily: 'Poppins-Regular', fontSize: 10 },
    title: {paddingHorizontal: 10, flex: 1, justifyContent: 'center'},
    offerText: { color: 'white', fontSize: 16, fontFamily: 'Poppins-Regular' },

});