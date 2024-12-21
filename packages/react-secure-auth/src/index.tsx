import React, { ReactNode } from 'react';

export const AuthComponent: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    return (
        <div>
            <div>Secure Auth</div>
            <div>{children}</div>
        </div>
    );
};
