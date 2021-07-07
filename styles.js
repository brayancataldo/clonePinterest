import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create ({
    navSuperior: {
        flexDirection: "row", backgroundColor: "#FFFFFF",
        paddingTop: 25, paddingLeft: 10, paddingBottom: 6,
    },
    navInferior: {
        borderRadius: 60,
        width: 245,
        height: 62,
        backgroundColor: "#FFFFFF",
        left: 62,
        top: 590,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 20,
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20

    },
    container: {
        flexDirection: "row", justifyContent: "space-between"
    },
    feed1: {
        flex: 1, backgroundColor: "#FFFFFF", top: "10%", justifyContent: "space-evenly", flexDirection: "column"
    },
    feed2: {
         flex: 1, backgroundColor: "#FFFFFF", top: "10%", justifyContent: "space-evenly", flexDirection: "column"
    },
    bolinha: {
        backgroundColor: "#111111",
        width: 110,
        height: 45,
        borderRadius: 50,
        justifyContent: "center",
    },
    bolinha2: {
        borderRadius: 50,
        justifyContent: "space-between",
        paddingLeft: 13,
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 17,
        fontWeight: "600"
    },
    text2: {
        color: "#000",
        fontSize: 17,
        fontWeight: "500",
        padding: 10
        
    },
    images: {
        maxWidth: 250,
        maxHeight: 180,
        width: 180,
        height: 180,
        borderRadius: 15,
        marginRight: 2.5,
        marginLeft: 5
        // marginTop: 25
    },
    svg: {
        width: 40,
        height: 40
    },
    desc: {
        fontWeight: "500",
        paddingTop: 5,
        paddingBottom: 15,
    },
    descView:{
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-between",
        paddingHorizontal: 7
    },
    container:{
        width: "100%", height: "100%", flexDirection: "column"
    },
    barra: {
        backgroundColor: "#E60023", width: 350, height: 45, borderRadius: 50, left: 12, alignItems: "center", justifyContent: "center", flex: 0.1, marginTop: 30
    },
    barra2: {
        alignItems: "center", justifyContent: "center", flex: 0.1, marginBottom: 35
    },
    welcome: {
        alignItems: "center", justifyContent: "center", 
    },
    msg: {
        color: "#000",
        fontSize: 26,
        fontWeight: "600",
    },
    logo: {
        width: 140, height: 140, 
    },
    viewLogo: {
        alignItems: "center", justifyContent: "center", flex: 1, top: 170
    },
    background: {
        width: "100%", height: "100%", position: "absolute"
    },
    teste: {
        width: "100%", height: "100%", 
    },
    print: {
        width: "100%", height: "100%"
    }
});