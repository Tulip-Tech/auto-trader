/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import googleReviews from '../../../../googleReviews.json';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: number;
}

const GoogleReviewsComponent: React.FC = () => {
  const router = useRouter();
  const slug = Array.isArray(router.query.slug) ? router.query.slug[0] : router.query.slug;

  const getReviews = () => {
    if (slug && Object.keys(googleReviews).includes(slug)) {
      return googleReviews[slug as keyof typeof googleReviews]?.reviews || [];
    } else {
      return Object.values(googleReviews).flatMap(location => location.reviews || []);
    }
  };

  const reviews: Review[] = getReviews().slice(0, 3);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
    return (
      <div className="flex gap-2">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar className="text-yellow-500" key={`full-${i}`} />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" key="half" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar className="text-yellow-500" key={`empty-${i}`} />
        ))}
      </div>
    );
  };
  

  return (
    <div>
      <div className="rounded-lg bg-white p-2 shadow-sm sm:p-4 my-4">
        <Image
          priority
          src="/google-review/google-reviews.png"
          alt="logo"
          width={249}
          height={91}
          className="w-full"
        />
      </div>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div
            className="rounded-lg bg-white p-6 shadow-sm sm:p-8 my-4"
            key={index}
          >
            <div className="flex gap-4">
              <img
                alt="Person"
                src={review?.profile_photo_url}
                className="h-12 w-12 pt-2 rounded-full object-cover"
              />

              <div>
                <p className="mt-0.5 text-lg font-medium text-slate">
                  {review?.text}
                </p>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              {renderStars(review.rating)}
            </div>
          </div>
        ))
      ) : (
        <p className="text-lg font-medium text-slat">
          No reviews available for this location
        </p>
      )}

      <Link
        href={
          "https://www.google.com/search?q=B%26F+Cars+Northampton&rlz=1C1BNSD_enBD1010BD1012&oq=b%26F+Cars+Northampton&gs_lcrp=EgZjaHJvbWUqDAgAEEUYOxjjAhiABDIMCAAQRRg7GOMCGIAEMg0IARAuGK8BGMcBGIAEMggIAhAAGBYYHjIGCAMQRRg8MgYIBBBFGD3SAQg0MDg2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
        }
        target="_blank"
        className="flex gap-2 justify-center items-center"
      >
        <FcGoogle />
        <p className="text-sm font-bold underline">View all Google reviews</p>
      </Link>
    </div>
  );
};

export default GoogleReviewsComponent;
