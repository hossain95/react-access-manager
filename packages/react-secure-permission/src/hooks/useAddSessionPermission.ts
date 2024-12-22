import { useContext } from 'react';
import { PermissionContext } from '../contexts/PermissionContext';

const useAddSessionPermissions = () => {
    const context = useContext(PermissionContext);

    if (!context) {
        throw new Error(
            'useAddSessionPermissions must be used within PermissionProvider'
        );
    }
    const { addSessionPermissions } = context;
    return addSessionPermissions;
};

export { useAddSessionPermissions };
