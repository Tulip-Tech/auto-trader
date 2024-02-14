import React from 'react'
import OpeningHoursComponent from '../car-show/opening-hours';
import UnifiedInfoComponent from '../car-show/unified-info';

const ContactUsComponent = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="grid md:grid-cols-12 gap-5 mt-2">
          <div className="md:col-span-9 space-y-16">
            <div>
              <h2 className="text-slate text-3xl font-bold my-6">
                B & F Cars Northampton
              </h2>
              <div className="bg-gray-800 relative overflow-hidden h-screen rounded-lg border-4 p-2 border-primary">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.510210166525!2d-0.9024908233351063!3d52.25227947199226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770e954fb83eb7%3A0x8dceba2937b313ba!2sKnightley%20Rd%2C%20Northampton%20NN2%206HQ%2C%20UK!5e0!3m2!1sen!2sbd!4v1706869323200!5m2!1sen!2sbd"
                ></iframe>
              </div>
            </div>
            <div>
              <h2 className="text-slate text-3xl font-bold my-6">
                Syston Autos Ltd.
              </h2>
              <div className="bg-gray-800 relative overflow-hidden h-screen rounded-lg border-4 p-2 border-primary">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.4672604552816!2d-1.093426224128589!3d52.705710972110445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879df52e2a72b9b%3A0xd640f7977e616abb!2s10%20Mill%20Ln%2C%20Leicester%20LE7%201NS%2C%20UK!5e0!3m2!1sen!2sbd!4v1706869690098!5m2!1sen!2sbd"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 mt-[80px]">
            <UnifiedInfoComponent />
            <OpeningHoursComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsComponent;