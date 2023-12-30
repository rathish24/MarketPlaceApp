import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SliderintroPage } from './sliderintro.page';

describe('SliderintroPage', () => {
  let component: SliderintroPage;
  let fixture: ComponentFixture<SliderintroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderintroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SliderintroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
