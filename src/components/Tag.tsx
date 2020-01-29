import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, ShadowPropTypesIOS } from 'react-native';


interface Props {
	title: string,
	selected: boolean,
	toggleTag: any,
	color: string,
	activeBackgroundColor?: string,
	inactiveBackgroundColor?: string,
	activeTextColor?: string,
	inactiveTextColor?: string,
	activeIcon?: any,
	inactiveIcon?: any,
	activeBorderColor?: string,
	inactiveBorderColor?: string

}

export default function Tag(props: Props) {
	if (typeof props.activeBackgroundColor === 'undefined') {
		props.activeBackgroundColor = props.color;
	}

	if (typeof props.inactiveBackgroundColor === 'undefined') {
		props.inactiveBackgroundColor = 'white'
	}

	if (typeof props.activeTextColor === 'undefined') {
		props.activeTextColor = 'white'
	}

	if (typeof props.inactiveTextColor === 'undefined') {
		props.inactiveTextColor = props.color
	}

	if (typeof props.activeBorderColor === 'undefined') {
		props.activeBorderColor = props.color
	}

	if (typeof props.inactiveBorderColor === 'undefined') {
		props.inactiveBorderColor = props.color
	}

	const backgroundColor = props.selected ? props.activeBackgroundColor : props.inactiveBackgroundColor;
	const color = props.selected ? props.activeTextColor : props.inactiveTextColor;
	const borderColor = props.selected ? props.activeBorderColor : props.inactiveBorderColor

	function renderRightIcon() {
		if (props.selected) {
			return (
				props.activeIcon
			)
		} else {
			return (
				props.inactiveIcon
			)
		}
	}

	return (
		<TouchableWithoutFeedback onPress={props.toggleTag}>
			<View style={[styles.tagContainer, { backgroundColor, borderColor }]}>
				<Text style={[styles.title, { color }]}>{props.title}</Text>
				{renderRightIcon}
			</View>
		</TouchableWithoutFeedback>
	)
}

Tag.defaultProps = {
	activeIcon: null,
	inactiveIcon: null,
	activeBackgroundColor: undefined,
	inactiveBackgroundColor: undefined,
	activeTextColor: undefined,
	inactiveTextColor: undefined,
	activeBorderColor: undefined,
	inactiveBorderColor: undefined
}

const styles = StyleSheet.create({
	tagContainer: {
		borderWidth: 1,
		marginVertical: 10,
		marginHorizontal: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		paddingVertical: 4,
		borderRadius: 18,
		alignItems: 'center'
	},
	title: {
		fontSize: 16,
		marginRight: 5
	}
})