import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
import Home from "./pages/Home/index";
import Animals from "./pages/MenuAnimals/Animals/index";
import AddAnimal from "./pages/MenuAnimals/AddAnimal/index";
import Semens from './pages/MenuSemens/Semens/index';
import AddSemens from './pages/MenuSemens/AddSemens/index';

import Pastagens from './pages/MenuPastagens/Pastagens/index';
import AddPastagens from './pages/MenuPastagens/AddPastagens/index';

import  Inseminacoes from './pages/MenuInseminacao/Inseminacoes/index';
import AddInseminacoes from './pages/MenuInseminacao/AddInseminacoes/index';

import Parto from './pages/MenuParto/Parto/index';
import AddParto from './pages/MenuParto/AddParto/index';




export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Animals" component={Animals} />
        <Stack.Screen name="AddAnimal" component={AddAnimal} />  
        <Stack.Screen name="Semens" component={Semens} />
        <Stack.Screen name="AddSemens" component={AddSemens} />  
       
       <Stack.Screen name="Pastagens" component={Pastagens} />
       <Stack.Screen name="AddPastagens" component={AddPastagens} />

       <Stack.Screen name="Inseminacoes" component={Inseminacoes} />
       <Stack.Screen name="AddInseminacoes" component={AddInseminacoes} />

       <Stack.Screen name="Parto" component={Parto} />
       <Stack.Screen name="AddParto" component={AddParto} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
