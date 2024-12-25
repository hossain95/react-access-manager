import { createContext } from 'react';
import { SessionPermissionType } from 'react-permission/type';

const PermissionContext = createContext<SessionPermissionType | null>(null);

export { PermissionContext };
