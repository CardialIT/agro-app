import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import logoImg from "../../../assets/logo.png";
import api from "../../../services/api";
import { Feather } from "@expo/vector-icons";
import DateField from "react-native-datefield";

import styles from "./styles";

export default function AddReproductions({ navigation }) {
  const [idVaca, setIdVaca] = useState("");
  const [dataDeInicio, setDataDeInicio] = useState("");
  const [dataDeFim, setDataDeFim] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const IdVacaHandler = (id) => {
    setIdVaca(id);
    console.log(id);
  };

  const DataDeInicioHandler = (data) => {
    setDataDeInicio(data);
    console.log(data);
  };

  const DataDeFimHandler = (data) => {
    setDataDeFim(data);
    console.log(data);
  };

  const postReproduction = async (event) => {
    await api
      .post(`/pastagens/pastagem`, {
        dataDeInicio: dataDeInicio,
        dataDeFim: dataDeFim,
        mae: {
          id: idVaca,
        },
      })
      .then((response) => {
        console.log(response.data);
        navigation.navigate("Pastagens");
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>Adicione uma pastagem</Text>
        <Feather
          name="arrow-left"
          size={30}
          color="#000000"
          onPress={() => navigation.navigate("Pastagens")}
        />
      </View>

      <FlatList
        data={[1]}
        keyExtractor={(item, index) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.body}>
            
            <Text style={styles.text}>Tipo</Text>
            <TextInput
              style={styles.input}
              value={idVaca}
              onChangeText={IdVacaHandler}
            />

<Text style={styles.text}>Área</Text>
            <TextInput
              style={styles.input}
              value={idVaca}
              onChangeText={IdVacaHandler}
            />

<Text style={styles.text}>Custo</Text>
            <TextInput
              style={styles.input}
              value={idVaca}
              onChangeText={IdVacaHandler}
            />

            <TouchableOpacity
              onPress={() => postReproduction()}
              style={styles.button}
            >
              <Text style={styles.textButton}>Salvar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View />
    </View>
  );
}
