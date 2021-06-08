import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { EditarUserService } from './editar-user.service';

describe('EditarUserService', () => {
  let service: EditarUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EditarUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
