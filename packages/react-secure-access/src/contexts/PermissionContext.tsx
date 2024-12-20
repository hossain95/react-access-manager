import React, { createContext, ReactNode, useState } from 'react';

interface PermissionType {
    isAuthenticated: boolean;
    userPermissions: string[];
    updateUserPermissions: (permissions: string[]) => void;
}

const PermissionContext = createContext<PermissionType | null>(null);

const PermissionProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const storedPermissions = localStorage.getItem('permissions');
    const localPermissions: string[] = storedPermissions
        ? JSON.parse(storedPermissions)
        : [];
    const [userPermissions, setUserPermissions] =
        useState<string[]>(localPermissions);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        localPermissions && localPermissions.length > 0,
    );

    const updateUserPermissions = (newPermissions: string[]) => {
        localStorage.setItem('permissions', JSON.stringify(newPermissions));
        setUserPermissions(newPermissions);
        const isAuth = newPermissions.length > 0;
        setIsAuthenticated(isAuth);
        console.info('Permission updated successfully.');
    };

    return (
        <PermissionContext.Provider
            value={{ isAuthenticated, userPermissions, updateUserPermissions }}
        >
            {children}
        </PermissionContext.Provider>
    );
};

export { PermissionContext, PermissionProvider };
