import { createContext } from 'react';
import { SessionPermissionType } from 'react-secure-permission/types/type';

const PermissionContext = createContext<SessionPermissionType | null>(null);

export { PermissionContext };
