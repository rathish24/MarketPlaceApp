import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignuppopupPage } from './signuppopup.page';

describe('SignuppopupPage', () => {
  let component: SignuppopupPage;
  let fixture: ComponentFixture<SignuppopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignuppopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignuppopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
