import { View, Text } from "react-native";
import { FeatureItemStyle } from "../styles/feature-item";

export default function FeatureList({ feature }: { feature: any }) {
    return (
        <View style={FeatureItemStyle.container}>
            <View style={FeatureItemStyle.iconBox}>
                <feature.icon color={"white"} />
            </View>
            <View style={FeatureItemStyle.textContainer}>
                <Text style={FeatureItemStyle.boldText}>{feature.boldText}</Text>
                <Text style={FeatureItemStyle.smallText}>{feature.smallText}</Text>
            </View>
        </View>
    );
}