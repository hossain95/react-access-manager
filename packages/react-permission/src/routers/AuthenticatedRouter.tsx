import React from 'react';
import { useSessionPermissions } from 'react-permission/hooks/useSessionPermissions';
import { hasRequiredPermissions } from 'react-permission/utils/permissionUtil';
import { Navigate, Outlet } from 'react-router';

const AuthenticatedRoute: React.FC<{
    permissions: string[];
    fallbackRoute: string;
    allMatch: boolean;
}> = ({ permissions, fallbackRoute, allMatch = false }) => {
    const sessionPermissions = useSessionPermissions();
    const isAllowed = hasRequiredPermissions({
        permissions,
        sessionPermissions,
        allMatch,
    });
    return isAllowed ? <Outlet /> : <Navigate to={fallbackRoute} />;
};

export { AuthenticatedRoute };
