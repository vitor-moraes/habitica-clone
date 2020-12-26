import React from "react";
import { View, Text, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  Container,
  UpperBox,
  LowerBox,
  LowerBoxRow,
  AvatarBox,
  BarsBox,
  BottomBox,
  ClassBox,
  MoneyBox,
  DrawerBtn,
  NameContainer,
  UserName,
  IconContainer,
} from "./styles";

const HeroHeader = (props) => {
  return (
    <Container>
      <UpperBox>
        <DrawerBtn
          onPress={() => {
            props.navigation.openDrawer();
          }}
        >
          <Ionicons name={"menu"} size={20} color={"#1b1b1b"} />
        </DrawerBtn>
        <NameContainer>
          <UserName>Nome do usuário</UserName>
        </NameContainer>
        <IconContainer
          onPress={() =>
            Alert.alert(
              "Quase lá!",
              "Aqui será adicionado o botão principal de busca dos elementos",
              [{ text: "Certo" }]
            )
          }
        >
          <Ionicons name={"search-sharp"} size={20} color={"#1b1b1b"} />
        </IconContainer>
        <IconContainer
          onPress={() =>
            Alert.alert(
              "Quase lá!",
              "Aqui será adicionado o botão principal de filtro dos elementos",
              [{ text: "Certo" }]
            )
          }
        >
          <Ionicons name={"filter-sharp"} size={20} color={"#1b1b1b"} />
        </IconContainer>
      </UpperBox>
      {/* <LowerBox>
        <LowerBoxRow>
          <AvatarBox>
            <Text>AvatarBox</Text>
          </AvatarBox>
          <BarsBox>
            <Text>BarsBox</Text>
          </BarsBox>
        </LowerBoxRow>
        <BottomBox>
          <ClassBox>
            <Text>ClassBox</Text>
          </ClassBox>
          <MoneyBox>
            <Text>MoneyBox</Text>
          </MoneyBox>
        </BottomBox>
      </LowerBox> */}
    </Container>
  );
};

export default HeroHeader;
