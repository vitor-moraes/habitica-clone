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
  CardsBoxChecked,
  CardsCheckBox,
  CardsCheckMark,
  CardsCheckBoxChecked,
  CardsCheckMarkChecked,
  CardsBody,
  CardsBodyChecked,
  CardsTitle,
  CardsNotes,
} from "./styles";

const Dailies = () => {
  const [loading, setLoading] = useState(true);
  const [dailiesData, setDailiesData] = useState(null);
  const [refrashing, setRefrashing] = useState(true);

  const getDailiesData = () => {
    try {
      setDailiesData(testData);
      setTimeout(() => {
        setRefrashing(false);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const testData = [
    {
      id: 1,
      checked: false,
      title: "Título 1",
      notes: "Descrição 1",
      difficulty: 3, // 1 to 4
    },
    {
      id: 2,
      checked: true,
      title: "Título 2",
      notes: "Descrição 2 UASHUSAA AIUSHUAH auahshsa  asiuh iaus as",
      difficulty: 2, // 1 to 4
    },
    {
      id: 3,
      checked: true,
      title: "Título 3",
      notes:
        "Descrição 3 haushuah asdhsa dhsasa as oaisoiashoiashdihas aiod haod hais dhoaishdoias asiodahs",
      difficulty: 1, // 1 to 4
    },
    {
      id: 4,
      checked: true,
      title: "Título 4",
      notes: null,
      difficulty: 1, // 1 to 4
    },
    {
      id: 5,
      checked: false,
      title: "Título 5",
      notes: null,
      difficulty: 1, // 1 to 4
    },
    {
      id: 6,
      checked: true,
      title: "Título 6",
      notes: null,
      difficulty: 1, // 1 to 4
    },
    {
      id: 7,
      checked: false,
      title: "Título 7",
      notes: null,
      difficulty: 1, // 1 to 4
    },
    {
      id: 8,
      checked: true,
      title: "Título 8",
      notes: null,
      difficulty: 1, // 1 to 4
    },
    {
      id: 9,
      checked: false,
      title: "Título 9",
      notes: null,
      difficulty: 1, // 1 to 4
    },
    {
      id: 10,
      checked: false,
      title: "Título 10",
      notes: null,
      difficulty: 1, // 1 to 4
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <>
        {item.checked === false && (
          <CardsBox key={item.id.toString()}>
            <CardsCheckBox>
              <CardsCheckMark />
            </CardsCheckBox>
            <CardsBody>
              <CardsTitle>{item.title}</CardsTitle>
              {item.notes !== null && <CardsNotes>{item.notes}</CardsNotes>}
            </CardsBody>
          </CardsBox>
        )}
        {item.checked === true && (
          <CardsBoxChecked key={item.id.toString()}>
            <CardsCheckBoxChecked>
              <CardsCheckMarkChecked />
              <Ionicons name={"checkmark-sharp"} size={20} color={"#969696"} />
            </CardsCheckBoxChecked>
            <CardsBodyChecked>
              <CardsTitle>{item.title}</CardsTitle>
              {item.notes !== null && <CardsNotes>{item.notes}</CardsNotes>}
            </CardsBodyChecked>
          </CardsBoxChecked>
        )}
      </>
    );
  };

  useEffect(() => {
    getDailiesData();
  }, []);

  const handleRefrash = () => {
    setRefrashing(true);
    getDailiesData();
  };

  return (
    <>
      {dailiesData !== null && loading === false ? (
        <Container>
          <FlatList
            data={dailiesData}
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
                    name={"calendar-sharp"}
                    size={25}
                    color={"#aaaaaa"}
                  />
                </NullIconBox>
                <NullTitle>You don't have any Dailies</NullTitle>
                <NullInfo>
                  Dailies are tasks that repeat on a regular basis. Choose the
                  schedule that works for you!
                </NullInfo>
              </NullBox>
            </NullContainer>
          )}
        </>
      )}
    </>
  );
};

export default Dailies;
