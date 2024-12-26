import { hasRequiredPermissions } from '../../utils/permissionUtil';

describe('hasRequiredPermissions', () => {
    it('should return true if any of the permissions match and allMatch is false', () => {
        const permissions = ['READ', 'WRITE'];
        const sessionPermissions = ['READ', 'DELETE'];
        const result = hasRequiredPermissions({
            permissions,
            sessionPermissions,
            allMatch: false,
        });
        expect(result).toBe(true);
    });

    it('should return false if none of the permissions match and allMatch is false', () => {
        const permissions = ['READ', 'WRITE'];
        const sessionPermissions = ['DELETE'];
        const result = hasRequiredPermissions({
            permissions,
            sessionPermissions,
            allMatch: false,
        });
        expect(result).toBe(false);
    });

    it('should return true if all permissions match and allMatch is true', () => {
        const permissions = ['READ', 'WRITE'];
        const sessionPermissions = ['READ', 'WRITE', 'DELETE'];
        const result = hasRequiredPermissions({
            permissions,
            sessionPermissions,
            allMatch: true,
        });
        expect(result).toBe(true);
    });

    it('should return false if not all permissions match and allMatch is true', () => {
        const permissions = ['READ', 'WRITE'];
        const sessionPermissions = ['READ', 'DELETE'];
        const result = hasRequiredPermissions({
            permissions,
            sessionPermissions,
            allMatch: true,
        });
        expect(result).toBe(false);
    });

    it('should return false if permissions or sessionPermissions are empty', () => {
        const permissions = ['READ'];
        const sessionPermissions: string[] = [];
        const result = hasRequiredPermissions({
            permissions,
            sessionPermissions,
        });
        expect(result).toBe(false);
    });

    it('should return false if permissions or sessionPermissions are not provided', () => {
        const result = hasRequiredPermissions({
            permissions: ['READ'],
            sessionPermissions: [],
        });
        expect(result).toBe(false);
    });

    it('should return true if all permissions are in sessionPermissions and allMatch is true', () => {
        const permissions = ['READ', 'WRITE'];
        const sessionPermissions = ['READ', 'WRITE'];
        const result = hasRequiredPermissions({
            permissions,
            sessionPermissions,
            allMatch: true,
        });
        expect(result).toBe(true);
    });
});
