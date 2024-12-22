const hasRequiredPermissions = ({
    requiredPermissions,
    sessionPermissions,
    allMatch = false,
}: {
    requiredPermissions: string[];
    sessionPermissions: string[];
    allMatch?: boolean;
}) => {
    if (!requiredPermissions || !sessionPermissions) {
        return false;
    }
    if (allMatch) {
        return requiredPermissions.every((permission) =>
            sessionPermissions.includes(permission)
        );
    }
    return requiredPermissions.some((permission) =>
        sessionPermissions.includes(permission)
    );
};

export { hasRequiredPermissions };
