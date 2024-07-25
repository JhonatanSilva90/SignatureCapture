import React, { useRef } from "react";
import { View } from "react-native";
import Signature from "react-native-signature-canvas";
import { styles } from "./SignatureCaptureComponent.styles.js";

export const SignatureCaptureComponent = () => {
  const ref = useRef(null);

  const handleSignature = (signature) => {
    console.log(signature);
  };

  const handleEmpty = () => {
    console.log("Empty");
  };

  return (
    <View style={styles.container}>
      <View style={styles.signatureContainer}>
        <Signature
          ref={ref}
          onOK={handleSignature}
          onEmpty={handleEmpty}
          descriptionText="Assine aqui"
          clearText="Limpar"
          confirmText="Salvar"
          autoClear={true}
          webStyle={`
            .m-signature-pad--footer .button {
              background-color: green;
              color: white;
              font-size: 18px;
              border-radius: 5px;
              border: none;
            }
            .m-signature-pad--footer .button.clear {
              background-color: red;
            }

          `}
        />
      </View>
    </View>
  );
};
