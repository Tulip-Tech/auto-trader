import React from 'react';
import { BiMobile } from 'react-icons/bi';
import { CiMail } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';

interface ContactInfoProps {
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
  return (
    <div className="max-w-sm overflow-hidden shadow-lg bg-white mb-4 rounded-lg">
      <div className="">
        <div className="flex flex-col space-y-1 text-center border-b p-5 bg-primary text-white">
          <span className="font-semibold">{location}</span>
        </div>
        <div className="px-6 py-4 space-y-4">
          <div className="text-slate flex items-center gap-2">
            <FaPhoneAlt size={16} />
            <p className="text-sm">{phone}</p>
          </div>
          <div className="text-slate flex items-center gap-2">
            <BiMobile size={16} />
            <p className="text-sm">{mobile}</p>
          </div>
          <div className="text-slate flex items-center gap-2">
            <CiMail size={16} />
            <p className="text-sm break-all">{email}</p>
          </div>
          <div className="text-slate flex items-center gap-2">
            <GrLocation size={16} />
            <p className="text-sm">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoComponent;
