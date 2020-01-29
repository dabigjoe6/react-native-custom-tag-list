import React, { useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, ShadowPropTypesIOS } from 'react-native';


interface Props {
	id: number
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

	let activeBackgroundColor: string | undefined = props.activeBackgroundColor;
	let inactiveBackgroundColor: string | undefined = props.inactiveBackgroundColor;
	let activeTextColor: string | undefined = props.activeTextColor;
	let inactiveTextColor: string | undefined = props.inactiveTextColor;
	let activeBorderColor: string | undefined = props.activeBorderColor;
	let inactiveBorderColor: string | undefined = props.inactiveBorderColor;

	if (typeof props.activeBackgroundColor === 'undefined') {
		activeBackgroundColor = props.color
	}

	if (typeof props.inactiveBackgroundColor === 'undefined') {
		inactiveBackgroundColor = 'white'
	}

	if (typeof props.activeTextColor === 'undefined') {
		activeTextColor = 'white'
	}

	if (typeof props.inactiveTextColor === 'undefined') {
		inactiveTextColor = props.color
	}

	if (typeof props.activeBorderColor === 'undefined') {
		activeBorderColor = props.color
	}

	if (typeof props.inactiveBorderColor === 'undefined') {
		inactiveBorderColor = props.color
	}

	const backgroundColor = props.selected ? activeBackgroundColor : inactiveBackgroundColor;
	const color = props.selected ? activeTextColor : inactiveTextColor;
	const borderColor = props.selected ? activeBorderColor : inactiveBorderColor

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
		<TouchableWithoutFeedback onPress={() => props.toggleTag(props.id)}>
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