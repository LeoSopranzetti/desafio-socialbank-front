import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxMaskModule } from 'ngx-mask';
import { HomeModule } from '../home.module';

import { ListaUserComponent } from './lista-user.component';

describe('ListaUserComponent', () => {
  let component: ListaUserComponent;
  let fixture: ComponentFixture<ListaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeModule,
        HttpClientModule,
        RouterTestingModule,
        ModalModule.forRoot(),
        NgxMaskModule.forRoot(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
