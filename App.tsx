import { PropsWithChildren, useState } from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import { StatusBar } from "expo-status-bar";
import { TabBar } from "./components/tab-bar";
import NavigationProvider, { useNavigation } from "./contexts/navigation";
import { TasksScreen } from "./screens/tasks";
import TaskCreateScreen from "./screens/tasks/create";

export type PageProps = {
  navigate: (page: string) => () => void;
}

type AppLayoutProps = PropsWithChildren & {
  withoutTab?: boolean;
};

export function AppLayout(props: AppLayoutProps) {
  return (<SafeAreaView style={{ flex: 1 }}>
    {props.children}
    <StatusBar style={"auto"} />
    {props.withoutTab == true ?
      <></>
      : <View style={{ marginTop: "auto" }}>
        <TabBar />
      </View>}
  </SafeAreaView>);
}

export function App() {
  const { currentPage, goBack } = useNavigation();
  switch (currentPage) {
    case "welcome":
      return <WelcomeScreen />;
    case "home":
      return <HomeScreen />;
    case "tasks":
      return <TasksScreen/>;
    case "tasks.create":
       return <TaskCreateScreen/>;
    default:
      return <AppLayout withoutTab={true}>
        <Text>404 - Not Found</Text>
        <Button title="Go Back" onPress={goBack()} />
      </AppLayout>;
  }
}

export default function Root() {
  return <NavigationProvider>
    <App />
  </NavigationProvider>
}