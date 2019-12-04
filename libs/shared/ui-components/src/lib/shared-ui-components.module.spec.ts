import { async, TestBed } from '@angular/core/testing';
import { SharedUiComponentsModule } from './shared-ui-components.module';

describe('SharedUiComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiComponentsModule).toBeDefined();
  });
});
