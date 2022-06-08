import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalThumbnailComponent } from './animal-thumbnail.component';

describe('AnimalThumbnailComponent', () => {
  let component: AnimalThumbnailComponent;
  let fixture: ComponentFixture<AnimalThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
