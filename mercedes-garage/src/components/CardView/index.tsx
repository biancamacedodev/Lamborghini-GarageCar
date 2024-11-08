import React from "react";
import { Image, Text, View } from 'react-native'

import Logo from '../../../assets/mercedesLogoTransparent.png';

import { styles } from "./styles";
import { Divider } from "../Divider";

export default function CardView() {

    const renderLogoBox = () => (
        <View style={styles.logoContainer}>
            <Image style={styles.imageLogo} source={Logo} />
        </View> 
    )
        
    
    return (
        <View style={styles.imageContainer}>
          {renderLogoBox()}
          <Divider />
        </View>
    )
}