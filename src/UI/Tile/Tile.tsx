import React, { useState } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import { CustomText } from "UI/CustomText";

export const Tile: React.FC<{ spanishWord: string; englishWord: string }> = ({
	spanishWord,
	englishWord,
}) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const flipCard = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<View style={styles.cardContainer}>
			{isFlipped ? (
				<TouchableOpacity
					style={{ ...styles.card, ...styles.cardEnglish }}
					onPress={() => setIsFlipped(!isFlipped)}
				>
					<CustomText>{englishWord}</CustomText>
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					style={{ ...styles.card, ...styles.cardSpanish }}
					onPress={() => setIsFlipped(!isFlipped)}
				>
					<CustomText>{spanishWord}</CustomText>
				</TouchableOpacity>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	card: {
		width: 350,
		height: 550,
		borderRadius: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	cardEnglish: {
		backgroundColor: "#4c4d52",
	},
	cardSpanish: {
		backgroundColor: "#232429",
	},
});
