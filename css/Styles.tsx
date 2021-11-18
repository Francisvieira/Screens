import { StyleSheet } from "react-native";

export const formato = StyleSheet.create({

    conteudo: {
        flex: 1,
        justifyContent: "center"
    },
    fundo: {
        flex: 1,
        width: "100%",
        height: "auto",
        resizeMode: "cover"
    },
    menu: {
        top:20,
        left:20,
        height:600,
        flexDirection: "row",
        flexWrap: "wrap",
        width: '90%',
        backgroundColor: '#9595EC',
        borderRadius: 20,
        margin: "auto",
        padding: 20
    },

    btn: {

        height:100,
        width: '32%',
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        zIndex:1000

    },
    txtbtn: {
        fontSize: 20,
        textAlign: "center",
    }

})