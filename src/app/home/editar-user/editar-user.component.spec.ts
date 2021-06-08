import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { HomeModule } from '../home.module';

import { EditarUserComponent } from './editar-user.component';

describe('EditarUserComponent', () => {
  let component: EditarUserComponent;
  let fixture: ComponentFixture<EditarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeModule,
        HttpClientModule,
        RouterTestingModule,
        ModalModule.forRoot(),
        NgxMaskModule.forRoot(),
        ToastrModule.forRoot(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
