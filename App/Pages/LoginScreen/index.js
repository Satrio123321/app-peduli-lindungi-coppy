import * as React from "react";

import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Loginlogo,
  Logokpcpen,
  Logokominfo,
  Logokemenkes,
  Logobumn,
} from "../../assets";

import Feather from "react-native-vector-icons/Feather";

export default LoginScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" animated={true} color="#fff8dc" />

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: 100,
          }}>
          <Image
            style={{ height: 255, width: 255 }}
            resizeMode={"stretch"}
            source={Loginlogo}
          />
        </View>

        <View
          style={{
            paddingtop: 20,
            marginTop: 15,
            marginBottom: 10,
          }}>
          <View
            style={{
              borderWidth: 1,
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 30,
              marginVertical: 10,
              borderRadius: 10,
            }}>
            <Feather
              name="mail"
              size={25}
              style={{
                color: "#696969",
                marginStart: 20,
              }}>
              {" "}
            </Feather>

            <TextInput
              style={{
                paddingRight: 50,
                paddingVertical: 10,
                marginStart: 5,
              }}
              placeholder="Youremail@domain.com"
            />
          </View>
          <View>
            <View
              style={{
                borderWidth: 1,
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 30,
                marginVertical: 10,
                borderRadius: 10,
              }}>
              <Feather
                name="mail"
                size={25}
                style={{
                  color: "#696969",
                  marginStart: 20,
                }}>
                {" "}
              </Feather>

              <TextInput
                style={{
                  paddingRight: 50,
                  paddingVertical: 10,
                  marginStart: 5,
                }}
                placeholder="Password"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <View
            style={{
              backgroundColor: "darkslategrey",
              justifyContent: "center",
              alignItems: "center",
              padding: 15,
              marginHorizontal: 50,
              marginTop: 10,
              borderWidth: 0,
              borderRadius: 10,
              marginBottom: 50,
            }}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 20,
              }}>
              Login
            </Text>
          </View>
        </TouchableOpacity>

        <View>
          <Text
            style={{
              marginStart: 20,
              fontSize: 15,
              marginBottom: 5,
              marginTop: 160,
            }}>
            Bekerjasama Dengan :{" "}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
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
    </ScrollView>
  );
};
