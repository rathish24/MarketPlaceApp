import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopupaddressComponent } from './popupaddress.component';

describe('PopupaddressComponent', () => {
  let component: PopupaddressComponent;
  let fixture: ComponentFixture<PopupaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupaddressComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
