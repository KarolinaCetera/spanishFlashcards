import React from "react";
import { StyleSheet } from "react-native";
import FlipCard from "react-native-flip-card";

import { Side } from "./Side";

export const Tile: React.FC<{
	spanishWord: string;
	englishWord: string;
	englishExample: string;
	spanishExample: string;
}> = ({ spanishWord, englishWord, englishExample, spanishExample }) => {
	return (
		<FlipCard
			style={styles.cardContainer}
			flipHorizontal={true}
			flipVertical={false}
		>
			<Side
				word={englishWord}
				image={require("../../assets/united-kingdom.png")}
				example={englishExample}
				cardTypeStyle={styles.cardEnglish}
			/>
			<Side
				word={spanishWord}
				image={require("../../assets/spain.png")}
				example={spanishExample}
				cardTypeStyle={styles.cardSpanish}
			/>
		</FlipCard>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	cardEnglish: {
		backgroundColor: "#9b9bc7",
	},
	cardSpanish: {
		backgroundColor: "#232429",
	},
});
