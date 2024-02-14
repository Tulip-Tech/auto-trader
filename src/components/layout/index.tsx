import React from 'react';
import HeaderComponent from '@/components/layout/header';
import FooterComponent from './footer/footer';
import UsedVehicleComponent from './used-vehicle';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import { IoMdHome } from 'react-icons/io';

type Props = {
    children: React.ReactElement | React.ReactNode;
    className: string;
};

const AppLayout = ({ children, className }: Props) => {
  const router = useRouter();

  const pathSegments = router.asPath.split('?')[0].split('/').filter((v) => v.length > 0);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const name = segment.charAt(0).toUpperCase() + segment.slice(1);
    return { name, href };
  });

  return (
    <div className={`w-full h-full ${className}`}>
      <HeaderComponent />

      <nav aria-label="Breadcrumb" className="px-5 sm:px-10 md:px-20 mt-20">
        <ol className="flex items-center gap-1 text-sm text-gray-600">
          <li>
            <Link href="/" passHref className="flex gap-1 items-center">
              <IoMdHome />
              <p className="block transition hover:text-gray-700 text-xs sm:text-base">
                Home
              </p>
            </Link>
          </li>
          {breadcrumbs.length === 0 && (
            <>
              <li>
                <FaChevronRight />
              </li>
              <li>
                <Link href="/" passHref>
                  <p className="block transition hover:text-gray-700 font-semibold text-xs sm:text-base">
                    B&F Cars
                  </p>
                </Link>
              </li>
            </>
          )}
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <li>
                <FaChevronRight />
              </li>
              <li>
                {index + 1 === breadcrumbs.length ? (
                  <span className="text-gray-500 font-semibold text-xs sm:text-base">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.href} passHref>
                    <p className="block transition hover:text-gray-700 text-xs sm:text-base">
                      {crumb.name}
                    </p>
                  </Link>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>

      <div className="px-5 sm:px-10 md:px-20">{children}</div>
      <div className="px-5 sm:px-10 md:px-20 sm:py-16 py-8">
        <Image
          priority
          src="/footer/hc-bdc-large.gif"
          alt="logo"
          width={850}
          height={160}
          className="w-full"
        />
      </div>
      <UsedVehicleComponent />
      <FooterComponent />
    </div>
  );
};

export default AppLayout;
