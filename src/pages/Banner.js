import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'

import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';

const banner = require('../assets/images/BG.png');
const fire = require('../assets/images/fire.png');
const model = require('../assets/images/model.png');

const OfferText = ({ children }) => (
    <Text style={styles.offerText}>{children}</Text>
);


const Banner = () => {
    return (

        <View>
            <ImageBackground style={styles.banner} source={banner}>
                <View style={styles.bannerContainer}>
                    <View style={styles.rowLabel}>
                        <View style={styles.fireContainer}>
                            <Image
                                source={fire}
                                resizeMode="contain"
                                style={styles.fireImage}
                            />
                        </View>
                        <Text style={styles.offer}>limited offer</Text>
                    </View>
                    <OfferText>30% Discount</OfferText>
                    <OfferText>Flash Sales</OfferText>
                </View>
            </ImageBackground>
            <Image source={model} style={styles.model} resizeMode="contain" />
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    bannerContainer: { flex: 1 },
    banner: {
        marginTop: 20,
        padding: 30,
        resizeMode: 'contain',
        borderRadius: 20,
        overflow: 'hidden',
        flexDirection: 'row',
    },
    rowLabel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    fireImage: { height: 15, width: 15, alignSelf: 'center', margin: 5 },
    offer: { color: 'white', fontFamily: 'Poppins-Regular', fontSize: 10 },
    offerText: { color: 'white', fontSize: 16, fontFamily: 'Poppins-Regular' },
    model: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        zIndex: 10,
        height: '75%',
        width: '50%',
        transform: [{ rotateY: '180deg' }],
    },
});


