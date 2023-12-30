import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowfilterdataPage } from './showfilterdata.page';

describe('ShowfilterdataPage', () => {
  let component: ShowfilterdataPage;
  let fixture: ComponentFixture<ShowfilterdataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowfilterdataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowfilterdataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
