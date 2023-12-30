import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailchatPage } from './detailchat.page';

describe('DetailchatPage', () => {
  let component: DetailchatPage;
  let fixture: ComponentFixture<DetailchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
