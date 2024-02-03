import { writeFile } from 'fs/promises'
import { ofetch } from 'ofetch';

const filePath = 'googleReviews.json'
const northamptonPlaceId = 'ChZDSUhNMG9nS0VJQ0FnSUNsdWFPbVNnEAE'
// set key here
const placesApiKey = ''

async function writeReviews() {
    const googleResp = await ofetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${northamptonPlaceId}&fields=reviews%2Crating%2Cuser_ratings_total&key=${placesApiKey}&reviews_sort=newest`
    )

    //check if the Google API reviews total is different to what we have stored.
    const googleDirectReviews = googleResp as any
    const googleDirectReviewData = googleDirectReviews.data.result
    const googleReviews = {
        reviews: [],
        averageRating: 0,
        totalReviewCount: 0,
    }
    if (googleDirectReviewData) {
        googleReviews.averageRating = googleDirectReviewData.rating
        googleReviews.totalReviewCount = googleDirectReviewData.user_ratings_total

        // Filter out any below 4.6 rating, and that already appear in the file according to the timestamps (no id in the feed sadly)
        const newReviews = googleDirectReviewData.reviews.filter((item: any) => item.rating > 4.6)
        // Map the newReviews to the shape of the object.
        googleReviews.reviews = newReviews.map((review: any) => {
            return {
                reviewAuthor: review.author_name,
                reviewAuthorImage: review.profile_photo_url,
                reviewDate: review.relative_time_description,
                reviewRating: review.rating,
                reviewText: review.text,
                reviewUrl: review.author_url,
                rawDate: review.time,
            }
        })
    }

    await writeFile(filePath, JSON.stringify(googleReviews))
    console.log('✨ Wrote google reviews to file')
}

writeReviews()
