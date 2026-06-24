import { FlatList, Pressable, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { AppLayout, PageProps } from '../App';
import { LinearGradient } from 'expo-linear-gradient';
import { BriefcaseIcon, CheckSquareIcon, ClockIcon, DollarSignIcon, PackageIcon, PlusIcon, ShoppingBagIcon, TimerIcon, TrendingUp } from 'lucide-react-native';
import { WelcomeScreenStyles } from '../styles';
import { COLORS } from '../constants/colors';
import { useNavigation } from '../contexts/navigation';

const summaryData = [
  {
    icon: CheckSquareIcon,
    title: "Today's Tasks",
    value: "8",
    color: COLORS.primary,
    page: "tasks"
  },
  {
    icon: PackageIcon,
    title: "Active Listings",
    value: "3",
    color: COLORS.green,
    page: "marketplace"
  },
  {
    icon: TrendingUp,
    title: "Hustle Earnings",
    value: "N12,500",
    color: COLORS.purple,
    page: "hustle"
  },
];

const recentActivity = [
  { type: "task", title: "Complete Chemistry Assignment", time: "2h ago", status: "completed", id: 1 },
  { type: "marketplace", title: "Sold: iPhone Charger", time: "5h ago", amount: "₦2,000", id: 2 },
  { type: "task", title: "Study for Midterm Exam", time: "Yesterday", status: "pending", id: 3 },
  { type: "hustle", title: "Delivered Food Order", time: "Yesterday", amount: "₦1,500", id: 4 }
];

const HomeScreen = () => {

  const {handleNavigate} = useNavigation();

  return (
    <AppLayout>
      <ScrollView contentContainerStyle={{ gap: 30, backgroundColor: "#efefef" }}>
        <HeaderCard />
        <View style={HomeScreenStyles.container}>
          <View style={{ marginTop: -58, gap: 12 }}>
            {summaryData.map((item, index) => {
              return <SummaryCard {...item} key={index} />;
            })}
          </View>
        </View>
        <View style={HomeScreenStyles.container}>
          <Text style={HomeScreenStyles.sectionTitle}>Quick Actions</Text>
          <View style={HomeScreenStyles.quickActionsContainer}>
            {/* <Pressable style={[HomeScreenStyles.quickAction, { backgroundColor: COLORS.primary }]}>
              <PlusIcon color={HomeScreenStyles.quickActionText.color} />
              <Text style={HomeScreenStyles.quickActionText}>Add Task</Text>
            </Pressable> */}

            <QuickActionCard title="Add Task" onPress={handleNavigate('tasks.create')} icon={PlusIcon} color={COLORS.primary} />
            <QuickActionCard title="Add Listing" icon={ShoppingBagIcon} color={COLORS.green} />
            <QuickActionCard title="Add Hustle Job" icon={BriefcaseIcon} color={COLORS.purple} />
          </View>
        </View>

        <View style={HomeScreenStyles.container}>
          <Text style={HomeScreenStyles.sectionTitle}>Recent Activity</Text>

          <View style={{ backgroundColor: "white", marginBottom: 20, borderRadius: 10, overflow: "hidden" }}>
            {
              recentActivity.map((value, index) => (
                <View key={index}>
                  <RecentActivityCard activity={value} />
                  {index != recentActivity.length - 1 &&
                    <View style={{ height: 1.5, backgroundColor: "#eee" }}></View>}
                </View>
              ))
            }
          </View>

          {/* <FlatList contentContainerStyle={{ backgroundColor: "white", marginBottom: 20, borderRadius: 10, overflow: "hidden" }} data={recentActivity} renderItem={(data) => {
            return <RecentActivityCard activity={data.item} />;
          }} ItemSeparatorComponent={() => {
            return <View style={{ height: 1, backgroundColor: "#eee" }}></View>
          }} /> */}
        </View>
      </ScrollView>

    </AppLayout>
  )
}


const RecentActivityCard = (props: any) => {
  switch (props.activity.type) {
    case "task":
      return <TaskActivityCard activity={props.activity} />;
    case "marketplace":
      return <ListingActivityCard activity={props.activity} />;
    case "hustle":
      return <HustleActivityCard activity={props.activity} />;
    default:
      return <Text style={{ textAlign: "center", padding: 10 }}>Not Handle</Text>;
  }
}


const HustleActivityCard = (props: any) => {
  const activity = props.activity;
  return <View style={{ flexDirection: "row", alignItems: "center", gap: 10, backgroundColor: "white", padding: 15 }}>
    <View style={{ backgroundColor: "#fae4fe", padding: 8, borderRadius: 8 }}>
      <DollarSignIcon color={COLORS.purple} size={18} />
    </View>
    <View style={{ flex: 1, gap: 2 }}>
      <Text style={{ fontSize: 14, fontWeight: 500 }}>{activity.title}</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        <ClockIcon size={12} color={COLORS.grey} />
        <Text style={{ fontSize: 12 }}>{activity.time}</Text>
      </View>
    </View>
    <Text style={{ fontSize: 14, fontWeight: 500, alignSelf: "flex-start", color: COLORS.green }}>{activity.amount}</Text>
  </View>;
}


const ListingActivityCard = (props: any) => {
  const activity = props.activity;
  return <View style={{ flexDirection: "row", alignItems: "center", gap: 10, backgroundColor: "white", padding: 15 }}>
    <View style={{ backgroundColor: "#e3fee4", padding: 8, borderRadius: 8 }}>
      <ShoppingBagIcon color={COLORS.green} size={18} />
    </View>
    <View style={{ flex: 1, gap: 2 }}>
      <Text style={{ fontSize: 14, fontWeight: 500 }}>{activity.title}</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        <ClockIcon size={12} color={COLORS.grey} />
        <Text style={{ fontSize: 12 }}>{activity.time}</Text>
      </View>
    </View>
    <Text style={{ fontSize: 14, fontWeight: 500, alignSelf: "flex-start", color: COLORS.green }}>{activity.amount}</Text>
  </View>;
}

const TaskActivityCard = (props: any) => {
  const activity = props.activity;
  return <View style={{ flexDirection: "row", alignItems: "center", gap: 10, backgroundColor: "white", padding: 15 }}>
    <View style={{ backgroundColor: "#bbdefb", padding: 8, borderRadius: 8 }}>
      <CheckSquareIcon color={COLORS.primary_dark} size={18} />
    </View>
    <View style={{ flex: 1, gap: 2 }}>
      <Text style={{ fontSize: 14, fontWeight: 500 }}>{activity.title}</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        <ClockIcon size={12} color={COLORS.grey} />
        <Text style={{ fontSize: 12 }}>{activity.time}</Text>
      </View>
    </View>
    {activity.status == "completed" &&
      <View style={{ backgroundColor: "#d0fcd2", paddingVertical: 2, paddingHorizontal: 6, borderRadius: 10, alignSelf: "flex-start" }}>
        <Text style={{ fontSize: 12, color: COLORS.green }}>Done</Text>
      </View>}
  </View>;
}

const QuickActionCard = (props: any) => {
  return <Pressable style={[HomeScreenStyles.quickAction, { backgroundColor: props.color }]} onPress={props.onPress}>
    <props.icon color={HomeScreenStyles.quickActionText.color} />
    <Text style={HomeScreenStyles.quickActionText}>{props.title}</Text>
  </Pressable>;
}

const SummaryCard = (props: any) => {
  const {handleNavigate} = useNavigation();
  return (<Pressable style={{ flexDirection: "row", gap: 16, alignItems: "center", backgroundColor: "white", padding: 16, borderRadius: 16, boxShadow: "2px 4px 10px rgba(0,0,0,0.2)" }} onPress={handleNavigate(props.page)}>
    <View style={{ backgroundColor: props.color, padding: 10, borderRadius: 8 }}>
      <props.icon color={"white"} />
    </View>
    <View>
      <Text style={{ fontSize: 12 }}>{props.title}</Text>
      <Text style={{ fontSize: 24, fontWeight: 700 }}>{props.value}</Text>
    </View>
  </Pressable>);
}

const HeaderCard = () => {
  return (
    <View style={{ paddingTop: 50, paddingBottom: 40, paddingHorizontal: 20, borderRadius: 20, overflow: "hidden" }}>
      <LinearGradient
        colors={["#2b7fff", "#155dfc"]}
        style={WelcomeScreenStyles.background} />
      <Text style={{ color: "white", fontSize: 24, fontWeight: 600, lineHeight: 44 }}>Good morning, Student 👋</Text>
      <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: 14 }}>Ready to crush your goals today?</Text>
    </View>
  );
}

const HomeScreenStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 16
  },
  quickActionsContainer: {
    flexDirection: "row",
    gap: 15
  },
  quickAction: {
    width: "31%",
    aspectRatio: 1,
    backgroundColor: COLORS.grey,
    paddingHorizontal: 14,
    gap: 6,
    paddingVertical: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  quickActionText: {
    color: "white",
    textAlign: "center",
    fontSize: 11
  }
});

export default HomeScreen