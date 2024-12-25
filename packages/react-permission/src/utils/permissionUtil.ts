const hasRequiredPermissions = ({
    permissions,
    sessionPermissions,
    allMatch = false,
}: {
    permissions: string[];
    sessionPermissions: string[];
    allMatch?: boolean;
}) => {
    if (!permissions || !sessionPermissions) {
        return false;
    }
    if (allMatch) {
        return permissions.every((permission) =>
            sessionPermissions.includes(permission)
        );
    }
    return permissions.some((permission) =>
        sessionPermissions.includes(permission)
    );
};

export { hasRequiredPermissions };
