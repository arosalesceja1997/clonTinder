import * as React from "react";
import {
  View,
  ScrollView,
} from "react-native";
import {
  Button,
  Text,
  Card,
} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

// Estilos
// import stylesHome from "../assets/styles/Home";
import { stylesHome, stylesNewHome } from "../assets/styles/Home";

const RenderPayment = () => {
  return (
    <ScrollView>
      <View style={stylesNewHome.container}>
        <View style={stylesNewHome.Cost}>
          <Card>
            <View style={stylesNewHome.CostData}>
              <Text style={{ textAlign: "center" }}>Esta Reta</Text>
              <Text style={{ textAlign: "center" }}>Cuesta $50</Text>
              <View style={stylesNewHome.ButtonWatch}>
                <Button
                  buttonStyle={{
                    backgroundColor: "red",
                  }}
                  icon={<Icon name="arrow-right" size={20} color="white" />}
                />
              </View>
            </View>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

const App = () => {
  const [button, setButton] = React.useState(0);
  const buttons = ["Crear partido", "Crear equipo", "Crear cancha", "Editar"];

  return (
    <React.Fragment>
      <RenderPayment></RenderPayment>
    </React.Fragment>
  );
};

export default App;