import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import ContentItem from './ContentItem'
import Colors from '../../Colors/Colors'
import { useNavigation } from 'expo-router'

export default function Content({ content }) {
    let contentRef;
    const navigation = useNavigation();
    const [activeIndex, setActiveIndex] = useState(0);
    const onNextBtnPress = (index) => {
        if (content?.length <= index + 1) {
            navigation.goBack('CourseDetails');

            return;
        }
        setActiveIndex(index + 1)
        contentRef.scrollToIndex({ animted: true, index: index + 1 })
    }
    return (
        <View style={{ padding: 0, height: '100%' }}>
            <ProgressBar
                contentLength={content?.length}
                contentIndex={activeIndex}
            />

            <FlatList
                data={content}
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                ref={(ref) => {
                    contentRef = ref
                }}
                renderItem={({ item, index }) => (
                    <View
                        style={{
                            width: Dimensions.get('screen').width,
                            padding: 20,
                            marginBottom: 40
                        }}>
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 22,
                            marginTop: 5
                        }}>{item.heading}</Text>
                        <ContentItem
                            description={item?.description?.html} output={item?.output?.html}
                        />
                        <TouchableOpacity style={{
                            marginTop: 10,
                            position: 'absolute',
                            bottom: 10,
                            marginLeft: 20,
                            marginRight: 20,
                            width: '100%'
                        }} onPress={() => onNextBtnPress(index)}>
                            <Text style={{
                                padding: 15,
                                backgroundColor: Colors.PRIMARY,
                                color: Colors.WHITE,
                                textAlign: 'center',
                                fontFamily: 'outift',

                                fontSize: 17,
                                borderRadius: 10
                            }}> {
                                    content?.length > index + 1 ? 'Next' : 'Finish'
                                }</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />





        </View>
    )
}