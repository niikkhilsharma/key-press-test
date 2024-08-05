import { NextResponse } from 'next/server'

export async function GET() {
	const dogDataResponse = await fetch('https://dog.ceo/api/breeds/image/random')
	const dogData = await dogDataResponse.json()
	return NextResponse.json(dogData)
}
