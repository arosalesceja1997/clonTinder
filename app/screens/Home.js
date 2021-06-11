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
import { Form, Item, Label, InputUI, ButtonUI, Picker } from "native-base";
import { Input, Button, Text, ButtonGroup } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
// import { createIconSet } from "react-native-vector-icons";
// const Icon = createIconSet();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Login")}
      /> */}
    </View>
  );

  // const [count, setCount] = React.useState(0);

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
  //     ),
  //   });
  // }, [navigation]);

  // return <Text>Count: {count}</Text>;
}

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
    onSubmit: (values) => {},
  });

  return (
    <View style={styles.container}>
      <View style={styles.datos}>
        <SafeAreaView>
          <ScrollView>
            <View>
              <View style={styles.media}>
                {/* <Avatar.Image
                  size={150}
                  source={require("../assets/images/futbol.jpg")}
                /> */}
                <View style={styles.separator}></View>
                <View style={styles.bottMedia}>
                  <TouchableOpacity
                    onPress={() => console.log("Editar imagen")}
                    style={styles.button}
                  >
                    <Text style={{ color: "white" }}>SUBE ARCHIVOS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.txtInput}>Smart photos</Text>
              <TextInput
                style={styles.texto}
                placeholder={"Smart Photos analiza tus fotos de perfil"}
              ></TextInput>

              <Text style={styles.texto}>Acerca de ti</Text>
              <TextInput
                style={styles.txtInput}
                placeholder={"Escribe acerca de ti"}
              ></TextInput>

              <Text style={styles.texto}>Intereses</Text>
              <TextInput
                style={styles.txtInput}
                placeholder={"Agregar interese"}
              ></TextInput>

              <Text style={styles.texto}>Puesto</Text>
              <TextInput
                style={styles.txtInput}
                placeholder={"Añadir Puesto"}
              ></TextInput>

              <Text style={styles.texto}>Compañia</Text>
              <TextInput
                style={styles.txtInput}
                placeholder={"Añadir compañia"}
              ></TextInput>

              <Text style={styles.texto}>Escuela</Text>
              <TextInput
                style={styles.txtInput}
                placeholder={"Escuela"}
              ></TextInput>

              <Text style={styles.texto}>Vives en</Text>
              <TextInput
                style={styles.txtInput}
                placeholder={"Añadir ciudad"}
              ></TextInput>

              <Text style={styles.texto}>Mostrar mis fotos de instagram</Text>
              <TextInput
                style={styles.txtInput}
                placeholder={"Conectar con instagram"}
              ></TextInput>

              <Text style={styles.texto}>Mi himno</Text>
              <TextInput
                style={styles.txtInput}
                placeholder={"Elige un himno"}
              ></TextInput>
              <Text style={styles.subtexto}>
                Controla como compartes tu Himno de Spotify
              </Text>

              <Text style={styles.texto}>
                Mis artistas favoritos en Spotify
              </Text>
              <TextInput
                style={styles.txtInput}
                placeholder={"Conectar con spotify"}
              ></TextInput>

              <Text style={styles.texto}>Soy</Text>
              <TextInput
                style={styles.txtInput}
                placeholder={"Añade genero"}
              ></TextInput>

              <Text style={styles.texto}>Orientacion Sexual</Text>
              <TextInput
                style={styles.txtInput}
                placeholder={"Añade Horienrientacion"}
              ></TextInput>

              <Text style={styles.texto}>Controla tu perfil</Text>
              <TextInput
                style={styles.txtInput}
                placeholder={"No mostrar mi edad"}
              ></TextInput>
              <TextInput
                style={styles.txtInput}
                placeholder={"Hacer mi distancia invisible"}
              ></TextInput>

              <Text style={styles.texto}></Text>
              <Text style={styles.texto}></Text>
            </View>
            <View>
              <View>
                {/* <View style={{ backgroundColor: "lightblue" }}>
                    <Text> Crear Cancha </Text>
                    <TextInput style={styles.txtInput} 
                    placeholder={'Typo'}
                    ></TextInput>
                    <TextInput style={styles.txtInput} 
                    placeholder={'Datos adicionales de la cancha'}
                    ></TextInput>
                    <View  style={{height: 300, backgroundColor: "red"}}>
                      <Image
                      source={require("../assets/images/cancha.jpg")}
                      style={{resizeMode: 'contain', width: "70%" }}
                      />
                    </View>
                    <View style={styles.bottMedia}>
                        <TouchableOpacity    
                        onPress={() => console.log("Editar imagen")}
                        style={styles.button}>
                            <Text style={{color: "white"}}>GUARDAR</Text>
                        </TouchableOpacity>
                      </View>
                    <Text></Text>
                  </View> */}
              </View>

              <View style={{ marginTop: 50, backgroundColor: "lightblue" }}>
                <Text style={{ fontSize: 30 }}>Crear cancha</Text>
                <Form>
                  <Item floatingLabel>
                    <Label>Nombre o Typo de cancha</Label>
                    <Input
                      value={values.cancha}
                      onChangeText={(text) => setFieldValue("cancha", text)}
                    />
                  </Item>
                  <Item floatingLabel>
                    <Label>Datos adicionales</Label>
                    <Input
                      value={values.datosCancha}
                      onChangeText={(text) =>
                        setFieldValue("datosCancha", text)
                      }
                    />
                  </Item>
                </Form>
                <View style={{ height: 300, backgroundColor: "red" }}>
                  <Image
                    source={require("../assets/images/cancha.jpg")}
                    style={{ resizeMode: "contain", width: "70%" }}
                  />
                </View>
                <Button>
                  <Text>GUARDAR</Text>
                </Button>
              </View>

              <View>
                {/* <View style={{ marginTop: 50, backgroundColor: "lightblue" }}>
                      <Text> Crear Equipo </Text>
                      <TextInput style={styles.txtInput} 
                      placeholder={'Nombre del equipo'}
                      ></TextInput>
                      <TextInput style={styles.txtInput} 
                      placeholder={'Descripcion del uniforme'}
                      ></TextInput>
                      <View style={styles.bottMedia}>
                          <TouchableOpacity    
                          onPress={() => console.log("Editar imagen")}
                          style={styles.button}>
                              <Text style={{color: "white"}}>GUARDAR</Text>
                          </TouchableOpacity>
                        </View>
                    </View> */}
              </View>

              <View style={{ marginTop: 50, backgroundColor: "lightblue" }}>
                <Form>
                  <Text style={{ fontSize: 30 }}>Crear equipo</Text>
                  <Item floatingLabel>
                    <Label>Nombre del equipo</Label>
                    <Input
                      value={values.equipo}
                      onChangeText={(text) => setFieldValue("equipo", text)}
                    />
                  </Item>
                  <Item floatingLabel>
                    <Label>Descripcion del uniforme</Label>
                    <Input
                      value={values.datosEquipo}
                      onChangeText={(text) =>
                        setFieldValue("datosEquipo", text)
                      }
                    />
                  </Item>
                  <Button>
                    <Text>GUARDAR</Text>
                  </Button>
                </Form>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
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
    onSubmit: (values) => {},
  });

  const [text, setText] = React.useState(null);
  const [pass, setPass] = React.useState(null);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>Crear partido</Text>

        <View style={styles.flex}>
          <Input
            placeholder="Cancha"
            leftIcon={<Icon name="futbol" size={24} color="gray" />}
            onChangeText={(text) => setText(text)}
            defaultValue={text}
          />
        </View>

        <View style={styles.containerTeams}>
          <View style={styles.flex}>
            <Input
              placeholder="Equipo 1"
              leftIcon={<Icon name="users" size={24} color="gray" />}
              onChangeText={(text) => setText(text)}
              defaultValue={text}
            />
          </View>

          <Text h4 style={styles.txtCenter}>
            VS
          </Text>

          <View style={styles.flex}>
            <Input
              placeholder="Equipo 2"
              leftIcon={<Icon name="users" size={24} color="gray" />}
              onChangeText={(text) => setText(text)}
              defaultValue={text}
            />
          </View>
        </View>

        <View style={styles.flex}>
          <Input
            placeholder="Fecha"
            leftIcon={<Icon name="table" size={24} color="gray" />}
            onChangeText={(text) => setText(text)}
            defaultValue={text}
          />
        </View>

        <View style={styles.flex}>
          <Input
            placeholder="Hora"
            leftIcon={<Icon name="clock" size={24} color="gray" />}
            onChangeText={(text) => setText(text)}
            defaultValue={text}
          />
        </View>

        <View style={(styles.flex, styles.button)}>
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
    onSubmit: (values) => {},
  });

  const [text, setText] = React.useState(null);
  const [pass, setPass] = React.useState(null);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>Crear equipo</Text>

        <View style={styles.flex}>
          <Input
            placeholder="Nombre del equipo"
            leftIcon={<Icon name="users" size={24} color="gray" />}
            onChangeText={(text) => setText(text)}
            defaultValue={text}
          />
        </View>

        <View style={styles.flex}>
          <Input
            placeholder="Cantidad de integreantes"
            leftIcon={<Icon name="list-ol" size={24} color="gray" />}
            onChangeText={(text) => setText(text)}
            defaultValue={text}
          />
        </View>

        <View style={styles.flex}>
          <Input
            placeholder="Cantidad de integreantes"
            leftIcon={<Icon name="clock" size={24} color="gray" />}
            onChangeText={(text) => setText(text)}
            defaultValue={text}
          />
        </View>

        <View style={(styles.flex, styles.button)}>
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

const App = () => {
  const [button, setButton] = React.useState(0);
  const buttons = ["Crear partido", "Crear equipo", "Crear cancha"];

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
      ) : (
        <Text>Pagina 3</Text>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 10,
    paddingLeft: 5,
    paddingTop: 50,
    // width: "100%",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  flex: {
    flex: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "2%",
    width: "100%",
  },
  form: {
    width: "100%",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  containerTeams: {
    backgroundColor: "#eee",
    borderWidth: 1,
    borderRadius: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  txtCenter: {
    textAlign: "center",
  },
  containerButtons: {},
});

export default App;
