export interface PermissionType {
    hasSessionPermissions: boolean;
    sessionPermissions: string[];
    addSessionPermissions: (permissions: string[]) => void;
}
