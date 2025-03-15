import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoOneComponent } from './compo-one.component';

describe('CompoOneComponent', () => {
  let component: CompoOneComponent;
  let fixture: ComponentFixture<CompoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
