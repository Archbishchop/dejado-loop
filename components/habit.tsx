import { View, TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface HabitType {
  id: number;
  emoji: string;
  name: string;
  time: string;
  finished: boolean;
}

interface HabitProps {
  task: HabitType;
  // navigation: HomeNavProps
}

export function Habit({ task }: HabitProps) {
  // const bottomSheetRef = React.useRef<BottomSheetModal>(null)
  // const [isSheetOpen, setIsSheetOpen] = React.useState(false)

  // const handleOpenSheet = React.useCallback(() => {
  //   bottomSheetRef.current?.present()
  //   setIsSheetOpen(true)
  // }, [])

  // const renderBackdrop = React.useCallback(
  //   (props: any) => <BottomSheetBackdrop {...props} disappearsOnIndex={0} appearsOnIndex={1} />,
  //   [],
  // )

  // React.useEffect(() => {
  //   navigation.getParent()?.setOptions({
  //     tabBarStyle: isSheetOpen ? { display: "none" } : $tabBarStyles,
  //   })
  // }, [isSheetOpen])

  return (
    <>
      <TouchableOpacity
        className="bg-[#fff] flex-row justify-between items-center px-4 py-3 rounded-sm"
        style={{ opacity: task.finished ? 0.6 : 1 }}
        // onPress={handleOpenSheet}
      >
        <View className="flex-row gap-4">
          <View className="bg-[#F4F2F1] w-11 h-11 rounded-full items-center justify-center">
            <ThemedText className="text-center">{task.emoji}</ThemedText>
          </View>

          <View style={{}}>
            <ThemedText>{task.name}</ThemedText>
            <ThemedText className="text-[#564E4A]">{`start at ${task.time}`}</ThemedText>
          </View>
        </View>
        {/* TODO: use ios icons packages */}
        <MaterialCommunityIcons name="toggle-switch" />
        {/* <Toggle variant="checkbox" inputOuterStyle={$checkboxInput} value={task.finished} /> */}
      </TouchableOpacity>
      {/* <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={[500, "70%"]}
        backdropComponent={renderBackdrop}
        style={$bottomSheetContainer}
        onDismiss={() => setIsSheetOpen(false)}
      >
        <BottomSheetView style={$bottomSheet}>
          <View style={$bottomSheetIcons}>
            <View style={$taskEmojiContainer}>
              <Text text={task.emoji} size="lg" style={$emojiText} />
            </View>
            <View style={$taskEmojiContainer}>
              <Icon
                icon="pencil"
                size={16}
                onPress={() =>
                  navigate("EditHabit", {
                    habitId: 1,
                  })
                }
              />
            </View>
          </View>
          <Text text={task.name} preset="heading" size="xl" />
          <View style={$daysContainer}>
            {days?.map((d, idx) => (
              <View key={`day-${d.day}-${idx}`} style={$dayContainerStyle}>
                <Text text={d.abbr} style={$dayStyle} size="md" />
              </View>
            ))}
          </View>
          <View style={{ marginBottom: spacing.md }}>
            <View style={$frequencyContainer}>
              <Text preset="formLabel" text="Habit time" style={$labelStyle} />
              <Text text="*" style={$labelRequired} />
            </View>
            <View
              style={{
                backgroundColor: colors.palette.neutral200,
                width: layout.window.width * 0.25,
                padding: spacing.sm,
                borderRadius: spacing.sm,
              }}
            >
              <Text text="06:00 PM" />
            </View>
          </View>
          <View>
            <View style={{}}>
              <Text preset="formLabel" text="Reminders" style={$labelStyle} />
            </View>
            <View style={$reminder}>
              <Text text="30 minutes before" size="md" />
              <Icon icon="caretRight" />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal> */}
    </>
  );
}
