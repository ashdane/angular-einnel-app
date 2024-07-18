import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorfulFooterComponent } from './colorful-footer.component';

describe('ColorfulFooterComponent', () => {
  let component: ColorfulFooterComponent;
  let fixture: ComponentFixture<ColorfulFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorfulFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorfulFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
