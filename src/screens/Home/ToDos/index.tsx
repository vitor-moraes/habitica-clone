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

const ToDos = () => {
  const [loading, setLoading] = useState(true);
  const [toDosData, setToDosData] = useState(null);
  const [refrashing, setRefrashing] = useState(true);

  const getToDosData = () => {
    try {
      setToDosData(testData);
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
      checked: false,
      title: "Título 2",
      notes: "Descrição 2 UASHUSAA AIUSHUAH auahshsa  asiuh iaus as",
      difficulty: 2, // 1 to 4
    },
    {
      id: 3,
      checked: false,
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
      </>
    );
  };

  useEffect(() => {
    getToDosData();
  }, []);

  const handleRefrash = () => {
    setRefrashing(true);
    getToDosData();
  };

  return (
    <>
      {toDosData !== null && loading === false ? (
        <Container>
         <FlatList
            data={toDosData}
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
                    name={"checkmark-circle-outline"}
                    size={25}
                    color={"#aaaaaa"}
                  />
                </NullIconBox>
                <NullTitle>You don't have any To Do's</NullTitle>
                <NullInfo>
                  To Do's are task that only need to be completes once. Add
                  checklist to your To Do's to incrise their value.
                </NullInfo>
              </NullBox>
            </NullContainer>
          )}
        </>
      )}
    </>
  );
};

export default ToDos;
