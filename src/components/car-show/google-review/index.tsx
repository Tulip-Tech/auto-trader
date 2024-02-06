/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import googleReviews from '../../../../googleReviews.json' assert { type: 'json' };

const GoogleReviewsComponent: React.FC = () => {
    const router = useRouter();

    const getReviews = React.useCallback(() => {
        const slug = router.query.slug as string
        return (slug ? googleReviews[slug as keyof typeof googleReviews]?.reviews : Object.values(googleReviews).flatMap((k) => k?.reviews)).filter(Boolean)
    }, [router.query.slug]);

    const getAllReviewsLinkLrds = React.useCallback(() => {
        const slug = router.query.slug as string
        return (slug ? [{
            text: 'View all google reviews',
            link: googleReviews[slug as keyof typeof googleReviews]?.allReviewsLinkLrd
        }] : Object.keys(googleReviews).flatMap((k) => ({
            text: `View all ${k} google reviews`,
            link: googleReviews[k as keyof typeof googleReviews]?.allReviewsLinkLrd
        }))).filter(Boolean)
    }, [router.query.slug]);

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <div className="flex gap-2">
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar className="text-yellow-500" key={`full-${i}`}/>
                ))}
                {halfStar && <FaStarHalfAlt className="text-yellow-500" key="half"/>}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar className="text-yellow-500" key={`empty-${i}`}/>
                ))}
            </div>
        );
    };

    return (
        <div>
            <div className="rounded-lg bg-white p-2 shadow-sm sm:p-4 my-4">
                <div className="flex justify-center items-center">
                    <Image
                        priority
                        src="/google-review/google-reviews.png"
                        alt="logo"
                        width={150}
                        height={50}
                    />
                </div>
            </div>
            {getReviews().slice(0, 3).map((review, index) => (
                <div key={index} className="rounded-lg bg-white p-4 shadow-sm sm:p-6 my-2">
                    <div className="flex gap-4">
                        <img
                            alt="Person"
                            src={review?.profile_photo_url}
                            className="h-12 pt-2 rounded-full w-fit"
                        />
                        <p className="mt-0.5 text-lg font-medium text-slate">
                            {review?.text}
                        </p>
                    </div>
                    <div className="mt-4 flex justify-center">
                        {renderStars(review.rating)}
                    </div>
                </div>
            ))}

            <div className="grid gap-2">
                {
                    getAllReviewsLinkLrds().map(item => {
                        return (<Link
                            key={item.link}
                            href={item.link}
                            target="__blank"
                            className="flex gap-2 justify-center items-center"
                        >
                            <FcGoogle/>
                            <p className="text-sm font-bold underline">{item.text}</p>
                        </Link>)
                    })
                }
            </div>
        </div>
    );
};

export default GoogleReviewsComponent;
