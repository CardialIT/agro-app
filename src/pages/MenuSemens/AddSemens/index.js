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
  const [nome, setName] = useState("");
  const [tipo, setTipo] = useState("");
  const [raca, setRaca] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  
  const onChangeNameHandler = (nome) => {
    setName(nome);
    console.log(nome);
  };

  const onChangeTipoHandler = (tipo) => {
    setTipo(tipo);
    console.log(tipo);
  };

  const onChangeRacaHandler = (raca) => {
    setRaca(raca);
    console.log(raca);
  };

  const postSemen = async () => {
    await api
      .post(`/semens/semen`, {
        nome: nome,
        tipo: tipo,
        raca: raca,
      })
      .then((response) => {
        console.log(response.data);
        navigation.navigate("Semens");
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>Adicione um semen</Text>
        <Feather
          name="arrow-left"
          size={30}
          color="#000000"
          onPress={() => navigation.navigate("Semens")}
        />
      </View>

      <FlatList
        data={[1]}
        keyExtractor={(item, index) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.body}>
            <Text style={styles.text}>Nome</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={onChangeNameHandler}
            />

            <Text style={styles.text}>Tipo</Text>
            <TextInput
              style={styles.input}
              value={tipo}
              onChangeText={onChangeTipoHandler}
            />

            <Text style={styles.text}>Raca</Text>
            <TextInput
              style={styles.input}
              value={raca}
              onChangeText={onChangeRacaHandler}
            />

            <TouchableOpacity onPress={() => postSemen()} style={styles.button}>
              <Text style={styles.textButton}>Salvar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View />
    </View>
  );
}
