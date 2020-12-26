import styled from "styled-components/native";

export const Container = styled.View`
  /* background-color: #e4e4e4; */
  margin-top: 25px;
  justify-content: center;
  align-items: center;
`;

export const UpperBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
`;

export const LowerBox = styled.View`
  background-color: #5f5f5f;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  height: 130px;
  width: 100%;
`;

export const LowerBoxRow = styled.View`
  flex-direction: row;
  height: 80%;
`;

export const AvatarBox = styled.View`
  background-color: #d4d4d4;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;
`;

export const BarsBox = styled.View`
  background-color: #bebebe;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 100%;
`;

export const BottomBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
`;

export const ClassBox = styled.View`
  background-color: #a1a1a1;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 10px;
  width: 60%;
  height: 100%;
`;

export const MoneyBox = styled.View`
  background-color: #949494;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 10px;
  width: 40%;
  height: 100%;
`;

export const DrawerBtn = styled.TouchableOpacity`
  padding: 5px;
  width: 10%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const NameContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
  height: 40px;
  width: 70%;
`;

export const UserName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const IconContainer = styled.TouchableOpacity`
  width: 10%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;
