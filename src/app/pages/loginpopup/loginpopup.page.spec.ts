import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginpopupPage } from './loginpopup.page';

describe('LoginpopupPage', () => {
  let component: LoginpopupPage;
  let fixture: ComponentFixture<LoginpopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginpopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginpopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
