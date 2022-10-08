import * as React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSplash } from "../../assets";
import { Logokpcpen, Logokominfo, Logokemenkes, Logobumn } from "../../assets";

export default SplashScreen = ({ navigation }) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace("LoginScreen");
    }, 3000);
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" animated={true} color="#61dafb" />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Image
          source={IconSplash}
          style={{
            resizeMode: "center",
          }}
        />
      </View>

      <View>
        <Text
          style={{
            marginStart: 20,
            fontSize: 15,
            marginBottom: 3,
          }}>
          Bekerjasama Dengan :{" "}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 25,
        }}>
        <View style={{ padding: 10 }}>
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode={"contain"}
            source={Logokpcpen}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Image
            style={{ width: 100, height: 50 }}
            resizeMode={"contain"}
            source={Logokominfo}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Image
            style={{ width: 100, height: 50 }}
            resizeMode={"contain"}
            source={Logokemenkes}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Image
            style={{ width: 100, height: 40 }}
            resizeMode={"contain"}
            source={Logobumn}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
