import Image from 'next/image';
import React from 'react'

const OpeningHoursComponent = () => {
  return (
    <div className="max-w-sm overflow-hidden shadow-lg bg-white mb-4 rounded-lg">
      <div className="">
        <div className="flex flex-col space-y-1 text-center border-b p-5 bg-primary text-white">
          <span className="font-semibold">Opening Hours</span>
        </div>
        <div className="px-6 py-4 space-y-4">
          <hr />
          <div className="text-slate flex items-center gap-2 justify-between font-bold">
            <p className="text-sm">Monday:</p>
            <p className="text-sm">09:00 - 18:00</p>
          </div>
          <hr />
          <div className="text-slate flex items-center gap-2 justify-between">
            <p className="text-sm">Tuesday:</p>
            <p className="text-sm">09:00 - 18:00</p>
          </div>
          <hr />
          <div className="text-slate flex items-center gap-2 justify-between">
            <p className="text-sm">Wednesday:</p>
            <p className="text-sm">09:00 - 18:00</p>
          </div>
          <hr />
          <div className="text-slate flex items-center gap-2 justify-between">
            <p className="text-sm">Thursday:</p>
            <p className="text-sm">09:00 - 18:00</p>
          </div>
          <hr />
          <div className="text-slate flex items-center gap-2 justify-between">
            <p className="text-sm">Friday:</p>
            <p className="text-sm">09:00 - 18:00</p>
          </div>
          <hr />
          <div className="text-slate flex items-center gap-2 justify-between">
            <p className="text-sm">Saturday:</p>
            <p className="text-sm">09:00 - 18:00</p>
          </div>
          <hr />
          <div className="text-slate flex items-center gap-2 justify-between">
            <p className="text-sm">Sunday:</p>
            <p className="text-sm">10:00 - 17:00</p>
          </div>
          <p className="text-2xl font-medium text-primary">
            Bank Holidays opening hours 10.00 - 17.00
          </p>
          <div className="w-full">
            <Image
              priority
              src="/contact-info/opening-hour-banner.svg"
              alt="logo"
              width={249}
              height={91}
              className="w-full"
            />
          </div>
          <div className="w-full">
            <Image
              priority
              src="/contact-info/hpi.svg"
              alt="logo"
              width={249}
              height={91}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpeningHoursComponent