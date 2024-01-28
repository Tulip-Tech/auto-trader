import React from 'react';
import HeaderComponent from '@/components/layout/header';

type Props = {
    children: React.ReactElement | React.ReactNode;
    className: string;
};
const AppLayout = ({ children, className }: Props) => {
    return (
        <div className={`w-full h-full ${className}`}>
            <HeaderComponent/>
            <div className="xl:px-[350px] lg:px-[200px] md:px-[100px] px-[25px] mb-10">{children}</div>
        </div>
    );
};

export default AppLayout;
