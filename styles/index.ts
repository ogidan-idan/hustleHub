import { StyleSheet } from "react-native";
import { secondary} from "./button";


const APP_GENERAL = StyleSheet.create({
    logoContainer: {
        position: "relative",
    },
    logoBadge: {
        position: "absolute",
        top: -12,
        right: -8,
        padding: 10,
        backgroundColor: "orange",
        borderRadius: "100%"
    },
});

const WelcomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 30
    },
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    headerSection: {
        alignItems: "center",
        maxWidth: "80%",
        marginInline: "auto"
    },
    text: {
        color: "rgba(255,255,255,1)"
    },
    heading: {
        color: "rgba(255,255,255,1)",
        fontSize: 36,
        lineHeight: 36,
        fontWeight: 600
    },
    subText: {
        color: "rgba(255,255,255,1)",
        fontSize: 18,
        lineHeight: 24,
        fontWeight: 400,
        marginTop: 20,
        textAlign: "center"
    }
});

const button = {
    secondary: secondary,
}
export { WelcomeScreenStyles, APP_GENERAL, button };