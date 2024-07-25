import { SignatureCaptureInformation } from "../componentes/signatureCapture/SignatureCaptureInformation";
import { SignatureCaptureComponent } from "../componentes/sigantureCaptureComponent/SignatureCaptureComponent.jsx";
import { View, SafeAreaView } from "react-native";
import { styles } from "./SignatureCapture.styles.js";

export function SignatureCapture() {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <SignatureCaptureInformation />
          <SignatureCaptureComponent />
        </View>
      </SafeAreaView>
    </>
  );
}
