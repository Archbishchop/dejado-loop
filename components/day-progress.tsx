import { View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import { colors } from "~/lib/constants/colors";
import { Text } from "./ui/text";

interface DayCardProps {
  day: string;
  date: string;
  progress: number;
}

export function DayProgress({ day, date, progress }: DayCardProps) {
  return (
    <View className="gap-2">
      <Text className="text-primary font-bold">{day}</Text>
      <AnimatedCircularProgress
        size={32}
        width={3}
        fill={progress}
        tintColor={colors.tint}
        // tintColor="#D28468"
        backgroundColor="#fff"
      >
        {() => <Text>{date}</Text>}
      </AnimatedCircularProgress>
    </View>
  );
}
