import React from "react";
import { Text } from "react-native";
import {
  Container,
  LowerBoxRow,
  AvatarBox,
  BarsBox,
  BottomBox,
  ClassBox,
  MoneyBox,
} from "./styles";

const HeroHeader = ({ translateY }) => {
  return (
    <>
      <Container
        style={{
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [-200, 0, 200],
                outputRange: [-30, 10, 0],
                extrapolate: "clamp",
              }),
            },
          ],
          opacity: translateY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 1],
          }),
        }}
      >
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
      </Container>
    </>
  );
};

export default HeroHeader;
