import { dummyWords } from "consts";
import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { CustomButton, CustomText, Tile } from "UI";

export const Random: React.FC = () => {
	const { width, height } = useWindowDimensions();

	const getRandomWord = () => {
		const prop = Object.keys(dummyWords)[
			Math.floor(Math.random() * Object.keys(dummyWords).length)
		];

		return dummyWords[prop][
			Math.floor(Math.random() * dummyWords[prop].length)
		];
	};

	const [randomWord, setRandomWord] = useState(getRandomWord() ?? "");

	const onPressButton = (): void => {
		setRandomWord(getRandomWord());
		console.log("Test")
	};

	return (
		<View style={styles.random}>
			<View style={styles.randomText}>
				<CustomText customStyle={styles.randomTextContent}>
					Click to get translation
				</CustomText>
			</View>
			<View style={styles.randomTile}>
				<Tile
					englishWord={randomWord.english}
					spanishWord={randomWord.spanish}
					englishExample={randomWord.englishExample}
					spanishExample={randomWord.spanishExample}
				/>
			</View>
			<View style={styles.randomButtonContainer}>
				<CustomButton
					title="Get Random Word"
					buttonStyles={styles.randomButton}
					onPress={onPressButton}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	random: {
		flex: 1,
		alignItems: "center",
		alignSelf: "center",
		justifyContent: "space-evenly",
		width: "90%",
		// borderColor: "green",
		// borderWidth: 2,
		// borderStyle: "solid",
	},
	randomText: {
		flex: 1,
		justifyContent: "center",
	},
	randomTextContent: {
		fontSize: 25,
		fontWeight: "bold",
		color: "#FDFDFD",
	},
	randomTile: {
		flex: 4,
		alignItems: "center",
		width: "100%",
		// borderColor: "blue",
		// borderWidth: 2,
		// borderStyle: "solid",
	},
	randomButtonContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	randomButton: {
		paddingTop: 12,
		paddingRight: 12,
		paddingBottom: 12,
		paddingLeft: 12,
	},
});
