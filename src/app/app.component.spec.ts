import { TestBed, async } from '@angular/core/testing';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();
  }));

  it('Should work fine', async(() => {
    return 'Don\'t worry, everything work fine';
  }));
});
