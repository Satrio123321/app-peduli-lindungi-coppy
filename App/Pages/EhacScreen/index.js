import * as React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

import { LogoBgEhac, LogoEhacCreate, LogoEhacMyE } from "../../assets";

export default EhacScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" animated={true} color="#61dafb" />

        <ImageBackground
          source={LogoBgEhac}
          style={{ paddingBottom: 200 }}
          resizeMode={"stretch"}>
          <View
            style={{
              marginTop: 25,
              flexDirection: "row",
              alignItems: "center",
            }}>
            <View
              style={{
                marginHorizontal: 20,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreen")}>
                <Ionicons name="arrow-back-sharp" size={30}>
                  {" "}
                </Ionicons>
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}>
                Ehac
              </Text>
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            marginTop: 40,
            padding: 20,
            flexDirection: "row",
            borderWidth: 1,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderColor: "#E8E8E8",
            marginHorizontal: 20,
            elevation: 1,
          }}>
          <View style={{}}>
            <Image
              style={{
                width: 110,
                height: 110,
                borderWidth: 0,
                borderRadius: 20,
              }}
              resizeMode={"stretch"}
              source={LogoEhacCreate}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginStart: 10,
              }}>
              Covid-19 Vacccination{" "}
            </Text>
            <Text
              style={{
                fontSize: 17,
                marginStart: 25,
                color: "#8A8A8A",
              }}>
              See your vaccine certificate{" "}
            </Text>
            <Text
              style={{
                fontSize: 17,
                marginStart: 25,
                color: "#8A8A8A",
              }}>
              here{" "}
            </Text>
          </View>
        </View>

        <View
          style={{
            padding: 20,
            flexDirection: "row",
            borderWidth: 2,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            marginHorizontal: 20,
            borderColor: "#E8E8E8",
            elevation: 1,
          }}>
          <View style={{}}>
            <Image
              style={{
                width: 110,
                height: 110,
                borderWidth: 0,
                borderRadius: 20,
              }}
              resizeMode={"stretch"}
              source={LogoEhacMyE}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginStart: 10,
              }}>
              Check-In Verification{" "}
            </Text>
            <Text
              style={{
                fontSize: 17,
                marginStart: 25,
                color: "#8A8A8A",
              }}>
              COVID-19 vaccine certificate{" "}
            </Text>
            <Text
              style={{
                fontSize: 17,
                marginStart: 25,
                color: "#8A8A8A",
              }}>
              verification in EU format{" "}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
