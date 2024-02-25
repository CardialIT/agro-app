import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

import parto from "../../assets/parto.png";
import grama from "../../assets/grama.png";
import cowOption from "../../assets/cowOption.png";
import semen from "../../assets/semen.png";
import reproductionOption from "../../assets/reproductionOption.png";
import milkOption from "../../assets/milkOption.png";
import vaccineOption from "../../assets/vaccineOption.png";
import decorationImage from "../../assets/Farmer-bro.png";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native-stack";
import api from "../../services/api";

export default function Home({ navigation }) {
  const [totalAnimals, setTotalAnimals] = useState("");
  const [totalReproductions, setTotalReproductions] = useState("");
  const [totalVaccines, setTotalVaccines] = useState("");
  async function totalReproductionsHandler() {
    const response = await api
      .get("reproducoes")
      .then(console.log("LISTANDO Reproducoes"))
      .catch((err) => console.log(err));
    console.log(response.data);
    const numberTotal = Object.keys(response.data).length;
    console.log(numberTotal);
    setTotalReproductions(numberTotal);
  }

  async function totalVaccinesHandler() {
    const response = await api
      .get("saudes")
      .then(console.log("LISTANDO Fichas de saude"))
      .catch((err) => console.log(err));
    console.log(response.data);
    const numberTotal = Object.keys(response.data).length;
    console.log(numberTotal);
    setTotalVaccines(numberTotal);
  }

  async function totalAnimalsHandler() {
    const response = await api
      .get("animais")
      .then(console.log("LISTANDO ANIMAIS"))
      .catch((err) => console.log(err));
    console.log(response.data);
    const numberTotal = Object.keys(response.data).length;
    console.log(numberTotal);
    setTotalAnimals(numberTotal);
  }

  useEffect(() => {
    console.log("chegou aqui");
    totalAnimalsHandler();
  });

  useEffect(() => {
    console.log("chegou aqui");
    totalReproductionsHandler();
  });

  useEffect(() => {
    console.log("chegou aqui");
    totalVaccinesHandler();
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textWelcome}>Bem-vindo, produtor(a)</Text>
        <Image style={styles.imageDecoration} source={decorationImage}></Image>
      </View>
      <View style={styles.totalBox}>
        <View style={styles.total}>
          <Text>Total de animais</Text>
          <Text style={styles.numberTotal}>{totalAnimals}</Text>
        </View>
        <View style={styles.total}>
          <Text>Total de reproduções</Text>
          <Text style={styles.numberTotal}>0</Text>
        </View>
        <View style={styles.total}>
          <Text>Total de animais vacinados</Text>
          <Text style={styles.numberTotal}>0</Text>
        </View>
      </View>

      <View style={styles.options}>
        <TouchableOpacity
          style={styles.buttonOption}
          onPress={() => navigation.navigate("Animals")}
        >
          <Image style={styles.iconOption} source={cowOption}></Image>
          <Text style={styles.textOption}>Animais</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonOption}
          onPress={() => navigation.navigate("Semens")}
        >
          <Image style={styles.iconOption} source={semen}></Image>
          <Text style={styles.textOption}>Semens</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.buttonOption} onPress={() => navigation.navigate("Inseminacoes")}
          
        >
          <Image style={styles.iconOption} source={reproductionOption}></Image>
          <Text style={styles.textOption}>Inseminações</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonOption}
          onPress={() => navigation.navigate("Parto")}
        >
          <Image style={styles.iconOption} source={parto}></Image>
          <Text style={styles.textOption}>Parto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.buttonOption} onPress={() => navigation.navigate("Pastagens")}>
          <Image style={styles.iconOption} source={grama}></Image>
          <Text style={styles.textOption}>Pastagem</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonOption}
          onPress={() => navigation.navigate("Vaccines")}
        >
          <Image style={styles.iconOption} source={vaccineOption}></Image>
          <Text style={styles.textOption}>Ficha de saúde</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
