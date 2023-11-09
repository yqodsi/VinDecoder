import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";



import styles from "./popularjobs.style";

const Popularjobs = ({data, isLoading, error}) => {
  const router = useRouter();



  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item?.job_id}`);
    setSelectedJob(item?.job_id);
  };

  //console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Text>Show All</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something Went Wrong !</Text>
        ) : (

          
          <View style={styles.container}>
          <Text style={styles.makeModelText}>{data.vehicle}</Text>
          <Text style={styles.propertyText}>Average Price: ${data.mean}</Text>
          <Text style={styles.propertyText}>Certainty: {data.certainty}%</Text>
          <Text style={styles.propertyText}>Mileage: {data.mileage} miles</Text>
        </View>
        )}
      </View> */}
    </View>
  );
};

export default Popularjobs;
