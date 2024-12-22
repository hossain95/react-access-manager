import { useContext } from 'react';
import { PermissionContext } from '../contexts/PermissionContext';

const useHasPermissions = () => {
    const context = useContext(PermissionContext);

    if (!context) {
        throw new Error(
            'useHasPermissions must be used within PermissionProvider'
        );
    }
    const { sessionPermissions } = context;
    return sessionPermissions && sessionPermissions.length > 0;
};

export { useHasPermissions };
