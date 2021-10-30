import React from "react";
import {
	NativeSyntheticEvent,
	NativeTouchEvent,
	Pressable,
	StyleSheet,
	Text,
} from "react-native";

interface CustomButtonProps {
	title: string;
	onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
	buttonStyles?: any;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
	title,
	onPress,
	buttonStyles,
}) => {
	return (
		<Pressable
			style={{ ...styles.customButton, ...buttonStyles }}
			onPress={onPress}
		>
			<Text style={styles.customButtonTitle}>{title}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	customButton: {
		width: 150,
		borderRadius: 10,
		backgroundColor: "#4550C5",
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 10,
		paddingLeft: 10,
	},
	customButtonTitle: {
		fontSize: 20,
		color: "#FDFDFD",
		textAlign: "center",
	},
});
