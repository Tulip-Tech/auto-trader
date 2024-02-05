import { writeFile } from 'fs/promises'
import { ofetch } from 'ofetch';

const PLACES_API_KEY = process.env.GOOGLE_PLACE_API_KEY || null
const BRANCHES = JSON.parse((process.env.NEXT_PUBLIC_BRANCHES || '{}')) as Record<string, Record<string, string>>

const FILE_PATH = 'googleReviews.json'

async function writeReviews() {
    const branchKeys = Object.keys(BRANCHES)
    const branchValues = Object.values(BRANCHES).filter(branch => !!branch?.placeId);
    const reviewResponses = await Promise.all(Object.values(branchValues).filter(branch => !!branch?.placeId).map(branch => ofetch<{
        result: { rating: number, reviews: any[], user_ratings_total: number }
    }>(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${branch?.placeId}&fields=reviews%2Crating%2Cuser_ratings_total&key=${PLACES_API_KEY}&reviews_sort=newest`
    )))

    const googleReviews: Record<string, any> = {}
    for (let j = 0; j < reviewResponses.length; j++) {
        googleReviews[branchKeys[j]] = {
            ...reviewResponses[j]?.result || {},
        }
    }

    await writeFile(FILE_PATH, JSON.stringify(googleReviews))
    console.log('✨ Wrote google reviews to file')
}

writeReviews()
