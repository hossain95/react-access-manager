import React, { ReactNode, useState } from 'react';
import { PermissionContext } from './PermissionContext';

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
    const addSessionPermissions = (newSessionPermissions: string[]) => {
        localStorage.setItem(
            'session-permissions',
            JSON.stringify(newSessionPermissions)
        );
        setSessionPermissions(newSessionPermissions);
        console.info('Session Permissions updated successfully.');
    };
    return (
        <PermissionContext.Provider
            value={{
                sessionPermissions,
                addSessionPermissions,
            }}
        >
            {children}
        </PermissionContext.Provider>
    );
};

export default PermissionProvider;
