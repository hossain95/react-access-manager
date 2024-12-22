export interface SessionPermissionType {
    sessionPermissions: string[];
    addSessionPermissions: (sessionPermissions: string[]) => void;
}
