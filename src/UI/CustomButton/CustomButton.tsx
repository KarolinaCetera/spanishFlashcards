import React, { useState } from "react";
import {
	NativeSyntheticEvent,
	NativeTouchEvent,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from "react-native";

interface CustomButtonProps {
	title: string;
	onPress: () => void;
	buttonStyles?: any;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
	title,
	onPress,
	buttonStyles,
}) => {
	return (
		<TouchableHighlight onPress={onPress}>
			<View style={{ ...styles.customButton, ...buttonStyles }}>
				<Text style={styles.customButtonTitle}>{title}</Text>
			</View>
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	customButton: {
		borderRadius: 10,
		backgroundColor: "#6a6bd9",
	},
	customButtonTitle: {
		fontSize: 15,
		color: "#FDFDFD",
		textAlign: "center",
	},
	customButtonPressed: {
		borderColor: "#6A6BD9",
	},
});
