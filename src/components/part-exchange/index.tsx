/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import OpeningHoursComponent from '../car-show/opening-hours';
import UnifiedInfoComponent from '../car-show/unified-info';
import { FaPen } from 'react-icons/fa';

const PartExchangeComponent = () => {
  return (
    <>
      <div className="flex flex-col -mt-10">
        <div className="grid md:grid-cols-12 gap-5 mt-2">
          <div className="md:col-span-9">
            <h2 className="text-slate text-3xl font-bold my-6">
              Upgrade Your Ride with Our Hassle-Free Car Exchange Program
            </h2>
            <p className="text-2xl font-medium text-slate pb-6">
              At B&F Cars, we understand the excitement and anticipation that
              comes with buying a new car. That's why we've streamlined the
              process to make getting behind the wheel of your dream car as
              effortless as possible. Our comprehensive Part Exchange Program is
              designed to offer competitive valuations for a wide variety of
              vehicles, ensuring you receive the best possible deal when you
              trade in your current car for a new one.
            </p>
            <h2 className="text-slate text-3xl font-bold my-6">
              Get Started Today
            </h2>
            <ul className="list-inside space-y-6">
              <li className="text-2xl font-medium text-slate flex gap-2">
                <div className="mt-2 text-primary">
                  <FaPen size={18} />
                </div>
                <p>
                  <strong>Convenience:</strong> Say goodbye to the complications
                  of selling your old car privately. Our part exchange service
                  is straightforward and efficient. Simply bring your car to us,
                  and we'll handle the rest.
                </p>
              </li>
              <li className="text-2xl font-medium text-slate flex gap-2">
                <div className="mt-2 text-primary">
                  <FaPen size={18} />
                </div>
                <p>
                  <strong>Competitive Valuations:</strong> We pride ourselves on
                  offering fair, market-driven prices for all part-exchange
                  vehicles. Our team of experienced appraisers uses the latest
                  market data to ensure you get the best value for your
                  trade-in.
                </p>
              </li>
              <li className="text-2xl font-medium text-slate flex gap-2">
                <div className="mt-2 text-primary">
                  <FaPen size={18} />
                </div>
                <p>
                  <strong>Wide Selection:</strong> With a diverse range of new
                  and pre-owned cars, finding your next vehicle is easier than
                  ever. Whether you're looking for the latest model or a
                  cost-effective pre-owned option, we have something to suit
                  every taste and budget.
                </p>
              </li>
              <li className="text-2xl font-medium text-slate flex gap-2">
                <div className="mt-2 text-primary">
                  <FaPen size={18} />
                </div>
                <p>
                  <strong>Personalised Service:</strong> Our dedicated team is
                  here to guide you through every step of the process. From
                  valuation to browsing our selection and finalising your
                  exchange, we're committed to making your experience seamless
                  and enjoyable.
                </p>
              </li>
            </ul>
            <h2 className="text-slate text-3xl font-bold my-6 pt-6">
              Get Started Today
            </h2>
            <p className="text-2xl font-medium text-slate">
              Ready to make the switch? Contact us today to learn more about our
              Part Exchange Program or visit us in person for an instant
              valuation. At B&F Cars, your next automotive adventure awaits. Let
              us help you transition smoothly into the car of your dreams with
              our easy, transparent, and customer-focused service.
            </p>
          </div>
          <div className="md:col-span-3 mt-[50px]">
            <UnifiedInfoComponent />
            <OpeningHoursComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default PartExchangeComponent;