import React, { ReactNode } from 'react';
import { hasRequiredPermissions } from '../utils/permissionsUtil';
import { useSessionPermissions } from 'react-secure-permission/hooks/usePermissions';

export const ProtectedComponent: React.FC<{
    requiredPermissions: string[];
    fallback?: ReactNode | null;
    children: ReactNode;
}> = ({ requiredPermissions, fallback, children }) => {
    const sessionPermissions = useSessionPermissions();
    const isAllowed = hasRequiredPermissions(
        requiredPermissions,
        sessionPermissions
    );

    return isAllowed ? <>{children}</> : <>{fallback}</>;
};
