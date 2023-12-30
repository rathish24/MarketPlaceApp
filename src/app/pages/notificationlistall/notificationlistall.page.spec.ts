import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationListAllPage } from './notificationlistall.page';

describe('NotificationListAllPage', () => {
  let component: NotificationListAllPage;
  let fixture: ComponentFixture<NotificationListAllPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationListAllPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationListAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
