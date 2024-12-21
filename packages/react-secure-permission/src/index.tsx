import React, { ReactNode } from 'react';

export const PermissionComponent: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    return (
        <div>
            <div>Secure Permission</div>
            <div>{children}</div>
        </div>
    );
};
