import React from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { CustomText } from "UI/CustomText";

export const Side: React.FC<{
	styles: StyleProp<ViewStyle>;
	flipCard: () => void;
	word: string;
}> = ({ styles, flipCard, word }) => {
	return (
		<TouchableOpacity style={styles} onPress={flipCard}>
			<CustomText>{word}</CustomText>
		</TouchableOpacity>
	);
};
