import { Image } from "expo-image";
import { ScrollView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { HelloWave } from "~/components/HelloWave";
import { ThemedText } from "~/components/ThemedText";
import { ThemedView } from "~/components/ThemedView";
import { useRouter } from "expo-router";
import { DayProgress } from "~/components/day-progress";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Habit } from "~/components/habit";

const checkIns = [
  {
    emoji: "💧",
    title: "Water",
    name: "glass",
    amount: "3/4",
    color: "#FBC878",
    fill: 30,
  },
  {
    emoji: "😴",
    title: "Sleep",
    name: "hours",
    amount: "4/6",
    color: "#626894",
    fill: 80,
  },
  {
    emoji: "🧘",
    title: "Meditation",
    name: "min",
    amount: "10/15",
    color: "#978F8A",
    fill: 60,
  },
];

interface HabitType {
  id: number;
  emoji: string;
  name: string;
  time: string;
  finished: boolean;
}

export const tasks: HabitType[] = [
  {
    id: 1,
    emoji: "🧘",
    name: "Meditation",
    time: "08:00 AM",
    finished: true,
  },
  {
    id: 2,
    emoji: "🌱",
    name: "Plant based diet",
    time: "10:00 AM",
    finished: false,
  },
  {
    id: 3,
    emoji: "💻",
    name: "Contribute to open source",
    time: "10:30 AM",
    finished: false,
  },
  {
    id: 4,
    emoji: "🏃",
    name: "Workout",
    time: "08:00 PM",
    finished: true,
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#F4F2F1]">
        <ScrollView contentContainerClassName="px-5">
          <ThemedView className="flex-row items-center justify-between mb-4">
            <ThemedView className="flex-row items-center gap-5">
              <Image
                source={require("@/assets/images/avatar.png")}
                style={{ width: 50, height: 50 }}
              />
              <ThemedView className="flex-row items-center gap-2">
                <ThemedText>Today</ThemedText>
                <HelloWave />
              </ThemedView>
            </ThemedView>
            {/* TODO: add to tw config -> colors.palette.primary600, */}
            <View className="bg-[#A54F31] w-10 h-10 items-center justify-center rounded-full">
              <MaterialCommunityIcons
                name="plus"
                color="#FFFFFF"
                // color={colors.palette.neutral100}
                size={28}
                onPress={() => router.push("/(tabs)/habit/new")}
              />
            </View>
          </ThemedView>

          <View className="flex-row gap-6">
            <DayProgress day="Mon" date="1" progress={50} />
            <DayProgress day="Tue" date="2" progress={75} />
            <DayProgress day="Wed" date="3" progress={25} />
            <DayProgress day="Thu" date="4" progress={100} />
            <DayProgress day="Fri" date="5" progress={60} />
            <DayProgress day="Sat" date="6" progress={80} />
            <DayProgress day="Sun" date="7" progress={90} />
          </View>

          <View className="gap-4 mt-5">
            <ThemedText>Daily check-in</ThemedText>
            <View className="mt-2">
              <ScrollView
                contentContainerClassName="gap-5"
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {checkIns.map((checkIn, i) => (
                  <View
                    key={i}
                    className="bg-white rounded-xl p-4 gap-y-3 min-w-44"
                  >
                    <View className="flex-row items-center gap-2">
                      <View className="bg-[#F4F2F1] w-12 h-12 rounded-full items-center justify-center">
                        <ThemedText className="text-center">
                          {checkIn.emoji}
                        </ThemedText>
                      </View>
                      <ThemedText>{checkIn.title}</ThemedText>
                    </View>
                    <AnimatedCircularProgress
                      size={100}
                      width={12}
                      fill={checkIn.fill}
                      rotation={360}
                      tintColor={checkIn.color}
                      backgroundColor="#F4F2F1"
                      style={{ alignSelf: "center" }}
                    >
                      {() => (
                        <View className="items-center">
                          <ThemedText>{checkIn.amount}</ThemedText>
                          <ThemedText>{checkIn.name}</ThemedText>
                        </View>
                      )}
                    </AnimatedCircularProgress>
                    <View className="bg-[#F4F2F1] p-2 flex-row justify-around items-center rounded-xl">
                      <MaterialCommunityIcons
                        name="minus"
                        color="#978F8A"
                        size={20}
                      />
                      <ThemedText className="text-[#978F8A]">|</ThemedText>
                      <MaterialCommunityIcons
                        name="plus"
                        color="#978F8A"
                        size={20}
                      />
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>

          <View className="gap-6">
            <ThemedText>Today</ThemedText>
            <View className="gap-2.5">
              {tasks.map((task, idx) => (
                <Habit key={`${task.id}-${idx}`} task={task} />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
