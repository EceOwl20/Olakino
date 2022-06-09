import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';



const cycle = require('../assets/images/cycle.png');
const walk = require('../assets/images/walk.png');
const yoga = require('../assets/images/yoga.png');
const next = require('../assets/images/next.png');



const Card = ({ data, index }) => {
    return (
        <View
            style={{
                flex: 1,
                height: index === 1 ? 180 : 150,
                padding: 10,
                alignSelf: 'center',
                backgroundColor: data.color,
                justifyContent: 'space-between',
                marginHorizontal: 8,
                borderRadius: 10,
                shadowColor: 'lightgrey',
                shadowOffset: { width: -5, height: 5 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
            }}>
            <Image source={data.image} style={{ height: 25, width: 25 }} />
            <View style={{ alignSelf: 'center', margin: 5 }}>
                <Progress.Circle
                    size={50}
                    progress={data.status / 100}
                    showsText
                    unfilledColor="#ededed"
                    borderColor="#ededed"
                    color={data.darkColor}
                    direction="counter-clockwise"
                    fill="white"
                    strokeCap="round"
                    thickness={5}
                    style={{
                        shadowColor: 'grey',
                        shadowOffset: { width: 2, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 1,
                    }}
                    textStyle={{
                        fontSize: 16,
                        fontFamily: 'Poppins-Bold',
                        fontWeight: 'bold',
                    }}
                />
            </View>
            <View>
                <Text style={{ fontSize: 10, fontFamily: 'Poppins-Light' }}>
                    {'Day     1'}
                </Text>
                <Text style={{ fontSize: 10, fontFamily: 'Poppins-Light' }}>
                    {'Time   20 min'}
                </Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <Text style={{ fontFamily: 'Poppins-Regular' }}>{data.name}</Text>
                <View
                    style={{
                        backgroundColor: data.lightColor,
                        padding: 2,
                        borderRadius: 10,
                    }}>
                    <TouchableOpacity>
                        <Image
                            source={next}
                            style={{
                                height: 12,
                                width: 12,
                                resizeMode: 'contain',
                            }}
                        />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({})