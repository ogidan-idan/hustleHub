import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { button, WelcomeScreenStyles } from '../styles';
import { AppLogo } from '../components/logo';
import FeatureList from '../components/feature-item';
import { CheckCircle, ShoppingBag, TrendingUp } from 'lucide-react-native';
import { PageProps } from '../App';
import { COLORS } from '../constants/colors';
import { useNavigation } from '../contexts/navigation';

const featuresList = [
    {
        icon: CheckCircle,
        boldText: "Manage Task",
        smallText: "Stay organized with your assignments"
    },
    {
        icon: ShoppingBag,
        boldText: "Buy & Sell",
        smallText: "Campus marketplace for students"
    },
    {
        icon: TrendingUp,
        boldText: "Track Hustle",
        smallText: "Monitor your side income"
    }
];

const WelcomeScreen = () => {
    const {handleNavigate} = useNavigation();
    return (
        <View style={WelcomeScreenStyles.container}>
            <LinearGradient
                colors={[COLORS.primary, COLORS.primary_dark]}
                style={WelcomeScreenStyles.background} />
            <AppLogo />
            <View style={WelcomeScreenStyles.headerSection}>
                <Text style={WelcomeScreenStyles.heading}>Welcome to</Text>
                <Text style={WelcomeScreenStyles.heading}>HustleHub</Text>
                <Text style={WelcomeScreenStyles.subText}>Your all-in-one student productivity platform</Text>
            </View>
            <View style={{ width: "85%", marginVertical: 20 }}>
                <FlatList
                    ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                    renderItem={(props) => <FeatureList feature={props.item} />}
                    data={featuresList} />
            </View>
            <TouchableOpacity style={button.secondary.container} onPress={handleNavigate('home')}>
                <Text style={button.secondary.text}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

export default WelcomeScreen