import { async, TestBed } from '@angular/core/testing';
import { FeatureJokeModule } from './feature-joke.module';

describe('FeatureJokeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureJokeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureJokeModule).toBeDefined();
  });
});
