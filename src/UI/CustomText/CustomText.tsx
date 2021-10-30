import React from "react";
import { Text, TextStyle } from "react-native";

export const CustomText: React.FC<{
	children: React.ReactNode;
	customStyle?: TextStyle;
}> = ({ children, customStyle }) => {
	return <Text style={{ color: "#5E6062", ...customStyle }}>{children}</Text>;
};
