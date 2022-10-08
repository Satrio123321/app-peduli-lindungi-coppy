import * as React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {
  LogoEntering,
  LogoVaccine,
  LogoCovid,
  LogoEhac,
  LogoTravel,
  LogoTelemedicine,
  LogoHealthcare,
  LogoCovid19,
  LogoFind,
} from "../../assets";

export default HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" animated={true} color="#61dafb" />
      <ScrollView>
        <View
          style={{
            marginVertical: 20,
            paddingHorizontal: 5,
            paddingStart: 10,
            flexDirection: "row",
            alignItems: "center",
          }}>
          <View
            style={{
              flex: 0.8,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <EvilIcons name="user" size={50}>
              {" "}
            </EvilIcons>
          </View>

          <View
            style={{
              flex: 4.7,
              marginStart: 5,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
              }}>
              <Text>Hi </Text>
              <Text style={{ textDecorationLine: "underline" }}>
                {" "}
                Muhammad Satrio Yudhistira
              </Text>
            </Text>
          </View>

          <View
            style={{
              flex: 0.5,
              alignItems: "flex-end",
              marginBottom: 20,
            }}>
            <Ionicons name="notifications-outline" size={20}>
              {" "}
            </Ionicons>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#239bd8",
            flexDirection: "row",
            marginTop: 10,
            marginHorizontal: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderWidth: 1,
            elevation: 1,
          }}>
          <View
            style={{
              flex: 3,
              backgroundColor: "#239bd8",
              borderRadius: 20,
              borderWidth: 0,
              justifyContent: "center",
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                marginStart: 20,
              }}>
              Entering A Public Space?
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "white",
                marginStart: 20,
              }}>
              Stay Alert To Stay Save{" "}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              borderTopRightRadius: 20,
              borderWidth: 0,
              marginTop: 10,
            }}>
            <Image
              style={{
                width: 100,
                height: 90,
                borderTopRightRadius: 20,
                borderWidth: 0,
              }}
              resizeMode={"stretch"}
              source={LogoEntering}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            borderWidth: 0.5,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            alignItems: "center",
          }}>
          <View
            style={{
              marginVertical: 25,
              marginStart: 22,
              flex: 0,
            }}>
            <AntDesign name="down" style={{ alignItems: "center" }} size={20}>
              {" "}
            </AntDesign>
          </View>

          <View style={{ flex: 1, marginStart: 10 }}>
            <Text style={{ fontSize: 17 }}>Check-in Preferences</Text>
          </View>

          <View
            style={{
              flex: 0.4,
              flexDirection: "row",
              backgroundColor: "#EAF5F9",
              padding: 10,
              borderWidth: 0,
              borderRadius: 25,
              justifyContent: "center",
              marginEnd: 10,
            }}>
            <MaterialCommunityIcons
              name="line-scan"
              style={{
                color: "#259AD5",
                marginRight: 10,
              }}
              size={20}></MaterialCommunityIcons>
            <Text style={{ color: "#259AD5" }}>Check-in</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#ebebeb",
            marginTop: 25,
          }}>
          <Text></Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            justifyContent: "center",
          }}>
          <View
            style={{
              flex: 1,
              marginHorizontal: 10,
              alignItems: "center",
            }}>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => navigation.navigate("")}>
              <Image
                style={{
                  width: 110,
                  height: 110,
                  borderWidth: 0,
                  borderRadius: 25,
                }}
                resizeMode={"contain"}
                source={LogoVaccine}
              />
              <Text style={{ fontSize: 15 }}>Vaccine And </Text>
              <Text style={{ fontSize: 15 }}> Immunization</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              marginHorizontal: 20,
              alignItems: "center",
            }}>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => navigation.navigate("")}>
              <Image
                style={{
                  width: 110,
                  height: 110,
                  borderWidth: 0,
                  borderRadius: 25,
                }}
                resizeMode={"contain"}
                source={LogoCovid}
              />
              <Text style={{ fontSize: 15 }}>Covid-19 Test </Text>
              <Text style={{ fontSize: 15 }}> Result</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              marginHorizontal: 10,
              alignItems: "center",
            }}>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => navigation.navigate("")}>
              <Image
                style={{
                  width: 110,
                  height: 110,
                  borderWidth: 0,
                  borderRadius: 25,
                }}
                resizeMode={"contain"}
                source={LogoEhac}
              />
              <Text style={{ fontSize: 15 }}>Ehac</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            justifyContent: "center",
          }}>
          <View
            style={{
              flex: 1,

              marginHorizontal: 10,
              alignItems: "center",
            }}>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => navigation.navigate("")}>
              <Image
                style={{
                  width: 110,
                  height: 110,
                  borderWidth: 0,
                  borderRadius: 25,
                }}
                resizeMode={"contain"}
                source={LogoTravel}
              />
              <Text style={{ fontSize: 15 }}>Travel </Text>
              <Text style={{ fontSize: 15 }}> Regulations</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              marginHorizontal: 20,
              alignItems: "center",
            }}>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => navigation.navigate("")}>
              <Image
                style={{
                  width: 110,
                  height: 110,
                  borderWidth: 0,
                  borderRadius: 25,
                }}
                resizeMode={"contain"}
                source={LogoTelemedicine}
              />
              <Text style={{ fontSize: 15 }}>Telemedicine </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              marginHorizontal: 10,
              alignItems: "center",
            }}>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => navigation.navigate("")}>
              <Image
                style={{
                  width: 110,
                  height: 110,
                  borderWidth: 0,
                  borderRadius: 25,
                }}
                resizeMode={"contain"}
                source={LogoHealthcare}
              />
              <Text style={{ fontSize: 15 }}>Healthcare</Text>
              <Text style={{ fontSize: 15 }}>Facility</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            justifyContent: "center",
          }}>
          <View
            style={{
              flex: 0.5,
              alignItems: "center",
              marginStart: 25,
              marginEnd: 5,
            }}>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => navigation.navigate("")}>
              <Image
                style={{
                  width: 110,
                  height: 110,
                  borderWidth: 0,
                  borderRadius: 25,
                }}
                resizeMode={"contain"}
                source={LogoCovid19}
              />
              <Text style={{ fontSize: 15 }}> Covid-19 </Text>
              <Text style={{ fontSize: 15 }}> Statistic</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: "center",
              marginEnd: 128,
            }}>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => navigation.navigate("")}>
              <Image
                style={{
                  width: 110,
                  height: 110,
                  borderWidth: 0,
                  borderRadius: 25,
                }}
                resizeMode={"contain"}
                source={LogoFind}
              />
              <Text style={{ fontSize: 15 }}>Find Hospital </Text>
              <Text style={{ fontSize: 15 }}> Bed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
