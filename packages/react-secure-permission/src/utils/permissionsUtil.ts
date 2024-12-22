const hasRequiredPermissions = (
    requiredPermissions: string[],
    sessionPermissions: string[]
) => {
    if (!requiredPermissions || !sessionPermissions) {
        return false;
    }

    return requiredPermissions.some((permission) =>
        sessionPermissions.includes(permission)
    );
};

export { hasRequiredPermissions };
