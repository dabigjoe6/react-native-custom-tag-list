import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, TextInput, ToastAndroid } from 'react-native';
import Tag from './Tag';

interface Props {
	onToggleTag: any,
	data: any,
	customTag?: boolean
	maxSelectableTag?: number
}

export default function TagList(props: Props) {

	const [changed, setChanged] = useState(false);
	const [tagsCount, setTagsCount] = useState(0);


	const [tagsData, setTagsData] = useState(props.data);

	useEffect(() => {
		if (props.customTag === true) {
			let newTagsData: any = tagsData;

			newTagsData["input"] = {
				"id": "input"
			}

			setTagsData(newTagsData);
		}

	}, []);

	function addCustomTag(eventObject: any) {
		let newTags = tagsData;

		// @ts-ignore
		let index = Object.values(tagsData).length - 1;

		//@ts-ignore
		newTags[index] = {
			"id": index,
			"title": eventObject.nativeEvent.text,
			"selected": tagsCount < 5 ? true : false
		}

		setTagsData(newTags);

		setTagsCount(tagsCount + 1);

		setChanged(!changed);
	}

	function toggleTag(id: any) {


		let newTags: any = tagsData;

		const selectedReducer = (item: any) => {
			return item.selected
		}

		if (typeof props.maxSelectableTag !== "undefined") {
			//@ts-ignore
			if (newTags[id].selected === false && tagsCount >= props.maxSelectableTag) {
				ToastAndroid.show(`You can't pick more than ${props.maxSelectableTag} tags`, ToastAndroid.SHORT);
			} else {
				//@ts-ignore

				newTags[id].selected = !newTags[id].selected;
				setTagsData(newTags);

				//@ts-ignore

				setTagsCount(Object.values(tagsData).filter(selectedReducer).length);

				props.onToggleTag(id);

			}
		} else {
			newTags[id].selected = !newTags[id].selected;
			setTagsData(newTags);

			//@ts-ignore

			setTagsCount(Object.values(tagsData).filter(selectedReducer).length);



			props.onToggleTag(id);
		}

		setChanged(!changed);
	}


	function renderItem({ item }: any) {
		if (item.id !== "input") {
			return (
				<Tag
					id={item.id}
					color="#4DA801"
					title={item.title}
					selected={item.selected}
					toggleTag={toggleTag} />
			)
		} else {
			return (
				<TextInput onSubmitEditing={addCustomTag}
					placeholder="Add custom tag"
					style={{ borderBottomColor: "#4DA801", borderBottomWidth: 1, marginVertical: 10, marginHorizontal: 5, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 4, borderRadius: 18, alignItems: 'center' }}
				/>
			)
		}
	}


	return (
		<View style={styles.container}>
			<FlatList
				// @ts-ignore
				data={Object.values(tagsData)}
				renderItem={renderItem}
				numColumns={2}
				contentContainerStyle={{ alignItems: 'center' }}
				extraData={changed}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
		alignItems: 'center',
		width: '100%'
	}
})