import styled from "styled-components/native";
import { Dimensions, PixelRatio } from "react-native";
const { width, height } = Dimensions.get("window");
const screenHeight = Math.round(PixelRatio.roundToNearestPixel(height));

export const Container = styled.View``;

export const NullContainer = styled.View`
  flex: 1;
  background-color: #e2e2e2;
  height: ${screenHeight}px;
  justify-content: center;
  align-items: center;
`;

export const NullBox = styled.View`
  margin: 20px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const NullIconBox = styled.View``;

export const NullTitle = styled.Text`
  color: #8d8d8d;
  font-size: 18px;
  font-weight: bold;
  margin: 2px;
`;

export const NullInfo = styled.Text`
  color: #838383;
  text-align: center;
  line-height: 20px;
`;

export const CardsBox = styled.View`
  background-color: #e2e2e2;
  border-radius: 7px;
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-top: 2%;
  width: 95%;
  height: auto;
  min-height: 55px;
  flex-direction: row;
`;

export const CardsPlusCheckBox = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffa631;
  border-bottom-left-radius: 7px;
  border-top-left-radius: 7px;
  min-width: 40px;
  max-width: 40px;
  margin-right: 5px;
  padding: 5px;
`;

export const CardsPlusCheckBoxDisabled = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e2e2e2;
  border-bottom-left-radius: 7px;
  border-top-left-radius: 7px;
  min-width: 40px;
  max-width: 40px;
  margin-right: 5px;
  padding: 5px;
`;

export const CardsMinusCheckBox = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffa631;
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
  min-width: 40px;
  max-width: 40px;
  margin-left: 5px;
  padding: 5px;
`;

export const CardsMinusCheckBoxDisabled = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e2e2e2;
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
  min-width: 40px;
  max-width: 40px;
  margin-left: 5px;
  padding: 5px;
`;

export const IconBack = styled.View`
  position: absolute;
  background-color: #ffffff;
  border-radius: 100px;
  height: 15px;
  width: 15px;
`;

export const CardsBody = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
  background-color: #e2e2e2;
  padding: 10px;
`;

export const CardsTitle = styled.Text`
  color: #000000;
`;

export const CardsNotes = styled.Text`
  color: #8d8d8d;
`;
