const hasRequiredPermissions = (
  requiredPermissions: string[],
  userPermissions: string[],
) => {
    if(!requiredPermissions || !userPermissions){
        return false;
    }
  return requiredPermissions.some((permission) =>
    userPermissions.includes(permission),
  );
};

export { hasRequiredPermissions };
