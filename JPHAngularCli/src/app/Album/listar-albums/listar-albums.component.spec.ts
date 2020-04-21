import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAlbumsComponent } from './listar-albums.component';

describe('ListarAlbumsComponent', () => {
  let component: ListarAlbumsComponent;
  let fixture: ComponentFixture<ListarAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
