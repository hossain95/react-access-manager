import React, { createContext, ReactNode, useState } from 'react';
import { PermissionType } from 'react-secure-permission/types/type';

const PermissionContext = createContext<PermissionType | null>(null);

const PermissionProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const retrievedSessionPermissions = localStorage.getItem(
        'session-permissions'
    );
    const parsedSessionPermissions: string[] = retrievedSessionPermissions
        ? JSON.parse(retrievedSessionPermissions)
        : [];
    const [sessionPermissions, setSessionPermissions] = useState<string[]>(
        parsedSessionPermissions
    );
    const [hasSessionPermissions, setHasSessionPermissions] = useState<boolean>(
        parsedSessionPermissions && parsedSessionPermissions.length > 0
    );

    const addSessionPermissions = (newPermissions: string[]) => {
        localStorage.setItem(
            'session-permissions',
            JSON.stringify(newPermissions)
        );
        setSessionPermissions(newPermissions);

        const isAuth = newPermissions.length > 0;
        setHasSessionPermissions(isAuth);
        console.info('Session Permissions updated successfully.');
    };

    return (
        <PermissionContext.Provider
            value={{
                hasSessionPermissions,
                sessionPermissions,
                addSessionPermissions,
            }}
        >
            {children}
        </PermissionContext.Provider>
    );
};

export { PermissionContext, PermissionProvider };
