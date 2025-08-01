import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import { useCallback, useRef, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { IconSymbol } from "~/components/native/icon-symbol";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";
import { colors } from "~/lib/constants/colors";
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

  const bottomSheetReminderRef = useRef<BottomSheetModal>(null);

  // const handleOpenColorSheet = useCallback(() => {
  //   bottomSheetColorRef.current?.present()
  // }, [])
  const handleOpenReminderSheet = useCallback(() => {
    bottomSheetReminderRef.current?.present();
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    []
  );

  const handleSelectFrequency = (day: (typeof days)[0]) => {
    let newFrequency = [...frequency];
    const found = newFrequency.findIndex(f => f.day === day.day);
    if (found === -1) {
      newFrequency.push(day);
    } else {
      newFrequency = newFrequency.filter(f => f.day !== day.day);
    }

    setFrequency(newFrequency);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-[#F4F2F1] px-5">
        <BottomSheetModalProvider>
          <ScrollView contentContainerClassName="gap-y-6">
            <View className="flex-row items-center gap-8">
              <TouchableOpacity onPress={router.back}>
                <IconSymbol name="arrow.left" color="#000" />
              </TouchableOpacity>
              <Text className="font-bold text-2xl">Create personal habit</Text>
            </View>
            <View className="flex-row gap-6 mb-4">
              <TouchableOpacity
                className="bg-white rounded-lg flex-row items-center justify-around w-28 p-2"
                onPress={() => setOpen(!open)}
              >
                <Text>{selectedEmoji}</Text>
                <Text>icon</Text>
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
                <Text>color</Text>
              </TouchableOpacity>
            </View>

            <View className="gap-4">
              <View className="gap-2">
                <Label>Habit Name</Label>
                <Input placeholder="Go to the GYM" />
              </View>
              <View className="gap-2">
                <Label>Description</Label>
                <Input placeholder="Extra details" />
              </View>
            </View>
            <View className="gap-2">
              <Label>Frequency</Label>
              <View className="flex-row justify-between">
                {days.map((d, idx) => (
                  <TouchableOpacity
                    key={`day-${d.day}-${idx}`}
                    className="bg-white rounded-full w-11 h-11 justify-center items-center"
                    style={{
                      backgroundColor: frequency.find(f => f.day === d.day)
                        ? "#A54F31"
                        : "#fff",
                    }}
                    onPress={() => handleSelectFrequency(d)}
                  >
                    <Text
                      className="text-center"
                      style={{
                        color: frequency.find(f => f.day === d.day)
                          ? "#fff"
                          : "#191015",
                      }}
                    >
                      {d.abbr}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View className="gap-2">
              <Label>Habit time</Label>
              <DateTimePicker
                testID="dateTimePicker"
                className="self-start"
                value={habitTime}
                mode="time"
                is24Hour={false}
                locale="en-US"
                accentColor={colors.palette.neutral100}
                onChange={(_, selectedDate) =>
                  setHabitTime(new Date(selectedDate!))
                }
              />
            </View>
            <View className="gap-2">
              <View className="flex-row justify-between items-center">
                <Label>Reminders</Label>
              </View>
              {reminder && (
                <TouchableOpacity
                  className="flex-row justify-between items-center bg-white p-2 rounded-md mt-2"
                  onPress={handleOpenReminderSheet}
                >
                  <Text>{reminder}</Text>
                  {/* <Icon icon="caretRight" /> */}
                  <IconSymbol name="arrow.right" color="#000" />
                </TouchableOpacity>
              )}
              <BottomSheetModal
                ref={bottomSheetReminderRef}
                snapPoints={[200, "50%"]}
                backdropComponent={renderBackdrop}
              >
                <BottomSheetView className="flex-1 gap-5 p-2 mt-3 bg-white">
                  {reminders.map((r, idx) => (
                    <TouchableOpacity
                      key={`reminder-${r.id}-${idx}`}
                      className="gap-2"
                      onPress={() => {
                        setReminder(r.name);
                        bottomSheetReminderRef.current?.close();
                      }}
                    >
                      <Text className="ml-2">{r.name}</Text>
                      <View className="w-full h-1 bg-backgound" />
                    </TouchableOpacity>
                  ))}
                </BottomSheetView>
              </BottomSheetModal>
            </View>
            <Button
            // textStyle={{ color: "#fff" }}
            // onPress={() => navigation.navigate("Home")}
            >
              <Text className="text-white">Create habit</Text>
            </Button>
          </ScrollView>
        </BottomSheetModalProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
