import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";
import CardView from "../../components/CardView";

export default function GarageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.cameraBox}> 
                <View style={styles.triangleCorner}></View>
                <View style={[styles.triangleCorner, styles.topRight]}></View>
                <View style={[styles.triangleCorner, styles.bottomLeft]}></View>
                <View style={[styles.triangleCorner, styles.bottomRight]}></View>
                <CardView />
            </View> 

            
            {/* <Text>GarageScreen</Text> */}
        </View>
    )
}
