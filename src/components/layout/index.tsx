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
            <div className="px-32 mb-10">{children}</div>
        </div>
    );
};

export default AppLayout;
