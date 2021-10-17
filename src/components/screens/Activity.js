import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FriendsProfileData} from '../screenComponents/Database';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function Activity() {
  const navigation = useNavigation();
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          borderBottomWidth: 0.5,
          borderBottomColor: '#dedede',
          padding: 10,
        }}>
        Activity
      </Text>
      <ScrollView showsVerticalScrollIndicator={false} style={{margin: 10}}>
        <Text style={{fontWeight: 'bold'}}>This Week</Text>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          {FriendsProfileData.slice(0, 3).map((data, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.push('FriendProfile', {
                    name: data.name,
                    profileImage: data.profileImage,
                    follow: data.follow,
                    post: data.posts,
                    followers: data.followers,
                    following: data.following,
                    accountName: data.accountName
                  })
                }
                key={index}>
                <Text>{data.name},</Text>
              </TouchableOpacity>
            );
          })}
          <Text>Started following you</Text>
        </View>
        <Text style={{fontWeight: 'bold'}}>Earlier</Text>
        {FriendsProfileData.slice(3, 6).map((data, index) => {
          const [follow, setFollow] = useState(data.follow);
          return (
            <View key={index} style={{width: '100%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 20,
                  width: '100%',
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '64%',
                  }}>
                  <Image
                    source={data.profileImage}
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 100,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{fontSize: 15}}>
                    <Text style={{fontWeight: 'bold'}}>{data.name}</Text>, who
                    you might know, is on insta
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setFollow(!follow)}
                  style={{width: follow ? 72 : 68}}>
                  <View
                    style={{
                      width: '100%',
                      height: 30,
                      borderRadius: 5,
                      backgroundColor: follow ? null : '#3493D9',
                      borderWidth: follow ? 1 : 0,
                      borderColor: follow ? '#dedede' : null,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: follow ? 'black' : 'white'}}>
                      {follow ? 'Following' : 'Follow'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        <Text style={{fontWeight: 'bold', paddingVertical: 10}}>
          Suggestions for you
        </Text>
        {FriendsProfileData.slice(6, 12).map((data, index) => {
          const [follow, setFollow] = useState(data.follow);
          const [close, setClose] = useState(false);
          return (
            <View key={index}>
              {close ? null : (
                <View
                  style={{
                    paddingVertical: 10,
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{width: '96%'}}>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        maxWidth: '64%',
                      }}>
                      <Image
                        source={data.profileImage}
                        style={{
                          width: 45,
                          height: 45,
                          borderRadius: 100,
                          marginRight: 10,
                        }}
                      />
                      <View style={{width: '100%'}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                          {data.name}
                        </Text>
                        <Text style={{fontSize: 12, opacity: 0.5}}>
                          {data.accountName}
                        </Text>
                        <Text style={{fontSize: 12, opacity: 0.5}}>
                          Suggested for you
                        </Text>
                      </View>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        {follow ? (
                          <TouchableOpacity style={{width: follow ? 90 : 68}}>
                            <View
                              style={{
                                width: '100%',
                                height: 30,
                                borderRadius: 5,
                                backgroundColor: follow ? null : '#3493D9',
                                borderWidth: follow ? 1 : 0,
                                borderColor: '#dedede',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Text style={{color: follow ? 'black' : 'white'}}>
                                {follow ? 'following' : 'follow'}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        ) : (
                          <>
                            <TouchableOpacity
                              onPress={() => setFollow(!follow)}
                              style={{width: follow ? 90 : 68}}>
                              <View
                                style={{
                                  width: '100%',
                                  height: 30,
                                  borderRadius: 5,
                                  backgroundColor: follow ? null : '#3493D9',
                                  borderWidth: follow ? 1 : 0,
                                  borderColor: '#dedede',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <Text
                                  style={{color: follow ? 'black' : 'white'}}>
                                  {follow ? 'following' : 'follow'}
                                </Text>
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => setClose(true)}
                              style={{paddingHorizontal: 10}}>
                              <AntDesign
                                name="close"
                                style={{
                                  fontSize: 14,
                                  color: 'black',
                                  opacity: 0.8,
                                }}
                              />
                            </TouchableOpacity>
                          </>
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          );
        })}
        <View style={{padding: 20}}>
          <Text style={{color: '#3493D9'}}>See all Suggestions</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
