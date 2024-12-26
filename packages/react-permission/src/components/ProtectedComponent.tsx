import React, { ReactNode } from 'react';
import { hasRequiredPermissions } from '../utils/permissionUtil';
import { useSessionPermissions } from '../hooks/useSessionPermission';

const ProtectedComponent: React.FC<{
    permissions: string[];
    allMatch?: boolean;
    fallback?: ReactNode;
    children: ReactNode;
}> = ({ permissions, allMatch = false, fallback = null, children }) => {
    const sessionPermissions = useSessionPermissions();
    const isAllowed = hasRequiredPermissions({
        permissions,
        sessionPermissions,
        allMatch,
    });

    return isAllowed ? children : fallback;
};

export { ProtectedComponent };
