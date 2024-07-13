import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import OptionItem from './OptionlItem'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function DetailSection({ course }) {
    return (
        <View style={{
            padding: 10, borderRadius: 15,
            backgroundColor: "#fff"
        }}>

            <Image source={{ uri: course?.banner?.url }}
                style={{
                    width: Dimensions.get('screen').width * 0.80,
                    height: 190, borderRadius: 15
                }}
            />
            <View style={{ padding: 5 }}>
                <Text style={{
                    fontSize: 20, fontFamily: 'outfit-medium',
                    marginTop: 10
                }}>{course.name}</Text>

                <View>
                    <View style={styles.rowStyle}>
                        <OptionItem icon={'book-outline'} value={course.chapters?.length + " Chapter"} />
                        <OptionItem icon={'time-outline'} value={course.time + " Hr"} />
                    </View>
                    <View style={styles.rowStyle}>
                        <OptionItem icon={'person-circle-outline'} value={course?.author} />
                        <OptionItem icon={'cellular-outline'} value={course.level} />
                    </View>
                </View>
                <View>
                    <Text style={{
                        fontFamily: 'outfit-medium',
                        fontSize: 20
                    }}>Description</Text>
                    <Text style={{
                        fontFamily: 'outfit', color: '#808080',
                        lineHeight: 23
                    }}>{course?.description?.markdown}</Text>
                </View>
                <View style={{
                    display: 'flex', flexDirection: 'row',
                    justifyContent: 'space-evenly', gap: 20
                }}>
                    <TouchableOpacity

                        style={{
                            padding: 15, backgroundColor: '#6857E8',
                            borderRadius: 10
                        }}>
                        <Text style={{
                            fontFamily: 'outfit',
                            color:'#fff', textAlign: 'center',
                            fontSize: 15
                        }}>Enroll For Free</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        padding: 15, backgroundColor:'#65CFF2',
                        borderRadius: 10
                    }}>
                        <Text style={{
                            fontFamily: 'outfit',
                            color:'#fff', textAlign: 'center', fontSize: 15
                        }}>Membership $2.99/Mon</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    }
})