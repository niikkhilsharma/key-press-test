'use client'

import React, { useState } from 'react'

export default function Home() {
	const [value, setValue] = useState('')

	const testFunction = e => {
		console.log(`Key pressed: ${e.key}`)
		alert(e.key)
		setValue(e.target.value)
	}

	return (
		<div>
			<form action="#">
				<input type="text" name="text" id="text" onKeyDown={e => testFunction(e)} className="border border-black p-4" />
			</form>
		</div>
	)
}
