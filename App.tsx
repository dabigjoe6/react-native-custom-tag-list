import React, { useState } from 'react';
import Tag from './src/components/Tag';

export default function App() {

	const [tagState, setTagState] = useState(false);

	function toggleTag() {

		console.log("Got here")
		setTagState(!tagState);
	}

	return (
		<Tag
			title="Testing"
			selected={tagState}
			toggleTag={toggleTag}
			color="#4DA801"
		/>
	)
}