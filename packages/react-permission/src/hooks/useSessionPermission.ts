import { useContext } from 'react';
import { PermissionContext } from '../contexts/PermissionContext';

const useSessionPermissions = () => {
    const context = useContext(PermissionContext);

    if (!context) {
        throw new Error(
            'usePermissions must be used within PermissionProvider'
        );
    }
    const { sessionPermissions } = context;
    return sessionPermissions;
};

export { useSessionPermissions };
