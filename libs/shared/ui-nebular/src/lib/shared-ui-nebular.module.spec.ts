import { async, TestBed } from '@angular/core/testing';
import { SharedUiNebularModule } from './shared-ui-nebular.module';

describe('SharedUiNebularModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiNebularModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiNebularModule).toBeDefined();
  });
});
