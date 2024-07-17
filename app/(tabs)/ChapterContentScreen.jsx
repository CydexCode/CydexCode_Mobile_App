import { View, Text } from 'react-native'
import React from 'react'
import Content from '../../Components/ChapterContent/Content'
import { useRoute } from '@react-navigation/native';

export default function ChapterContentScreen() {
    const param=useRoute().params;
    return param.content&&(
    <View>
      <Content content={param.content}  />
    </View>
  )
}