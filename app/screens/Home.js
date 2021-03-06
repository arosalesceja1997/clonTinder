import * as React from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { Formik, useFormik } from "formik";
import { Input, Button, Text, ButtonGroup } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import axios from 'react-native-axios'

// Estilos
import { stylesHome, stylesNewHome } from "../assets/styles/Home";

function PerfilScreen({ navigation }) {
  // const {fontsLoader, setfontLoader } = useState(false);
  const { values, isSubmitting, setFieldValue } = useFormik({
    initialValues: {
      cancha: "",
      datosCancha: "",
      equipo: "",
      datosEquipo: "",
      horario: "",
      fecha: "",
    },
    onSubmit: (values) => { },
  });

  // return (
  //   <View style={styles.container}>
  //     <View style={styles.datos}>
  //       <SafeAreaView>
  //         <ScrollView>
  //           <View>
  //             <View style={styles.media}>
  //               <Avatar.Image
  //                 size={150}
  //                 source={require("../assets/images/futbol.jpg")}
  //               />
  //               <View style={styles.separator}></View>
  //               <View style={styles.bottMedia}>
  //                 <TouchableOpacity
  //                   onPress={() => console.log("Editar imagen")}
  //                   style={styles.button}
  //                 >
  //                   <Text style={{ color: "white" }}>SUBE ARCHIVOS</Text>
  //                 </TouchableOpacity>
  //               </View>
  //             </View>
  //           </View>
  //         </ScrollView>
  //       </SafeAreaView>
  //     </View>
  //   </View>
  // );
}

const RenderCreateMatch = () => {
  const { values, isSubmitting, setFieldValue } = useFormik({
    initialValues: {
      cancha: "",
      datosCancha: "",
      equipo: "",
      datosEquipo: "",
      horario: "",
      fecha: "",
    },
    onSubmit: (values) => { },
  });

  const [text, setText] = React.useState(null);
  const [pass, setPass] = React.useState(null);

  return (
    <ScrollView>
      <View style={stylesHome.container}>
        <Text style={{ fontSize: 30 }}>Crear partido</Text>

        <View style={stylesHome.flex}>
          <Input
            placeholder="Cancha"
            leftIcon={<Icon name="futbol" size={24} color="gray" />}
            onChangeText={(text) => setText(text)}
            defaultValue={text}
          />
        </View>

        <View style={stylesHome.containerTeams}>
          <View style={stylesHome.flex}>
            <Input
              placeholder="Equipo 1"
              leftIcon={<Icon name="users" size={24} color="gray" />}
              onChangeText={(text) => setText(text)}
              defaultValue={text}
            />
          </View>

          <Text h4 style={stylesHome.txtCenter}>
            VS
          </Text>

          <View style={stylesHome.flex}>
            <Input
              placeholder="Equipo 2"
              leftIcon={<Icon name="users" size={24} color="gray" />}
              onChangeText={(text) => setText(text)}
              defaultValue={text}
            />
          </View>
        </View>

        <View style={stylesHome.flex}>
          <Input
            placeholder="Fecha"
            leftIcon={<Icon name="table" size={24} color="gray" />}
            onChangeText={(text) => setText(text)}
            defaultValue={text}
          />
        </View>

        <View style={stylesHome.flex}>
          <Input
            placeholder="Hora"
            leftIcon={<Icon name="clock" size={24} color="gray" />}
            onChangeText={(text) => setText(text)}
            defaultValue={text}
          />
        </View>

        <View style={(stylesHome.flex, stylesHome.button)}>
          <Button
            buttonStyle={{
              backgroundColor: "red",
            }}
            icon={<Icon name="arrow-right" size={20} color="white" />}
            iconRight
            title="Agregar "
          />
        </View>
      </View>
    </ScrollView>
  );
};

const RenderCreateTeam = () => {
  const { values, isSubmitting, setFieldValue } = useFormik({
    initialValues: {
      cancha: "",
      datosCancha: "",
      equipo: "",
      datosEquipo: "",
      horario: "",
      fecha: "",
    },
    onSubmit: (values) => { },
  });

  const [text, setText] = React.useState(null);
  const [pass, setPass] = React.useState(null);

  return (
    <ScrollView>
      <View style={stylesHome.container}>
        <Text style={{ fontSize: 30 }}>Crear equipo</Text>

        <View style={stylesHome.flex}>
          <Input
            placeholder="Nombre del equipo"
            leftIcon={<Icon name="users" size={24} color="gray" />}
            onChangeText={(text) => setText(text)}
            defaultValue={text}
          />
        </View>

        <View style={stylesHome.flex}>
          <Input
            placeholder="Cantidad de integreantes"
            leftIcon={<Icon name="list-ol" size={24} color="gray" />}
            onChangeText={(text) => setText(text)}
            defaultValue={text}
          />
        </View>

        <View style={stylesHome.flex}>
          <Input
            placeholder="Cantidad de integreantes"
            leftIcon={<Icon name="clock" size={24} color="gray" />}
            onChangeText={(text) => setText(text)}
            defaultValue={text}
          />
        </View>

        <View style={(stylesHome.flex, stylesHome.button)}>
          <Button
            buttonStyle={{
              backgroundColor: "red",
            }}
            icon={<Icon name="plus-circle" size={20} color="white" />}
            iconRight
            title="Agregar equipo "
          />
        </View>
      </View>
    </ScrollView>
  );
};

const RenderEditAccount = () => {
  return (
    <ScrollView>
      <View>
        <Text style={stylesHome.txtInput}>Smart photos</Text>
        <TextInput
          style={stylesHome.texto}
          placeholder={"Smart Photos analiza tus fotos de perfil"}
        ></TextInput>

        <Text style={stylesHome.texto}>Acerca de ti</Text>
        <TextInput
          style={stylesHome.txtInput}
          placeholder={"Escribe acerca de ti"}
        ></TextInput>

        <Text style={stylesHome.texto}>Intereses</Text>
        <TextInput
          style={stylesHome.txtInput}
          placeholder={"Agregar interese"}
        ></TextInput>

        <Text style={stylesHome.texto}>Puesto</Text>
        <TextInput
          style={stylesHome.txtInput}
          placeholder={"A??adir Puesto"}
        ></TextInput>

        <Text style={stylesHome.texto}>Compa??ia</Text>
        <TextInput
          style={stylesHome.txtInput}
          placeholder={"A??adir compa??ia"}
        ></TextInput>

        <Text style={stylesHome.texto}>Escuela</Text>
        <TextInput
          style={stylesHome.txtInput}
          placeholder={"Escuela"}
        ></TextInput>

        <Text style={stylesHome.texto}>Vives en</Text>
        <TextInput
          style={stylesHome.txtInput}
          placeholder={"A??adir ciudad"}
        ></TextInput>

        <Text style={stylesHome.texto}>Mostrar mis fotos de instagram</Text>
        <TextInput
          style={stylesHome.txtInput}
          placeholder={"Conectar con instagram"}
        ></TextInput>

        <Text style={stylesHome.texto}>Mi himno</Text>
        <TextInput
          style={stylesHome.txtInput}
          placeholder={"Elige un himno"}
        ></TextInput>
        <Text style={stylesHome.subtexto}>
          Controla como compartes tu Himno de Spotify
        </Text>

        <Text style={stylesHome.texto}>Mis artistas favoritos en Spotify</Text>
        <TextInput
          style={stylesHome.txtInput}
          placeholder={"Conectar con spotify"}
        ></TextInput>

        <Text style={stylesHome.texto}>Soy</Text>
        <TextInput
          style={stylesHome.txtInput}
          placeholder={"A??ade genero"}
        ></TextInput>

        <Text style={stylesHome.texto}>Orientacion Sexual</Text>
        <TextInput
          style={stylesHome.txtInput}
          placeholder={"A??ade Horienrientacion"}
        ></TextInput>

        <Text style={stylesHome.texto}>Controla tu perfil</Text>
        <TextInput
          style={stylesHome.txtInput}
          placeholder={"No mostrar mi edad"}
        ></TextInput>
        <TextInput
          style={stylesHome.txtInput}
          placeholder={"Hacer mi distancia invisible"}
        ></TextInput>

        <Text style={stylesHome.texto}></Text>
        <Text style={stylesHome.texto}></Text>
      </View>
    </ScrollView>
  );
};

const App1 = () => {
  const [button, setButton] = React.useState(0);
  const buttons = ["Crear partido", "Crear equipo", "Crear cancha", "Editar"];

  return (
    <React.Fragment>
      <View>
        <ButtonGroup
          onPress={(e) => setButton(e)}
          selectedIndex={button}
          buttons={buttons}
          containerStyle={{ height: 100 }}
        />
      </View>
      {button == 0 ? (
        <RenderCreateMatch></RenderCreateMatch>
      ) : button == 1 ? (
        <RenderCreateTeam></RenderCreateTeam>
      ) : button == 2 ? (
        <RenderEditAccount></RenderEditAccount>
      ) : (
        <Text>Pagina 4</Text>
      )}
    </React.Fragment>
  );
};

const RenderCardsReta = ({ response }) => {
  return (
    <View
      style={[
        stylesNewHome.ContainerReta,
        stylesNewHome.boxData,
        stylesNewHome.BoxShadow,
      ]}
    >
      <View style={stylesNewHome.nameReta}>
        <Text style={{ fontSize: 25 }}>
          <Image
            source={{
              uri: "https://image.flaticon.com/icons/png/512/27/27047.png",
            }}
            style={{ width: 30, height: 30 }}
          />
          {response.description}
        </Text>
      </View>

      <View style={stylesNewHome.spaces}>
        <Text style={{ fontSize: 25 }}>12/12</Text>
      </View>

      <View style={stylesNewHome.hour}>
        <Text>{response.date}</Text>
        <Text>{response.hour}</Text>
      </View>

      <View style={stylesNewHome.son}>
        <Button
          buttonStyle={{
            backgroundColor: "red",
          }}
          icon={<Icon name="arrow-right" size={15} color="white" />}
          onPress={() => navigation.navigate("Reta")}
        />
      </View>
    </View>
  )
};

const ConsumerApi = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    // Actualiza el t??tulo del documento usando la API del navegador
    axios.get('http://192.168.0.22:19001/machts')
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      {data.map((res) => {
        return <RenderCardsReta response={res}></RenderCardsReta>
      })}
    </React.Fragment>
  );
}

const App = ({ navigation }) => {
  const [button, setButton] = React.useState(0);
  const buttons = ["Crear partido", "Crear equipo", "Crear cancha", "Editar"];
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  let fecha = date + "-" + month + "-" + year;
  let response = {
    name: 'Cancha 1'
  }

  return (
    <React.Fragment>
      <ScrollView>
        <View style={stylesNewHome.container}>
          <View style={stylesNewHome.HomeSerach}>
            <View style={stylesNewHome.InputSerach}>
              <Input
                placeholder="Buscar"
                leftIcon={<Icon name="search" size={24} color="gray" />}
              />
            </View>

            <View style={stylesNewHome.ButtonSerach}>
              <Button
                buttonStyle={{
                  backgroundColor: "red",
                }}
                icon={<Icon name="arrow-right" size={20} color="white" />}
              />
            </View>
          </View>

          {/* Aqui inicia la reta */}

          {/* <RenderCardsReta response={response}></RenderCardsReta> */}
          <ConsumerApi></ConsumerApi>
          {/*Segunda cancha */}

          {/* <View
            style={[
              stylesNewHome.ContainerReta,
              stylesNewHome.boxData,
              stylesNewHome.BoxShadow,
            ]}
          >
            <View style={stylesNewHome.nameReta}>
              <Text style={{ fontSize: 24 }}>
                <Image
                  source={{
                    uri: "https://image.flaticon.com/icons/png/512/27/27047.png",
                  }}
                  style={{ width: 30, height: 30 }}
                />
                Cancha L??zaro Cardenas
              </Text>
            </View>

            <View style={stylesNewHome.spaces}>
              <Text style={{ fontSize: 25 }}>7/ Guadalajara</Text>
            </View>

            <View style={stylesNewHome.hour}>
              <Text>{fecha}</Text>
              <Text>18:05</Text>
            </View>

            <View style={stylesNewHome.son}>
              <Button
                buttonStyle={{
                  backgroundColor: "red",
                }}
                icon={<Icon name="arrow-right" size={15} color="white" />}
                onPress={() => navigation.navigate("Reta")}
              />
            </View>
          </View> */}

          {/* TERCERA CANCHA*/}

          {/* <View
            style={[
              stylesNewHome.ContainerReta,
              stylesNewHome.boxData,
              stylesNewHome.BoxShadow,
            ]}
          >
            <View style={stylesNewHome.nameReta}>
              <Text style={{ fontSize: 25 }}>
                <Image
                  source={{
                    uri: "https://image.flaticon.com/icons/png/512/27/27047.png",
                  }}
                  style={{ width: 30, height: 30 }}
                />
                Cancha rapido alco
              </Text>
            </View>

            <View style={stylesNewHome.spaces}>
              <Text style={{ fontSize: 25 }}>4/ Guadalajara</Text>
            </View>

            <View style={stylesNewHome.hour}>
              <Text>{fecha}</Text>
              <Text>20:05</Text>
            </View>

            <View style={stylesNewHome.son}>
              <Button
                buttonStyle={{
                  backgroundColor: "red",
                }}
                icon={<Icon name="arrow-right" size={15} color="white" />}
                onPress={() => navigation.navigate("Reta")}
              />
            </View>
          </View> */}

          {/* cUARTA CANCHA*/}
          {/* <View
            style={[
              stylesNewHome.ContainerReta,
              stylesNewHome.boxData,
              stylesNewHome.BoxShadow,
            ]}
          >
            <View style={stylesNewHome.nameReta}>
              <Text style={{ fontSize: 25 }}>
                <Image
                  source={{
                    uri: "https://image.flaticon.com/icons/png/512/27/27047.png",
                  }}
                  style={{ width: 30, height: 30 }}
                />
                Canchas F??tbol Rex
              </Text>
            </View>

            <View style={stylesNewHome.spaces}>
              <Text style={{ fontSize: 25 }}>3/ Guadalajara</Text>
            </View>

            <View style={stylesNewHome.hour}>
              <Text>{fecha}</Text>
              <Text>21:00</Text>
            </View>

            <View style={stylesNewHome.son}>
              <Button
                buttonStyle={{
                  backgroundColor: "red",
                }}
                icon={<Icon name="arrow-right" size={15} color="white" />}
                onPress={() => navigation.navigate("Reta")}
              />
            </View>
          </View> */}

          {/* Quinta */}

          {/* <View
            style={[
              stylesNewHome.ContainerReta,
              stylesNewHome.boxData,
              stylesNewHome.BoxShadow,
            ]}
          >
            <View style={stylesNewHome.nameReta}>
              <Text style={{ fontSize: 25 }}>
                <Image
                  source={{
                    uri: "https://image.flaticon.com/icons/png/512/27/27047.png",
                  }}
                  style={{ width: 30, height: 30 }}
                />
                Goal Factory
              </Text>
            </View>

            <View style={stylesNewHome.spaces}>
              <Text style={{ fontSize: 25 }}>3/ Zapopan</Text>
            </View>

            <View style={stylesNewHome.hour}>
              <Text>{fecha}</Text>
              <Text>20:00</Text>
            </View>

            <View style={stylesNewHome.son}>
              <Button
                buttonStyle={{
                  backgroundColor: "red",
                }}
                icon={<Icon name="arrow-right" size={15} color="white" />}
                onPress={() => navigation.navigate("Reta")}
              />
            </View>
          </View> */}


        </View>

      </ScrollView>
    </React.Fragment>
  );
};

export default App;
