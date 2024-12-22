import { createContext } from 'react';
import { SessionPermissionType } from 'packages/react-permission/src/types/type';

const PermissionContext = createContext<SessionPermissionType | null>(null);

export { PermissionContext };
