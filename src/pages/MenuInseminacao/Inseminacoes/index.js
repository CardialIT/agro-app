import React, { useState, useEffect } from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import logoImg from "../../../assets/logo.png";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import api from "../../../services/api";
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from "moment";


export default function Reproductions({ navigation }) {
  const [reproductions, setReproductions] = useState([]);
  //const navigation = useNavigation();

  // function navigateToAnimal(animalId) {
  //   navigation.navigate('Animal',  animalId );
  // }

  async function loadReproductions() {
    const response = await api
      .get("semens")
      .then(console.log("LISTANDO Inseminações"))
      .catch((err) => console.log(err));
    setReproductions(response.data);
  }

  async function deleteAnimal(id) {
    await api
      .delete("semens/semen", {
        data: {
          id: id,
        },
      })
      .then((response) => {
        console.log("APAGANDO");
        console.log(response);
        loadAnimals();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadReproductions();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>Lista de inseminações</Text>
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
          onPress={() => navigation.navigate("AddInseminacoes")}
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
        data={reproductions}
        style={styles.animalsList}
        keyExtractor={(item, index) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.animalBox}>
   
            <View style={styles.property}>
   
              <Text style={styles.vacaProperty}>Vaca:</Text>
              <Text style={styles.vacaProperty}>Semen:</Text>
              
            </View>
            <View style={styles.value}>
           
            <Text style={styles.vacaValue}>{moment(item.vaca)}</Text>
            <Text style={styles.vacaValue}>{moment(item.semen)}</Text>
           
              
            </View>

            <TouchableOpacity
              style={styles.trashButton}
              onPress={() => {}}
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
