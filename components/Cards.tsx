import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";

interface Props {
  onPress: () => void;
}

export const FeaturedCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-60 h-40 relative flex flex-col items-start"
    >
      <Image
        source={images.onboarding}
        className="w-full h-full rounded-2xl"
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export const Card = () => {
  return (
    <View>
      <Text>Card</Text>
    </View>
  );
};

// <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
// <Image source={icons.star} className="size-3.5" />
// <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
//   4.4
// </Text>

// <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
//   <Text className="text-xl font-rubik-extrabold text-white">Modern Apartment</Text>
// </View>
// </View>
