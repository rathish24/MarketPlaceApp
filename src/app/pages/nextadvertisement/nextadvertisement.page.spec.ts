import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NextadvertisementPage } from './nextadvertisement.page';

describe('NextadvertisementPage', () => {
  let component: NextadvertisementPage;
  let fixture: ComponentFixture<NextadvertisementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextadvertisementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NextadvertisementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
