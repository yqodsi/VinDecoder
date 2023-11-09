import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import useFetch from "../../../hook/useFetch";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];
const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {

  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View >
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Decode your VIN</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Vin number"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
