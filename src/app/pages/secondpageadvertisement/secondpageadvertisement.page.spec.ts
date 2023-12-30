import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecondpageadvertisementPage } from './secondpageadvertisement.page';

describe('SecondpageadvertisementPage', () => {
  let component: SecondpageadvertisementPage;
  let fixture: ComponentFixture<SecondpageadvertisementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondpageadvertisementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecondpageadvertisementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
