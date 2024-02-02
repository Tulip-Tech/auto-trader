import React from 'react'

import OpeningHoursComponent from '../car-show/opening-hours';
import UnifiedInfoComponent from '../car-show/unified-info';

const PartExchangeComponent = () => {
  return (
    <>
      <div className="flex flex-col -mt-10">
        <div className="grid md:grid-cols-12 gap-5 mt-2">
          <div className="md:col-span-9 space-y-2">
            <h2 className="text-slate text-3xl font-bold my-6">
              Part Exchange
            </h2>
            <p className="text-xl font-medium text-slate">
              To make buying your next car as simple as possible we offer
              excellent part exchange prices on a wide range of vehicles. Call
              us today, or pop in and we will give you a valuation straight
              away, meaning you are one step closer to driving away in the car
              of your dreams.
            </p>
          </div>
          <div className="md:col-span-3 mt-[50px]">
            <UnifiedInfoComponent/>
            <OpeningHoursComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default PartExchangeComponent;