import { TestBed } from '@angular/core/testing';

import { AdministratePermissionService } from './administrate-permission.service';

describe('AdministratePermissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdministratePermissionService = TestBed.get(AdministratePermissionService);
    expect(service).toBeTruthy();
  });
});
