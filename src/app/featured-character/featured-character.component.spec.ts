import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FeaturedCharacterComponent } from './featured-character.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CharacterService } from 'src/services/characters/character.service';

describe('FeaturedCharacterComponent', () => {
  let component: FeaturedCharacterComponent;
  let fixture: ComponentFixture<FeaturedCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedCharacterComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        CharacterService,
      ],
      imports: [
        HttpClientTestingModule
      ]
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
