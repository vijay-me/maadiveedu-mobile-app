import Colors from "@/constants/Colors";
import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ImageStyle,
  ViewStyle,
} from "react-native";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  style?: ImageStyle | ViewStyle;
}


const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 50, style }) => {
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2 },
        style,
      ]}
    >
      {src ? (
        <Image
          source={{ uri: src }}
          style={[
            styles.image,
            { width: size, height: size, borderRadius: size / 2 },
          ]}
        />
      ) : (
        <Text style={[styles.altText, { fontSize: size / 2 }]}>
          {alt ? alt.charAt(0) : "?"}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:getRandomColor(),
  },
  image: {
    resizeMode: "cover",
  },
  altText: {
    color: Colors.white,
    fontWeight: "bold",
  },
});

export default Avatar;
