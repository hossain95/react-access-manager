import React from 'react';
import { render, screen } from '@testing-library/react';
import * as useSessionPermissionHook from '../../hooks/useSessionPermission';
import * as permissionUtil from '../../utils/permissionUtil';
import { ProtectedComponent } from '../../components/ProtectedComponent';

jest.mock('../../hooks/useSessionPermission');
jest.mock('../../utils/permissionUtil');

describe('ProtectedComponent', () => {
    const mockUseSessionPermissions =
        useSessionPermissionHook.useSessionPermissions as jest.Mock;
    const mockHasRequiredPermissions =
        permissionUtil.hasRequiredPermissions as jest.Mock;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders children when permissions are granted', () => {
        mockUseSessionPermissions.mockReturnValue(['READ', 'WRITE']);
        mockHasRequiredPermissions.mockReturnValue(true);
        render(
            <ProtectedComponent permissions={['READ']}>
                <div>Protected Content</div>
            </ProtectedComponent>
        );

        expect(screen.getByText('Protected Content')).toBeInTheDocument();
    });

    it('renders fallback when permissions are not granted', () => {
        mockUseSessionPermissions.mockReturnValue(['WRITE']);
        mockHasRequiredPermissions.mockReturnValue(false);

        render(
            <ProtectedComponent
                permissions={['READ']}
                fallback={<div>Fallback Content</div>}
            >
                <div>Protected Content</div>
            </ProtectedComponent>
        );

        expect(screen.getByText('Fallback Content')).toBeInTheDocument();
        expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
    });

    it('renders fallback when no permissions are provided', () => {
        mockUseSessionPermissions.mockReturnValue([]);
        mockHasRequiredPermissions.mockReturnValue(false);

        render(
            <ProtectedComponent
                permissions={['READ']}
                fallback={<div>No Permissions</div>}
            >
                <div>Protected Content</div>
            </ProtectedComponent>
        );

        expect(screen.getByText('No Permissions')).toBeInTheDocument();
        expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
    });
});
