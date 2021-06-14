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

// Estilos
import stylesHome from "../assets/styles/Home";

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
    onSubmit: (values) => {},
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
    onSubmit: (values) => {},
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
          placeholder={"Añadir Puesto"}
        ></TextInput>

        <Text style={stylesHome.texto}>Compañia</Text>
        <TextInput
          style={stylesHome.txtInput}
          placeholder={"Añadir compañia"}
        ></TextInput>

        <Text style={stylesHome.texto}>Escuela</Text>
        <TextInput
          style={stylesHome.txtInput}
          placeholder={"Escuela"}
        ></TextInput>

        <Text style={stylesHome.texto}>Vives en</Text>
        <TextInput
          style={stylesHome.txtInput}
          placeholder={"Añadir ciudad"}
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
          placeholder={"Añade genero"}
        ></TextInput>

        <Text style={stylesHome.texto}>Orientacion Sexual</Text>
        <TextInput
          style={stylesHome.txtInput}
          placeholder={"Añade Horienrientacion"}
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

const App = () => {
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

export default App;
