import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCharacterComponent } from './featured-character.component';

describe('FeaturedCharacterComponent', () => {
  let component: FeaturedCharacterComponent;
  let fixture: ComponentFixture<FeaturedCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
