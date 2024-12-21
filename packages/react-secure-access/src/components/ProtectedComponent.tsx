import React, { ReactNode } from 'react';
import { hasRequiredPermissions } from '../utils/permissionsUtil';
import { useUserPermissions } from '../hooks/usePermissions';

export const ProtectedComponent: React.FC<{
    requiredPermissions: string[];
    fallback?: ReactNode | null;
    children: ReactNode;
}> = ({ requiredPermissions, fallback, children }) => {
    const userPermissions = useUserPermissions();
    const isAllowed = hasRequiredPermissions(
        requiredPermissions,
        userPermissions
    );

    return isAllowed ? <>{children}</> : <>{fallback}</>;
};
