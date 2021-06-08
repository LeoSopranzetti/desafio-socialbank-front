import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';

import { DetalhesDeleteService } from './detalhes-delete.service';

describe('DetalhesService', () => {
  let service: DetalhesDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ModalModule.forRoot()],
      providers: [BsModalService, BsModalRef],
    });
    service = TestBed.inject(DetalhesDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
