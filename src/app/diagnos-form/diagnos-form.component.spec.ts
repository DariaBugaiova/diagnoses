import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosFormComponent } from './diagnos-form.component';

describe('DiagnosFormComponent', () => {
  let component: DiagnosFormComponent;
  let fixture: ComponentFixture<DiagnosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
