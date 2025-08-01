import { View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import { ThemedText } from "./ThemedText";

interface DayCardProps {
  day: string;
  date: string;
  progress: number;
}

export function DayProgress({ day, date, progress }: DayCardProps) {
  return (
    <View className="gap-2">
      <ThemedText>{day}</ThemedText>
      <AnimatedCircularProgress
        size={32}
        width={3}
        fill={progress}
        // tintColor={colors.palette.primary400}
        tintColor="#D28468"
        backgroundColor="#fff"
      >
        {() => <ThemedText>{date}</ThemedText>}
      </AnimatedCircularProgress>
    </View>
  );
}
