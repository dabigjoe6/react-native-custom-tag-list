import React, { useState } from 'react';
import TagList from './src/components/TagList';

export default function App() {

	const [tagState, setTagState] = useState(false);

	const tagsData = {
		0: {
			"id": 0,
			"title": "Fast Delivery",
			"selected": false
		},
		1: {
			"id": 1,
			"title": 'Zero downtime',
			"selected": false
		},
		2: {
			"id": 2,
			"title": 'Sane environment',
			"selected": false
		},
		3: {
			"id": 3,
			"title": 'Polite staffs',
			"selected": false
		},
		4: {
			"id": 4,
			"title": 'Appropriate guidance',
			"selected": false
		},
		5: {
			"id": 5,
			"title": 'Clean',
			"selected": false
		},
		6: {
			"id": 6,
			"title": 'Organized settings',
			"selected": false
		},
		7: {
			"id": 7,
			"title": 'Tastes great',
			"selected": false
		},
		8: {
			"id": 8,
			"title": 'Sweet',
			"selected": false
		},
		"input": {
			"id": "input",
		}
	}

	function onToggleTag(id: any) {

		console.log(id)
		setTagState(!tagState);
	}

	return (
		<TagList
			onToggleTag={onToggleTag}
			data={tagsData}
			customTag={true}
			maxSelectableTag={5}
		/>
	)
}