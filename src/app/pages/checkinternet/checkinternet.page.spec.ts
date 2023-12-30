import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckinternetPage } from './checkinternet.page';

describe('CheckinternetPage', () => {
  let component: CheckinternetPage;
  let fixture: ComponentFixture<CheckinternetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinternetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckinternetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
