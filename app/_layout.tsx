import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	const styles = StyleSheet.create({
		headerText: {
			fontFamily: "arial",
			textAlign: "center",
		},

		buttonStyle: {
			padding: 20,
			backgroundColor: "#007bff",
			color: "white",
			fontSize: 20,
			borderRadius: 10,
			width: 200,
			height: 50,
			justifyContent: "center",
			alignItems: "center",
		},

		buttonContainer: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},

		countContainer: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			margin: 20,
		},
	});
	const [count, setCount] = useState(0);

	return (
		<View>
			<Text style={styles.headerText}>Hello World React Native !</Text>

			<View style={styles.countContainer}>
				<Text>{count}</Text>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					onPress={() => setCount(count + 1)}
					style={styles.buttonStyle}
				>
					Click me
				</TouchableOpacity>
			</View>
		</View>
	);
}
