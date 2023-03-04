import { TestBed } from '@angular/core/testing';

import { MatSidenavService } from './mat-sidenav.service';

describe('MatSidenavService', () => {
  let service: MatSidenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatSidenavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
