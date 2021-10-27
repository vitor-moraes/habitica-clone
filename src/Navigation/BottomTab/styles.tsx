import styled from "styled-components/native";

export const Container = styled.View`

  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  align-content: space-around;
`;

export const TabBtn = styled.TouchableOpacity`
  background-color: #8400ff;
  justify-content: center;
  align-items: center;
  height: 65px;
  width: 21.1%;
`;

export const TextBtnFocused = styled.Text`
  color: #ffffff;
  font-size: 11px;
`;

export const TextBtn = styled.Text`
  color: #bbbbbb;
  font-size: 11px;
`;

export const AddBtn = styled.TouchableOpacity`
  position: absolute;
  transform: rotate(45deg);
  background-color: #b96eff;
  top: -58px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 5px;
  padding-left: 2px;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
`;

export const AddBtnBase = styled.View`
  top: 0px;
  justify-content: center;
  align-items: center;
  height: 0px;
  width: 0px;
  border-left-width: 35px;
  border-right-width: 35px;
  border-bottom-width: 30px;
  border-top-width: 35px;
  border-left-color: #8400ff;
  border-right-color: #8400ff;
  border-bottom-color: #8400ff;
  border-top-color: transparent;
`;
