import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  NullContainer,
  NullBox,
  NullIconBox,
  NullTitle,
  NullInfo,
  CardsBox,
  CardsPlusCheckBox,
  CardsPlusCheckBoxDisabled,
  CardsMinusCheckBox,
  CardsMinusCheckBoxDisabled,
  IconBack,
  CardsBody,
  CardsTitle,
  CardsNotes,
} from "./styles";

const Habits = () => {
  const [loading, setLoading] = useState(true);
  const [habitsData, setHabitsData] = useState(null);
  const [refrashing, setRefrashing] = useState(true);

  const getHabitsData = () => {
    try {
      setHabitsData(testData);
      setTimeout(() => {
        setRefrashing(false);
        setLoading(false);
      }, 2000);
    } catch (error) {}
  };

  const testData = [
    {
      id: 1,
      title: "Título 1",
      notes: "Descrição 1",
      difficulty: 3, // 1 to 4
      havePlusBtn: true,
      haveMinusBtn: true,
    },
    {
      id: 2,
      title: "Título 2",
      notes: "Descrição 2 UASHUSAA AIUSHUAH auahshsa  asiuh iaus as",
      difficulty: 2, // 1 to 4
      havePlusBtn: true,
      haveMinusBtn: false,
    },
    {
      id: 3,
      title: "Título 3",
      notes:
        "Descrição 3 haushuah asdhsa dhsasa as oaisoiashoiashdihas aiod haod hais dhoaishdoias asiodahs",
      difficulty: 1, // 1 to 4
      havePlusBtn: false,
      haveMinusBtn: true,
    },
    {
      id: 4,
      title: "Título 4",
      notes: null,
      difficulty: 1, // 1 to 4
      havePlusBtn: true,
      haveMinusBtn: true,
    },
    {
      id: 5,
      title: "Título 5",
      notes: null,
      difficulty: 1, // 1 to 4
      havePlusBtn: true,
      haveMinusBtn: true,
    },
    {
      id: 6,
      title: "Título 6",
      notes: null,
      difficulty: 1, // 1 to 4
      havePlusBtn: true,
      haveMinusBtn: true,
    },
    {
      id: 7,
      title: "Título 7",
      notes: null,
      difficulty: 1, // 1 to 4
      havePlusBtn: true,
      haveMinusBtn: true,
    },
    {
      id: 8,
      title: "Título 8",
      notes: null,
      difficulty: 1, // 1 to 4
      havePlusBtn: true,
      haveMinusBtn: true,
    },
    {
      id: 9,
      title: "Título 9",
      notes: null,
      difficulty: 1, // 1 to 4
      havePlusBtn: true,
      haveMinusBtn: true,
    },
    {
      id: 10,
      title: "Título 10",
      notes: null,
      difficulty: 1, // 1 to 4
      havePlusBtn: true,
      haveMinusBtn: true,
    },
  ];

  useEffect(() => {
    getHabitsData();
  }, []);

  const handleRefrash = () => {
    setRefrashing(true);
    getHabitsData();
  };

  const renderItem = ({ item }) => {
    return (
      <CardsBox key={item.id.toString()}>
        {item.havePlusBtn === true ? (
          <CardsPlusCheckBox>
            <IconBack />
            <Ionicons name={"add-circle"} size={25} color={"#ff9100"} />
          </CardsPlusCheckBox>
        ) : (
          <CardsPlusCheckBoxDisabled>
            <Ionicons name={"add-circle-outline"} size={25} color={"#b3b3b3"} />
          </CardsPlusCheckBoxDisabled>
        )}
        <CardsBody>
          <CardsTitle>{item.title}</CardsTitle>
          {item.notes !== null && <CardsNotes>{item.notes}</CardsNotes>}
        </CardsBody>
        {item.haveMinusBtn === true ? (
          <CardsMinusCheckBox>
            <IconBack />
            <Ionicons name={"remove-circle"} size={25} color={"#ff9100"} />
          </CardsMinusCheckBox>
        ) : (
          <CardsMinusCheckBoxDisabled>
            <Ionicons
              name={"remove-circle-outline"}
              size={25}
              color={"#b3b3b3"}
            />
          </CardsMinusCheckBoxDisabled>
        )}
      </CardsBox>
    );
  };

  return (
    <>
      {habitsData !== null && loading === false ? (
        <Container>
          <FlatList
            data={habitsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            refreshing={refrashing}
            onRefresh={() => handleRefrash()}
          />
        </Container>
      ) : (
        <>
          {loading === true ? (
            <NullContainer>
              <NullBox>
                <NullTitle>Carregando</NullTitle>
              </NullBox>
            </NullContainer>
          ) : (
            <NullContainer>
              <NullBox>
                <NullIconBox>
                  <Ionicons
                    name={"add-circle-outline"}
                    size={25}
                    color={"#aaaaaa"}
                  />
                </NullIconBox>
                <NullTitle>You don't have any Habits</NullTitle>
                <NullInfo>
                  Habits are tasks that don't have a rigid schadule. You can
                  check them off many times a day, or not at all.
                </NullInfo>
              </NullBox>
            </NullContainer>
          )}
        </>
      )}
    </>
  );
};

export default Habits;
