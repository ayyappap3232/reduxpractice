import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';

import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';

export default function Home() {
  return (
    <View style={{backgroundColor:'white',height: '100%'}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <FontAwesome name="plus-square-o" style={{fontSize: 24}} />
        <Text
          style={{
            fontFamily: 'Lobster-Regular',
            fontSize: 25,
            fontWeight: '500',
          }}>
          Sample App
        </Text>
        <Feather name="navigation" style={{fontSize: 24}} />
      </View>

      <ScrollView>
          <Stories />
          <Post />
          <View style={{justifyContent:'center', alignItems: 'center', padding: 10}}>
            <Ionic name="ios-reload-circle-sharp" style={{fontSize: 60, opacity: 0.2}}/>
          </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
