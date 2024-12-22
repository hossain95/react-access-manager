import { useContext } from 'react';
import { PermissionContext } from '../contexts/PermissionContext';

const useContextPermissions = () => {
    const context = useContext(PermissionContext);

    if (!context) {
        throw new Error(
            'usePermissions must be used within PermissionProvider'
        );
    }
    const { hasSessionPermissions, sessionPermissions, addSessionPermissions } =
        context;
    return { hasSessionPermissions, sessionPermissions, addSessionPermissions };
};

const useHasSessionPermissions = () => {
    const { hasSessionPermissions } = useContextPermissions();
    return hasSessionPermissions;
};

const useSessionPermissions = () => {
    const { sessionPermissions } = useContextPermissions();
    return sessionPermissions;
};

const useAddSessionPermissions = () => {
    const { addSessionPermissions } = useContextPermissions();
    return addSessionPermissions;
};

export {
    useHasSessionPermissions,
    useSessionPermissions,
    useAddSessionPermissions,
};
