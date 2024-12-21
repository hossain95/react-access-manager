import { useContext } from 'react';
import { PermissionContext } from '../contexts/PermissionContext';

const useContextPermissions = () => {
    const context = useContext(PermissionContext);

    if (!context) {
        throw new Error(
            'usePermissions must be used within PermissionProvider'
        );
    }
    const { isAuthenticated, userPermissions, updateUserPermissions } = context;
    return { isAuthenticated, userPermissions, updateUserPermissions };
};

const useIsAuthenticated = () => {
    const { isAuthenticated } = useContextPermissions();
    return isAuthenticated;
};

const useUserPermissions = () => {
    const { userPermissions } = useContextPermissions();
    return userPermissions;
};

const useUpdateUserPermissions = () => {
    const { updateUserPermissions } = useContextPermissions();
    return updateUserPermissions;
};

export { useIsAuthenticated, useUserPermissions, useUpdateUserPermissions };
