import * as React from "react";
import { View, ScrollView } from "react-native";
import { Text, Card, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

import { FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";

// Estilos
import { stylesDetailChallenges } from "../assets/styles/DetailChallenges";

const RenderDetailChallenges = ({ navigation }) => {
  return (
    <View style={stylesDetailChallenges.DetailsReta}>
      <Card>
        <Card.Title>
          {<MaterialIcons name="place" size={16} color="black" />}
          Ubicacion
        </Card.Title>
        <Card.Divider />
        <Text>Colinia: </Text>
        <Text>Calle: </Text>
        <Text>Numero: </Text>
        <Text></Text>
        <Card.Divider />
        <Card.Title>Fecha / Hora</Card.Title>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={stylesDetailChallenges.Datte}>
            <Text>
              {<MaterialIcons name="date-range" size={24} color="black" />}{" "}
              15/06/2021
            </Text>
          </View>
          {/* <Text>- A las -</Text> */}
          <View style={stylesDetailChallenges.Timme}>
            <Text>
              {<AntDesign name="clockcircle" size={18} color="black" />} 17:30
            </Text>
          </View>
        </View>
        <Text />
        <Card.Divider />
        <Card.Title>
          {<AntDesign name="doubleright" size={24} color="black" />} Reglas{" "}
          {<AntDesign name="doubleleft" size={24} color="black" />}
        </Card.Title>
        <View style={stylesDetailChallenges.DetailsRules}>
          <View style={stylesDetailChallenges.Rule}>
            <Text>
              {<FontAwesome name="circle" size={12} color="black" />}
              {"  "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <Text>
              {<FontAwesome name="circle" size={12} color="black" />}
              {"  "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>
        <Text />
        <Card.Divider />
        <Card.Title>
          {<FontAwesome name="users" size={40} color="black" />}
        </Card.Title>
        <View style={stylesDetailChallenges.DetailsPlayer}>
          <Text>
            {<FontAwesome name="user" size={16} color="black" />}
            {"  "}
            ???
          </Text>
          <Text>
            {<FontAwesome name="user" size={16} color="black" />}
            {"  "}
            ???
          </Text>
          <Text>
            {<FontAwesome name="user" size={16} color="black" />}
            {"  "}
            ???
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Button
            title="Pagar "
            buttonStyle={{
              backgroundColor: "red",
            }}
            icon={<Icon name="arrow-right" size={20} color="white" />}
            onPress={() => navigation.navigate("Pagos")}
          />
        </View>
      </Card>
    </View>
  );
};

const App = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={stylesDetailChallenges.container}>
        <RenderDetailChallenges navigation={navigation}></RenderDetailChallenges>
      </View>
    </ScrollView>
  );
};

export default App;
