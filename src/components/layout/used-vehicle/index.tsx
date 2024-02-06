import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { FaAngleRight } from 'react-icons/fa';

const UsedVehicleComponent = () => {
  const router = useRouter()
  const locationPrefix = router.query.slug ? `/${router.query.slug}` : '';

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
                <Link
                  href={`${locationPrefix}/?page=1&make=Audi`}
                  className="flex gap-1 text-white items-center"
                >
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used AUDI</p>
                </Link>
              </li>
              <li>
                <Link
                  href={`${locationPrefix}/?page=1&make=Honda`}
                  className="flex gap-1 text-white items-center"
                >
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used HONDA</p>
                </Link>
              </li>
              <li>
                <Link
                  href={`${locationPrefix}/?page=1&make=Mazda`}
                  className="flex gap-1 text-white items-center"
                >
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used MAZDA</p>
                </Link>
              </li>
              <li>
                <Link
                  href={`${locationPrefix}/?page=1&make=Renault`}
                  className="flex gap-1 text-white items-center"
                >
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">
                    Used RENAULT
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href={`${locationPrefix}/?page=1&make=Volkswagen`}
                  className="flex gap-1 text-white items-center"
                >
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">
                    Used VOLKSWAGEN
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link
                  href={`${locationPrefix}/?page=1&make=Dacia`}
                  className="flex gap-1 text-white items-center"
                >
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used DACIA</p>
                </Link>
              </li>
              <li>
                <Link
                  href={`${locationPrefix}/?page=1&make=Hyundai`}
                  className="flex gap-1 text-white items-center"
                >
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">
                    Used HYUNDAI
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href={`${locationPrefix}/?page=1&make=Mini`}
                  className="flex gap-1 text-white items-center"
                >
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used MINI</p>
                </Link>
              </li>
              <li>
                <Link
                  href={`${locationPrefix}/?page=1&make=Tesla`}
                  className="flex gap-1 text-white items-center"
                >
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used TESLA</p>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link
                  href={`${locationPrefix}/?page=1&make=Fiat`}
                  className="flex gap-1 text-white items-center"
                >
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used FIAT</p>
                </Link>
              </li>
              <li>
                <Link
                  href={`${locationPrefix}/?page=1&make=Jaguar`}
                  className="flex gap-1 text-white items-center"
                >
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">
                    Used JAGUAR
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href={`${locationPrefix}/?page=1&make=Nissan`}
                  className="flex gap-1 text-white items-center"
                >
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">
                    Used NISSAN
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href={`${locationPrefix}/?page=1&make=Toyota`}
                  className="flex gap-1 text-white items-center"
                >
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">
                    Used TOYOTA
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <Link
                  href={`${locationPrefix}/?page=1&make=Ford`}
                  className="flex gap-1 text-white items-center"
                >
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used FORD</p>
                </Link>
              </li>
              <li>
                <Link
                  href={`${locationPrefix}/?page=1&make=Lexus`}
                  className="flex gap-1 text-white items-center"
                >
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">Used LEXUS</p>
                </Link>
              </li>
              <li>
                <Link
                  href={`${locationPrefix}/?page=1&make=Peugeot`}
                  className="flex gap-1 text-white items-center"
                >
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">
                    Used PEUGEOT
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href={`${locationPrefix}/?page=1&make=Vauxhall`}
                  className="flex gap-1 text-white items-center"
                >
                  <FaAngleRight size={20} />
                  <p className="font-medium text-white text-base">
                    Used VAUXHALL
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsedVehicleComponent;
