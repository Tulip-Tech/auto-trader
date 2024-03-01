import React from 'react';
import { BiMobile } from 'react-icons/bi';
import { CiMail } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';

 type ContactInfoProps = {
  location: string;
  phone: string;
  mobile: string;
  email: string;
  address: string;
}

const ContactInfoComponent: React.FC<ContactInfoProps> = ({
  location,
  phone,
  mobile,
  email,
  address,
}) => {
  const encodedAddress = encodeURIComponent(address);

  return (
    <div className="w-full overflow-hidden shadow-lg bg-white mb-4 rounded-lg">
      <div className="">
        <div className="flex flex-col space-y-1 text-center border-b p-5 bg-primary text-white">
          <span className="font-semibold">{location}</span>
        </div>
        <div className="px-6 py-4 space-y-4">
          <div className="text-slate flex items-center gap-2">
            <FaPhoneAlt size={16} />
            <a href={`tel:${phone}`} className="text-sm">
              {phone}
            </a>
          </div>
          <div className="text-slate flex items-center gap-2">
            <BiMobile size={16} />
            <a href={`tel:${mobile}`} className="text-sm">
              {mobile}
            </a>
          </div>
          <div className="text-slate flex items-center gap-2">
            <CiMail size={16} />
            <a href={`mailto:${email}`} className="text-sm break-all">
              {email}
            </a>
          </div>
          <div className="text-slate flex items-center gap-2">
            <GrLocation size={16} />
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`} target="_blank" rel="noopener noreferrer" className="text-sm">
              <address className="not-italic">{address}</address>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoComponent;
