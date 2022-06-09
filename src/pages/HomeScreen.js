import React, { useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    Image,
    TextInput,
    FlatList,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView,

} from 'react-native'
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';

import VideoPlay from './VideoPlay';
import Header from './Header';
import Banner from './Banner';
import Card from './Card';




const headerImage = require('../assets/images/header.jpg');
const notification = require('../assets/images/Notification.png');
const banner = require('../assets/images/BG.png');
const fire = require('../assets/images/fire.png');
const model = require('../assets/images/model.png');
const couple = require('../assets/images/couple.jpg');
const cycle = require('../assets/images/cycle.png');
const yoga = require('../assets/images/yoga.png');
const walk = require('../assets/images/walk.png');
const next = require('../assets/images/next.png');
const play = require('../assets/images/play.png');
const star = require('../assets/images/Star.png');
const book = require('../assets/images/Book.png');
const home = require('../assets/images/Home.png');
const heart = require('../assets/images/H.png');
const calendar = require('../assets/images/Calender.png');
const profile = require('../assets/images/User.png');
const plus = require('../assets/images/Plus.png');


const Label = ({ children }) => <Text style={styles.label}>{children}</Text>;

const data = [
    {
        name: 'Cycling',
        status: 85,
        image: cycle,
        lightColor: '#f8e4d9',
        color: '#fcf1ea',
        darkColor: '#fac5a4',
    },
    {
        name: 'Walking',
        status: 25,
        image: walk,
        lightColor: '#d7f0f7',
        color: '#e8f7fc',
        darkColor: '#aceafc',
    },
    {
        name: 'Yoga',
        status: 85,
        image: yoga,
        lightColor: '#dad5fe',
        color: '#e7e3ff',
        darkColor: '#8860a2',
    },
];




const HomeScreen = ({ navigation, props }) => {
    const [number, setNumber] = useState('')


    const api = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts/1');
    };
    return (
        <>
        <SafeAreaView style={styles.container}>
            <View style={styles.screen}>
                <Header />
                <Banner />
            </View>
            <View style={{ marginHorizontal: '3%' }}>
                <Label>Your Activities</Label>
                <View style={{ flexDirection: 'row' }}>
                    {data.map((item, index) => (
                        <Card key={index} data={item} index={index} />
                    ))}
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Label>Fitness Video</Label>
                    <Text
                        style={{
                            fontFamily: 'Poppins-Regular',
                            opacity: 0.5,
                            fontSize: 12,
                        }}>
                        View All
                    </Text>
                </View>
                <ScrollView horizontal disableIntervalMomentum={ true } style={{ flexDirection: 'row' }}>
                    {data.map((item, index) => (
                        <VideoPlay key={index+5} data={item} index={index} />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({

    container: { flex: 1 },
    screen: { margin: '3%' },


});

export default HomeScreen

