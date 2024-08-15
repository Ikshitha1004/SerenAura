// globalstyles.js

export const Border = {
  br_9xl: 32,
  br_11xl: 48,
  // Add other border styles here
};

export const FontSize = {
  size_base: 16,
  size_sm: 14,
  size_5xl: 24,
  // Add other font sizes here
};

export const Color = {
  colorWhite: "#FFFFFF",
  colorGray_100: "#1E1E1E",
  colorDimgray_100: "#696969",
  colorDimgray_200: "#A9A9A9",
  colorMistyrose: "#FFE4E1",
  // Add other colors here
};

export const Styles = {
  // Example global styles
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 16,
  },
  heading: {
    // fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_100,
  },
};
