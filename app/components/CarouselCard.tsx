import React, { useState, useEffect, useRef } from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import IllustrationOne from "../../assets/images/illustration-1.svg";
import IllustrationTwo from "../../assets/images/illustration-2.svg";
import IllustrationThree from "../../assets/images/illustration-3.svg";
import AppButton from "../reusables/AppButton";

const data = [
  {
    title: "Input your location or address",
    body: "Type in your location or address,provided with option to save and create custom address for future purposes.",
    imgUrl: IllustrationOne,
  },
  {
    title: "Choose a delivery service",
    body: "Provides you with narrowed options on delivery and logistic companies carrying out operations and services close to you.",
    imgUrl: IllustrationTwo,
  },
  {
    title: "Pay and get your package",
    body: "Easy and simple payment options guaranteed for your package delivery.",
    imgUrl: IllustrationThree,
  },
];

const CarouselCards = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const isCarousel = useRef(null);

  const handleSnap = (i) => {
    if (i == data.length - 1) {
            setIndex(data.length - 1)
            setShowNext(true)
    }
              setIndex(i)

  }

  return (
         <View>
      <Carousel
        onSnapToItem={(i) => {
           handleSnap(i)
         
        }}

        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        
      />
      {!showNext &&
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          tappableDots={false}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      }
      {showNext &&
        <AppButton
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: "drawer",
                },
              ],
            })
          }
          width="35%"
          color="dark"
          borderRadius={40}
          title="Next"
        />
      }
    </View>
  );
};

export default CarouselCards;
