// import { observer } from "mobx-react-lite"
import { ThemedText } from "~/components/ThemedText";
import { IconSymbol } from "~/components/ui/IconSymbol";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  ScrollView,
  Button,
  TextInput,
  Dimensions,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import EmojiPicker from "rn-emoji-keyboard"
// import ColorPicker, { HueSlider, Panel1, Preview } from "reanimated-color-picker"
// import {
//   BottomSheetView,
//   BottomSheetBackdrop,
//   BottomSheetModal,
//   BottomSheetModalProvider,
// } from "@gorhom/bottom-sheet"
// import DateTimePicker from "@react-native-community/datetimepicker"

// import { Text, Screen, Icon, Button, TextField, Toggle } from "app/components"
// import layout from "app/utils/layout"

export const days = [
  {
    day: "Sunday",
    abbr: "S",
  },
  {
    day: "Monday",
    abbr: "M",
  },
  {
    day: "Tuesday",
    abbr: "T",
  },
  {
    day: "Wednesday",
    abbr: "W",
  },
  {
    day: "Thursday",
    abbr: "T",
  },
  {
    day: "Friday",
    abbr: "F",
  },
  {
    day: "Saturday",
    abbr: "S",
  },
];

export const reminders = [
  {
    id: 1,
    name: "At the habit time",
  },
  {
    id: 2,
    name: "5 minutes before",
  },
  {
    id: 3,
    name: "10 minutes before",
  },
  {
    id: 4,
    name: "15 minutes before",
  },
  {
    id: 5,
    name: "30 minutes before",
  },
];

export default function CreateNewHabit() {
  const [open, setOpen] = useState(false);
  const [reminder, setReminder] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("📚");
  const [colorPicked, setColorPicked] = useState("#ff0000");
  const [habitTime, setHabitTime] = useState(new Date());
  const [frequency, setFrequency] = useState<(typeof days)[0][]>([]);

  const router = useRouter();

  const handleSelectFrequency = (day: (typeof days)[0]) => {
    let newFrequency = [...frequency];
    const found = newFrequency.findIndex((f) => f.day === day.day);
    if (found === -1) {
      newFrequency.push(day);
    } else {
      newFrequency = newFrequency.filter((f) => f.day !== day.day);
    }

    setFrequency(newFrequency);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#F4F2F1] px-5">
        <ScrollView contentContainerClassName="">
          <View className="flex-row items-center gap-6 mb-4">
            <TouchableOpacity onPress={router.back}>
              <IconSymbol name="arrow.left" color="#000" />
            </TouchableOpacity>
            <ThemedText className="font-bold text-xl">Create Habit</ThemedText>
          </View>
          <View className="flex-row gap-6 mb-4">
            <TouchableOpacity
              className="bg-white rounded-lg flex-row items-center justify-around w-28 p-2"
              onPress={() => setOpen(!open)}
            >
              <ThemedText>{selectedEmoji}</ThemedText>
              <ThemedText>icon</ThemedText>
            </TouchableOpacity>
            {/* <EmojiPicker
              onEmojiSelected={(selected) => setSelectedEmoji(selected.emoji)}
              open={open}
              onClose={() => setOpen(!open)}
            /> */}
            <TouchableOpacity className="bg-white rounded-lg flex-row items-center justify-around w-28 p-2">
              <View
                className="w-5 h-5 rounded-full"
                style={{ backgroundColor: colorPicked }}
              />
              <ThemedText>color</ThemedText>
            </TouchableOpacity>
          </View>

          <View style={$inputsContainer}>
            <TextInput placeholder="Go to the GYM" />
            <TextInput placeholder="Extra details" />
          </View>
          <View style={$gap}>
            <View style={$frequencyContainer}>
              <ThemedText style={$labelStyle}>Frequency</ThemedText>
              <ThemedText style={$labelRequired}>*</ThemedText>
            </View>
            <View style={$daysContainer}>
              {days.map((d, idx) => (
                <TouchableOpacity
                  key={`day-${d.day}-${idx}`}
                  style={[
                    $dayContainerStyle,
                    {
                      backgroundColor: frequency.find((f) => f.day === d.day)
                        ? "#A54F31"
                        : "#fff",
                    },
                  ]}
                  onPress={() => handleSelectFrequency(d)}
                >
                  <ThemedText
                    style={[
                      $dayStyle,
                      {
                        color: frequency.find((f) => f.day === d.day)
                          ? "#fff"
                          : "#191015",
                      },
                    ]}
                  >
                    {d.abbr}
                  </ThemedText>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={$gap}>
            <View style={$frequencyContainer}>
              <ThemedText style={$labelStyle}>Habit time</ThemedText>
              <ThemedText style={$labelRequired}>*</ThemedText>
            </View>
          </View>
          <View style={$gap}>
            <View style={$remindersContainer}>
              <ThemedText style={$labelStyle}>Reminders</ThemedText>
            </View>
            {reminder && (
              <TouchableOpacity style={$reminder}>
                <ThemedText>{reminder}</ThemedText>
                {/* <Icon icon="caretRight" /> */}
              </TouchableOpacity>
            )}
          </View>
          <Button
            title="Create habit"
            // style={$btn}
            // textStyle={{ color: "#fff" }}
            // onPress={() => navigation.navigate("Home")}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const spacing = {
  xxxs: 2,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

const $container: ViewStyle = {
  paddingHorizontal: spacing.md,
  gap: spacing.xl,
  paddingBottom: 70,
};

const $btn: ViewStyle = {
  backgroundColor: "#A54F31",
  borderWidth: 0,
  borderRadius: spacing.xs,
};

const $bottomSheet: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};

const $colorPicker: ViewStyle = { width: "50%", gap: 8 };

const $inputsContainer: ViewStyle = {
  gap: 16,
};

const $frequencyContainer: ViewStyle = {
  flexDirection: "row",
  gap: 4,
};

const $labelStyle: TextStyle = { marginBottom: spacing.xs };

const $labelRequired: TextStyle = {
  color: "#C03403",
};

const $daysContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
};
const $dayContainerStyle: ViewStyle = {
  backgroundColor: "#fff",
  borderRadius: 99,
  width: 44,
  height: 44,
  justifyContent: "center",
  alignItems: "center",
};

const $dayStyle: TextStyle = {
  lineHeight: 0,
  textAlign: "center",
};

const $gap: ViewStyle = { gap: 8 };

const $dateTimePicker: ViewStyle = {
  alignSelf: "flex-start",
  // backgroundColor: colors.palette.neutral100,
};

const $remindersContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const $reminder: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#fff",
  padding: spacing.sm,
  borderRadius: spacing.xs,
  marginTop: spacing.xs,
};

const $reminderBottomSheet: ViewStyle = {
  flex: 1,
  gap: spacing.lg,
  padding: spacing.sm,
  marginTop: spacing.xs,
  backgroundColor: "#fff",
};

const $separator: ViewStyle = {
  width: "100%",
  height: 2,
  backgroundColor: "#F4F2F1",
};

const $bottomSheetContainer: ViewStyle = {
  shadowColor: "#191015",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,
  elevation: 24,
};
