import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

export default function EditProfile({route, navigation}) {
  const {name, accountName, profileImage} = route.params;
  const ToastMessage = () => {
    ToastAndroid.show('Edited Successfully', ToastAndroid.SHORT);
  };
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{fontSize: 35}} />
        </TouchableOpacity>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            ToastMessage();
            navigation.goBack();
          }}>
          <Ionic name="checkmark" style={{fontSize: 35, color: '#3493D9'}} />
        </TouchableOpacity>
      </View>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Image
          source={profileImage}
          style={{width: 80, height: 80, borderRadius: 100}}
        />
        <Text style={{color: '#3493d9'}}>Change profile photo</Text>
      </View>
      <View style={{padding: 10}}>
        <View>
          <Text style={{opacity: 0.5}}>Name</Text>
          <TextInput
            placeholder="name"
            defaultValue={name}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#cdcdcd',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{opacity: 0.5}}>Username</Text>
          <TextInput
            placeholder="account name"
            defaultValue={accountName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#cdcdcd',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="website"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#cdcdcd',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Bio"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#cdcdcd',
            }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493d9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#efefef',
          }}>
          Switch to Professional account
        </Text>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493d9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#efefef',
          }}>
          Personal Information Settings
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
