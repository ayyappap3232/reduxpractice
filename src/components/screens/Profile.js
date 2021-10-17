import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ProfileBody, ProfileButtons} from '../screenComponents/ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTabView from '../screenComponents/BottomTabView'

export default function Profile() {
  let circuls = [];
  let numberofcircels = 10;

  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name={'plus'} style={{fontSize: 40, color: 'black'}} />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'black',
              opacity: 0.1,
              marginHorizontal: 5,
            }}></View>
        )}
      </View>,
    );
  }
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', padding: 10}}>
        <ProfileBody
          name={'Mr Peobody'}
          accountName="Mr peobody"
          post="458"
          profileImage={require('../../storage/images/1.jpg')}
          followers="245"
          following="34"
        />
        <ProfileButtons
          id={0}
          name="Mr Peobody"
          accountName="Mr Peobody"
          profileImage={require('../../storage/images/1.jpg')}
        />
      </View>
      <View>
        <Text style={{padding: 10, letterSpacing: 1, fontSize: 14}}>
          Story Highlights
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{paddingVertical: 5, paddingHorizontal: 10}}>
          {circuls}
        </ScrollView>
      </View>
      <BottomTabView />
    </View>
  );
}

const styles = StyleSheet.create({});
