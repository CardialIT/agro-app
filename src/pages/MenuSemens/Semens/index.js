import React, { useState, useEffect } from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import logoImg from "../../../assets/logo.png";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import api from "../../../services/api";
import moment from "moment";


export default function Reproductions({ navigation }) {
  const [semen, setSemens] = useState([]);


async function loadSemen(){
  const response = await api.get('semens');
  console.log(response.data);
  setSemens(response.data);
}

  async function deleteSemen(id) {
    await api
      .delete("semens/semen", {
        data: {
          id: id,
        },
      })
      .then((response) => {
        console.log("APAGANDO");
        console.log(response);
        loadSemen();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadSemen();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>Lista de semens</Text>
      </View>
      <View style={styles.header}>
        <Feather
          name="arrow-left"
          size={30}
          color="#000000"
          onPress={() => navigation.navigate("Home")}
        />

        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => navigation.navigate("AddSemens")}
        >

          <Text style={styles.textButton}>Novo +</Text>
        </TouchableOpacity>
      </View>
      {/*  <View style={styles.searchBox}>
        <TextInput style={styles.inputSearch}>
         
          <Feather name="search" size={15} color="#000000" onPress={() => {}} />
        </TextInput>
  </View> */}

      <FlatList
        data={semen}
        style={styles.animalsList}
        keyExtractor={(item, index) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.animalBox}>
   
            <View style={styles.property}>
            <Text style={styles.vacaProperty}>ID:</Text>
              <Text style={styles.vacaProperty}>Tipo:</Text>
              <Text style={styles.vacaProperty}>Nome do macho:</Text>
              <Text style={styles.vacaProperty}>Raça:</Text>

            </View>
            <View style={styles.value}>
           
            <Text style={styles.vacaValue}>{item.id}</Text>
            <Text style={styles.vacaValue}>{item.tipo}</Text>
            <Text style={styles.vacaValue}>{item.nome}</Text>
            <Text style={styles.vacaValue}>{item.raca}</Text>
           
              
            </View>

            <TouchableOpacity
              style={styles.trashButton}
              onPress={() => {deleteSemen(item.id)}}
              hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
            >
              <Feather
                name="trash"
                style={styles.deleteButton}
                size={25}
                color="#000000"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
