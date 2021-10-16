import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {videoData} from './Database';
import SingleReel from './SingleReel';

export default function ReelsComponent() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleChangeIndexValue = ({index}) => {
        setCurrentIndex(index)
    }
  return (
    <SwiperFlatList
    vertical
      data={videoData}
      onChangeIndex={handleChangeIndexValue}
      renderItem={({item, index}) => <SingleReel item={item} index={index} currentIndex={currentIndex} />}
      keyExtractor={(item,index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({});
