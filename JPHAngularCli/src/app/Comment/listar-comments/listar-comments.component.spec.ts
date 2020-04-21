import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCommentsComponent } from './listar-comments.component';

describe('ListarCommentsComponent', () => {
  let component: ListarCommentsComponent;
  let fixture: ComponentFixture<ListarCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
