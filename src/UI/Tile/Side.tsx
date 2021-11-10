import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { CustomText } from "UI";

interface SideComponent {
	word: string;
	image: ImageSourcePropType;
	example: string;
	cardTypeStyle: any;
}

export const Side: React.FC<SideComponent> = ({
	word,
	image,
	example,
	cardTypeStyle,
}) => {
	return (
		<View style={{ ...styles.card, ...cardTypeStyle }}>
			<View style={imageStyles.imageContainer}>
				<Image style={imageStyles.imageContent} source={image} />
			</View>
			<View>
				<CustomText customStyle={wordStyles.word}>{word}</CustomText>
			</View>
			<View style={exampleStyles.exampleContainer}>
				<CustomText customStyle={exampleStyles.exampleContent}>
					{example}
				</CustomText>
			</View>
		</View>
	);
};

const imageStyles = StyleSheet.create({
	imageContainer: {
		marginTop: 30,
		marginLeft: 50,
		marginRight: 50,
	},
	imageContent: {
		height: 120,
		width: 120,
	},
});

const wordStyles = StyleSheet.create({
	word: {
		fontSize: 22,
		fontWeight: "bold",
		color: "#FDFDFD",
	},
});

const exampleStyles = StyleSheet.create({
	exampleContainer: {
		width: "75%",
	},
	exampleContent: {
		fontSize: 18,
		textAlign: "center",
	},
});

const styles = StyleSheet.create({
	card: {
		borderRadius: 30,
		height: "100%",
		width: "100%",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
});
