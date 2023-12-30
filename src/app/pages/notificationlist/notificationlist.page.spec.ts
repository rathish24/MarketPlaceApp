import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationlistPage } from './notificationlist.page';

describe('NotificationlistPage', () => {
  let component: NotificationlistPage;
  let fixture: ComponentFixture<NotificationlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
