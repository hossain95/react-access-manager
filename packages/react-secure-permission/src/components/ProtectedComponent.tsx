import React, { ReactNode } from 'react';
import { hasRequiredPermissions } from '../utils/permissionUtil';
import { useSessionPermissions } from '../hooks/useSessionPermissions';

export const ProtectedComponent: React.FC<{
    requiredPermissions: string[];
    allMatch?: boolean;
    fallback?: ReactNode;
    children: ReactNode;
}> = ({ requiredPermissions, allMatch = false, fallback = null, children }) => {
    const sessionPermissions = useSessionPermissions();
    const isAllowed = hasRequiredPermissions({
        requiredPermissions,
        sessionPermissions,
        allMatch,
    });

    return isAllowed ? children : fallback;
};
