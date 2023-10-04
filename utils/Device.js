import { Dimensions } from "react-native";

// Tablet portrait dimensions
const tablet = {
  width: 552,
  height: 960,
};

export const getPortraitDimensions = () => {
  const { width, height } = Dimensions.get("window");
  return {
    width: Math.min(width, height),
    height: Math.max(width, height),
  };
};

export const getLandscapeDimensions = () => {
  const { width, height } = Dimensions.get("window");
  return {
    width: Math.max(width, height),
    height: Math.min(width, height),
  };
};

export const isPhone = () => {
  const dimension = getPortraitDimensions();
  return dimension.height < tablet.height;
};

export const isTablet = () => {
  const dimension = getPortraitDimensions();
  return dimension.height >= tablet.height;
};

export const isPortrait = () => {
  const { width, height } = Dimensions.get('window');
  if (height > width) {
    return true;
  } else {
    return false;
  }
};