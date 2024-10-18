// app/components/Image.tsx
import React from "react";
import {
  Image as RNImage,
  ImageProps as RNImageProps,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";

interface ImageProps extends RNImageProps {
  src: string; // Allow both URI and local image references
  placeholder?: React.ReactNode;
}

const Image: React.FC<ImageProps> = ({ src, placeholder, style, ...props }) => {
  const [loading, setLoading] = React.useState(true);

  // Determine if the src is a URI or a local image
  const source = typeof src === "string" ? { uri: src } : src;

  // Check if the source is an SVG
  const isSvg = typeof src === "string" && src.endsWith(".svg");

  return (
    <View style={[styles.container, style]}>
      {/* {loading && placeholder} */}
      {/* {isSvg ? (
        <SvgUri
          width="100%"
          height="100%"
          source={source}
          onLoadEnd={() => setLoading(false)}
          {...props}
        />
      ) : ( */}
      <RNImage
        {...props}
        source={source}
        style={[styles.image, loading && { display: "none" }]}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Image;
