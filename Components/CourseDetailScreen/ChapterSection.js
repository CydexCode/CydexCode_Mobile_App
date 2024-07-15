import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import Colors from '../../Colors/Colors.js'
import { Ionicons } from '@expo/vector-icons';

export default function ChapterSection({ chapterList, userEnrolledCourse }) {
    return chapterList && (
        <View style={{
            padding: 10,
            backgroundColor: Colors.WHITE, marginTop: 20,
            borderRadius: 15, marginBottom: 27
        }}>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 22
            }}>Chapters</Text>
            {chapterList.map((item, index) => (
                <View style={{
                    display: 'flex', flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, padding: 15, borderRadius: 10, marginTop: 10, borderColor: Colors.GRAY
                }}>
                    <View style={{
                        display: 'flex', flexDirection: 'row',
                        alignItems: 'center', gap: 10
                    }}>
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 27, color: Colors.GRAY
                        }}>{index + 1}</Text>
                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 21, color: Colors.GRAY
                        }}>{item.title}</Text>
                    </View>

                    {userEnrolledCourse.length == 0 ?
                        <Ionicons name="lock-closed" size={25} color={Colors.GRAY} />
                        :
                        <Ionicons name="play" size={25} color={Colors.GRAY} />
                    }
                </View>

            ))}


        </View>
    )
}

