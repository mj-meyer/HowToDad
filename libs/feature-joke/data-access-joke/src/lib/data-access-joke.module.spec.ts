import { async, TestBed } from '@angular/core/testing';
import { DataAccessJokeModule } from './data-access-joke.module';

describe('DataAccessJokeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataAccessJokeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataAccessJokeModule).toBeDefined();
  });
});
