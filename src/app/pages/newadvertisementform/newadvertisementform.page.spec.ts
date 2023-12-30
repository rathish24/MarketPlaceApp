import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewadvertisementformPage } from './newadvertisementform.page';

describe('NewadvertisementformPage', () => {
  let component: NewadvertisementformPage;
  let fixture: ComponentFixture<NewadvertisementformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewadvertisementformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewadvertisementformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
