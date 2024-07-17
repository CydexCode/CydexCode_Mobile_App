import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../Colors/Colors';

export default function ProgressBar(contentLength,contentIndex) {
    const arraySize=Array.from({length:contentLength},(_,index)=>index+1);
    const width=100/contentLength;
  return (
    <View style={{display:'flex',flexDirection:'row',
        justifyContent:'space-between',marginTop:40,padding:20}}>
          {arraySize.map((item,index)=>(
            <View style={{
                backgroundColor:`${index<=contentIndex?
               '#4CBF57':'#8C8C8C'}`,
            width:width+"%",borderRadius:10,height:10,margin:5,
            flex:1}}>
            </View>
          ))}
        </View>
  )
}