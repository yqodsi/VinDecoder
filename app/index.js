import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import useFetch from "../hook/useFetch";

const Home = () => {
  const styles = {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "start",
      padding: 10,
    },
    makeModelText: {
      fontSize: 15,
      fontWeight: "bold",
      color: "#333",
    },
    propertyText: {
      fontSize: 16,
      color: "#333",
    },
  };
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, error, refetch, startFetch } = useFetch(
    "marketvalue",
    {
      vin: searchTerm,
    }
  );
  console.log("data", data);
  const handleClick = () => {
    startFetch();
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Text
            style={{
              ...SIZES.h1,
              color: COLORS.darkBlue,
              fontWeight: "bold",
            }}
          ></Text>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={handleClick}
          />
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something Went Wrong !</Text>
          ) : (
            <View style={styles.container}>
              <Text style={styles.makeModelText}>{data.vehicle}</Text>
              <Text style={styles.propertyText}>
                Average Price: ${data.mean}
              </Text>
              <Text style={styles.propertyText}>
                Certainty: {data.certainty}%
              </Text>
              <Text style={styles.propertyText}>
                Mileage: {data.mileage} miles
              </Text>
            </View>
          )}
          {/* <Nearbyjobs /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
