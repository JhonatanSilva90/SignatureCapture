import { TextBox } from "../textBox/TextBox.jsx";
import { styles } from "./SignatureCaptureInformation.styles.js";
import { View } from "react-native";

import { useState } from "react";

export function SignatureCaptureInformation({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <TextBox
          text="Nome do aprovador(a)"
          placeholder="Nome do aprovador(a)"
        />
        <TextBox
          text="Matrícula do aprovador(a)"
          placeholder="Matrícula do aprovador(a)"
        />
      </View>
    </>
  );
}
