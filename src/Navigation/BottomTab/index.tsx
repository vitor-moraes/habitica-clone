import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Alert } from "react-native";

import {
  Container,
  Row,
  TabBtn,
  TextBtn,
  TextBtnFocused,
  AddBtn,
  AddBtnBase,
} from "./styles";

import Habits from "../../screens/Home/Habits";
import Dailies from "../../screens/Home/Dailies";
import ToDos from "../../screens/Home/ToDos";
import Rewards from "../../screens/Home/Rewards";

import HeroHeader from "../../components/HeroHeader";

const BottomTab = createMaterialTopTabNavigator();
const TabStack = createStackNavigator();

const TabBar = (props) => {
  return (
    <Container>
      <Row>
        <TabBtn onPress={() => props.navigation.navigate("Habits")}>
          <Ionicons
            name={props.state.index === 0 ? "add-circle" : "add-circle-outline"}
            size={25}
            color={props.state.index === 0 ? "#ffffff" : "#bbbbbb"}
          />
          {props.state.index === 0 ? (
            <TextBtnFocused>Habits</TextBtnFocused>
          ) : (
            <TextBtn>Habits</TextBtn>
          )}
        </TabBtn>
        <TabBtn onPress={() => props.navigation.navigate("Dailies")}>
          <Ionicons
            name={props.state.index === 1 ? "calendar" : "calendar-sharp"}
            size={25}
            color={props.state.index === 1 ? "#ffffff" : "#bbbbbb"}
          />
          {props.state.index === 1 ? (
            <TextBtnFocused>Dailies</TextBtnFocused>
          ) : (
            <TextBtn>Dailies</TextBtn>
          )}
        </TabBtn>
        <AddBtnBase>
          <AddBtn
            onPress={() =>
              Alert.alert(
                "Quase lá!",
                "Aqui será adicionado o botão principal de adição de elemento",
                [{ text: "Certo" }]
              )
            }
          >
            <Ionicons
              style={{ transform: [{ rotate: "45deg" }] }}
              name={"add-sharp"}
              size={30}
              color={"#ffffff"}
            />
          </AddBtn>
        </AddBtnBase>
        <TabBtn onPress={() => props.navigation.navigate("ToDos")}>
          <Ionicons
            name={
              props.state.index === 2
                ? "checkmark-circle"
                : "checkmark-circle-outline"
            }
            size={25}
            color={props.state.index === 2 ? "#ffffff" : "#bbbbbb"}
          />
          {props.state.index === 2 ? (
            <TextBtnFocused>To Do's</TextBtnFocused>
          ) : (
            <TextBtn>To Do's</TextBtn>
          )}
        </TabBtn>
        <TabBtn onPress={() => props.navigation.navigate("Rewards")}>
          <Ionicons
            name={props.state.index === 3 ? "ribbon" : "ribbon-outline"}
            size={25}
            color={props.state.index === 3 ? "#ffffff" : "#bbbbbb"}
          />
          {props.state.index === 3 ? (
            <TextBtnFocused>Rewards</TextBtnFocused>
          ) : (
            <TextBtn>Rewards</TextBtn>
          )}
        </TabBtn>
      </Row>
    </Container>
  );
};

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarPosition="bottom"
      tabBar={(props) => <TabBar {...props} />}
    >
      <BottomTab.Screen name="Habits" component={Habits} />
      <BottomTab.Screen name="Dailies" component={Dailies} />
      <BottomTab.Screen
        name="ToDos"
        component={ToDos}
        options={{ title: "To Do's" }}
      />
      <BottomTab.Screen name="Rewards" component={Rewards} />
    </BottomTab.Navigator>
  );
}

const BottomTabStack = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        header: (props) => {
          return (
            <>
              <HeroHeader {...props} />
            </>
          );
        },
      }}
    >
      <TabStack.Screen name="Tab" component={BottomTabNavigator} />
    </TabStack.Navigator>
  );
};

export default BottomTabStack;
