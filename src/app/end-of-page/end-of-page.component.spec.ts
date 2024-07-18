import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfPageComponent } from './end-of-page.component';

describe('EndOfPageComponent', () => {
  let component: EndOfPageComponent;
  let fixture: ComponentFixture<EndOfPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndOfPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndOfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
