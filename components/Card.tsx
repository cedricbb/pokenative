import { Shadows } from "@/constants/Shadows";
import { useThemeColors } from "@/hooks/useThemeColors";
import { ViewProps, ViewStyle } from "react-native";
import { View } from "react-native";

type Props = ViewProps

export function Card ({style, ...rest}: Props) {
    const colors = useThemeColors()
    return <View style={[style, styles, {backgroundColor: colors.grayWhite}]} {...rest} />
}

const styles = {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    ...Shadows.dp2
} satisfies ViewStyle