import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

const Post = ({ navigation }) => {
  const [gallery, setgallery] = useState([
    {
      image: {
        uri:
          'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27',
      },
      title: 'Switzerland',
      key: '1',
    },
    {
      image: {
        uri:
          'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27',
      },
      title: 'New Zeland',
      key: '2',
    },
    {
      image: {
        uri:
          'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27',
      },
      title: 'Rome',
      key: '3',
    },
  ]);

  const image = {
    uri:
      'https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <Text style={styles.tagLine}>Discover Switzerland</Text>
        <Text style={styles.placename}>
          Explote the scenic beauty of Switzerland
        </Text>

        <TouchableOpacity
          onPress={() => goBack()}
          style={{
            position: 'absolute',
            left: 20,
            top: 40,
            backgroundColor: '#ff6200',
            padding: 10,
            borderRadius: 40,
          }}
        >
          <Feather name='arrow-left' size={24} color='#fff' />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 20,
            top: 40,
            backgroundColor: '#ff6200',
            padding: 10,
            borderRadius: 40,
          }}
        >
          <Feather name='heart' size={22} color='#fff' />
        </TouchableOpacity>
      </ImageBackground>

      <TouchableOpacity style={styles.bookTicketBtn}>
        <Text style={styles.bookTicketTxt}>Book Now!</Text>
      </TouchableOpacity>

      <ScrollView style={{ backgroundColor: 'white' }}>
        <Text style={{ padding: 14, fontSize: 20, fontWeight: 'bold' }}>
          About the place
        </Text>

        <Text
          style={{
            paddingHorizontal: 14,
            fontSize: 14,
            fontWeight: 'normal',
            opacity: 0.3,
            justifyContent: 'flex-start',
            textAlign: 'justify',
            lineHeight: 26,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus
          ac felis a efficitur. Vivamus sagittis aliquam commodo. Vivamus
          consectetur pretium massa, nec vulputate arcu pellentesque sed.
          Phasellus tempor nibh et congue venenatis. Suspendisse tellus massa,
          tempus eu odio quis, tempor pretium enim. Nunc scelerisque imperdiet
          erat id molestie. Maecenas sodales egestas sapien, a lacinia metus
          feugiat non. Suspendisse turpis nunc, efficitur quis sodales ut,
          convallis sit amet urna.{' '}
        </Text>

        <Text
          style={{
            paddingHorizontal: 14,
            fontSize: 14,
            fontWeight: 'normal',
            opacity: 0.3,
            justifyContent: 'flex-start',
            textAlign: 'justify',
            lineHeight: 26,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus
          ac felis a efficitur. Vivamus sagittis aliquam commodo. Vivamus
          consectetu XD.{' '}
        </Text>

        <View>
          <Text style={{ padding: 14, fontSize: 20, fontWeight: 'bold' }}>
            Suggested Places
          </Text>
          <FlatList
            data={gallery}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingBottom: 40 }}>
                  <View>
                    <Image
                      source={item.image}
                      style={{
                        width: 150,
                        height: 150,
                        marginHorizontal: 10,
                        borderRadius: 10,
                      }}
                    />

                    <View style={styles.darkOverlay}></View>

                    <Feather
                      name='map-pin'
                      size={16}
                      color='white'
                      style={{
                        marginHorizontal: 14,
                        marginTop: 4,
                        position: 'absolute',
                        left: 10,
                        bottom: 10,
                      }}
                    />
                    <Text
                      style={{
                        marginHorizontal: 14,
                        marginTop: 4,
                        position: 'absolute',
                        left: 30,
                        bottom: 10,
                        color: 'white',
                        fontSize: 14,
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 380,
    justifyContent: 'flex-end',
  },
  tagLine: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginVertical: 6,
  },
  placename: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginBottom: 30,
  },
  bookTicketBtn: {
    position: 'absolute',
    right: 12,
    top: 350,
    backgroundColor: '#ff6200',
    padding: 16,
    borderRadius: 40,
    elevation: 10,
  },
  bookTicketTxt: {
    color: 'white',
    fontSize: 14,
  },
  darkOverlay: {
    width: 150,
    height: 150,
    position: 'absolute',
    backgroundColor: '#fff',
    opacity: 0.2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

export default Post;
