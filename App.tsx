import { PropsWithChildren, useState } from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import { StatusBar } from "expo-status-bar";
import { TabBar } from "./components/tab-bar";

export type PageProps = {
  navigate: (page: string) => () => void;
}

export function AppLayout(props: PropsWithChildren) {
  return <SafeAreaView style={{ flex: 1 }}>
    {props.children}
    <StatusBar style={"auto"} />
    <View style={{marginTop: "auto"}}>
      <TabBar/>
    </View>
  </SafeAreaView>
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("welcome");
  function handleNavigate(page: string) {
    return () => setCurrentPage(page);
  }
  switch (currentPage) {
    case "welcome":
      return <WelcomeScreen navigate={handleNavigate} />;
    case "home":
      return <HomeScreen navigate={handleNavigate} />;
    default:
      return <AppLayout>
        <Text>404 - Not Found</Text>
        <Button title="Go Home" onPress={() => setCurrentPage("welcome")} />
      </AppLayout>;
  }
}