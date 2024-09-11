import { TextInput, View } from "react-native"

type Props = {
    value: string,
    onChange: (s: string) => void,
}

export function SearchBar ({value, onChange}: Props) {
    return <View>
        <TextInput onChangeText={onChange} value={value} />
    </View>
}