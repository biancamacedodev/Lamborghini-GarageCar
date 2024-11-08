import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 8,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 200,
        marginTop: 20 
    },
    imageLogo: {
        flex: 1,
        width: '65%',
        resizeMode: 'contain'
    },
    carBrand: {
        color: "#fff",
        fontWeight: "400",
        fontSize: 18,
        fontStyle: "italic",
    },
    carName: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    imageCar: {
        marginBottom: 20,
        width: '100%',
        height: 100,
    }
});

