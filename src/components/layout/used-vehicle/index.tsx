import React from 'react'
import { FaAngleRight } from 'react-icons/fa';

const UsedVehicleComponent = () => {
  return (
    <div className="bg-primary">
      <div className="mx-auto px-10 md:px-20 space-y-8 py-16">
        <h2 className="text-white  font-semibold text-4xl text-center">
          USED VEHICLE MAKES CURRENTLY IN STOCK
        </h2>

        <div className="grid grid-cols-1 gap-8  sm:grid-cols-2 lg:grid-cols-4 ">
          <div>
            

            <ul className="space-y-4 text-sm">
              <li>
                <div className="flex gap-1 text-white items-center">
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used AUDI</p>
                </div>
              </li>
              <li>
                <div className="flex gap-1 text-white items-center">
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used HONDA</p>
                </div>
              </li>

              <li>
                <div className="flex gap-1 text-white items-center">
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used MAZDA</p>
                </div>
              </li>

              <li>
                <div className="flex gap-1 text-white items-center">
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used RENAULT</p>
                </div>
              </li>

              <li>
                <div className="flex gap-1 text-white items-center">
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used VOLKSWAGEN</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
           
            <ul className="mt-6 space-y-4 text-sm">

              <li>
                <div className="flex gap-1 text-white items-center">
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used DACIA</p>
                </div>
              </li>
              <li>
                <div className="flex gap-1 text-white items-center">
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used HYUNDAI</p>
                </div>
              </li>

              <li>
                <div className="flex gap-1 text-white items-center">
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used MINI</p>
                </div>
              </li>

              <li>
                <div className="flex gap-1 text-white items-center">
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used TESLA</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <div className="flex gap-1 text-white items-center">
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used FIAT</p>
                </div>
              </li>
              <li>
                <div className="flex gap-1 text-white items-center">
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used JAGUAR</p>
                </div>
              </li>

              <li>
                <div className="flex gap-1 text-white items-center">
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used NISSAN</p>
                </div>
              </li>

              <li>
                <div className="flex gap-1 text-white items-center">
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used TOYOTA</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
           
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <div className="flex gap-1 text-white items-center">
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used FORD</p>
                </div>
              </li>
              <li>
                <div className="flex gap-1 text-white items-center">
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used LEXUS</p>
                </div>
              </li>

              <li>
                <div className="flex gap-1 text-white items-center">
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used PEUGEOT</p>
                </div>
              </li>

              <li>
                <div className="flex gap-1 text-white items-center">
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used VAUXHALL</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsedVehicleComponent