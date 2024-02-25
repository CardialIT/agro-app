import React, { useState, useEffect } from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import logoImg from "../../../assets/logo.png";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import api from "../../../services/api";
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from "moment";


export default function Pastagens({ navigation }) {
  /*
  const [pastagens, setPastagens] = useState([]);
  //const navigation = useNavigation();

  // function navigateToAnimal(animalId) {
  //   navigation.navigate('Animal',  animalId );
  // }

  async function loadPastagens() {
    const response = await api
      .get("pastagens")
      .then(
    
        console.log("Listando")

      )
      .catch((err) => console.log(err));
    setPastagens(response.data);
    console.log(response.data);
  }



  useEffect(() => {
    loadPastagens();
  }, []);

  */

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>Lista de pastagens</Text>
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
          onPress={() => navigation.navigate("AddPastagens")}
        >
          <Text style={styles.textButton}>Novo +</Text>
        </TouchableOpacity>
      </View>
      {/*  <View style={styles.searchBox}>
        <TextInput style={styles.inputSearch}>
         
          <Feather name="search" size={15} color="#000000" onPress={() => {}} />
        </TextInput>
  </View> */}

    
          <View style={styles.animalBox}>
   
            <View style={styles.property}>
   
              <Text style={styles.vacaProperty}>Tipo:</Text>
              <Text style={styles.vacaProperty}>Área:</Text>
              <Text style={styles.vacaProperty}>Custo:</Text>
            </View>
            <View style={styles.value}>
           
            <Text style={styles.vacaValue}>1</Text>
            <Text style={styles.vacaValue}>1</Text>
            <Text style={styles.vacaValue}>1</Text>
           
              
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
     
    </View>
  );
}
