import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameValidationComponent } from './name-validation.component';

describe('NameValidationComponent', () => {
  let component: NameValidationComponent;
  let fixture: ComponentFixture<NameValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
