import * as React from "react";
import { View, ScrollView, Alert } from "react-native";
import { Button, Text, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";

// Estilos
// import stylesHome from "../assets/styles/Home";
import { stylesHome, stylesNewHome } from "../assets/styles/Home";
import { stylesDetailChallenges } from "../assets/styles/DetailChallenges";


const RenderReta = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={stylesNewHome.container}>
        <View style={stylesNewHome.ContainerEquipo}>
          <Card style={stylesNewHome.CardStyle}>
            <Card.Title>
              {<MaterialIcons name="place" size={16} color="Detalles" />}
              Direccion
            </Card.Title>
            <Text>Colinia: </Text>
            <Text>Calle: </Text>
            <Text>Numero: </Text>
            <Text />
            <View style={{ width: "100%" }}>
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
                <View style={stylesNewHome.Datte}>
                  <Text>
                    {<MaterialIcons name="date-range" size={24} color="black" />}{" "}
                    15/06/2021
                  </Text>
                </View>
                <View style={stylesNewHome.Timme}>
                  <Text>
                    {<AntDesign name="clockcircle" size={18} color="black" />}{" "}
                    17:30
                  </Text>
                </View>
              </View>
              <Text />
              <Card.Divider />
              <Card.Title>Equipos</Card.Title>
              <View style={stylesNewHome.Teams}>
                <Card style={stylesNewHome.Team}>
                  <Text>
                    {<FontAwesome name="users" size={20} color="black" />}{" "}
                    Nombre
                  </Text>
                  <View style={stylesDetailChallenges.DetailsRules, { marginTop: 15 }}>
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
                  <View style={stylesNewHome.ButtonWatch}>
                    {/* <Button
                      title="Ver "
                      buttonStyle={{
                        backgroundColor: "red",
                      }}
                      icon={<Icon name="arrow-right" size={20} color="white" />}
                      onPress={() => navigation.navigate("Detalles")}
                    /> */}
                  </View>
                </Card>
                <Text />
                <Text />
                <Card.Title>VS</Card.Title>

                <Card style={stylesNewHome.Team}>
                  <Text>
                    {<FontAwesome name="users" size={20} color="black" />}{" "}
                    Nombre
                  </Text>
                  <View style={stylesDetailChallenges.DetailsRules, { marginTop: 15 }}>
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
                </Card>
              </View>
            </View>


          </Card>
          <View style={{ marginTop: 25 }}>
            <Button
              title="Pagar "
              buttonStyle={{
                backgroundColor: "red",
              }}
              // icon={<Icon name="arrow-right" size={20} color="white" />}
              // onPress={() => navigation.navigate("Pagos")}
              onPress={() => Alert.alert("PAGOS", "Tu pago es de $50")}
            />
          </View>
        </View>
      </View>
    </ScrollView >
  );
};

const App = ({ navigation }) => {
  return <RenderReta navigation={navigation}></RenderReta>;
};

export default App;
