import * as React from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import Ionicons from "react-native-vector-icons/Ionicons";
import { LogoCovidResult } from "../../assets";

export default CovidResultScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar barStyle="light-content" animated={true} color="#fff8dc" />
        <View
          style={{
            paddingVertical: 20,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 50,
          }}>
          <View
            style={{
              marginHorizontal: 20,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
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
              COVID-19 Test Result
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <View>
            <Image
              style={{
                width: 275,
                height: 275,
              }}
              source={LogoCovidResult}
            />
          </View>
          <View style={{ marginTop: 53 }}>
            <Text style={{ textAlign: "center", fontSize: 14 }}>
              You do not have a history of COVID-19 test
            </Text>
            <Text style={{ textAlign: "center", fontSize: 14 }}>
              results. Make sure you do a COVID-19 tes at a laboratory
            </Text>
            <Text style={{ textAlign: "center", fontSize: 14 }}>
              affiliated with the Ministry of Health:
              <Text style={{ color: "#54B9ED" }}> PCR test lab</Text> or
            </Text>
            <Text
              style={{ textAlign: "center", fontSize: 14, color: "#54B9ED" }}>
              Antigen test lab
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
