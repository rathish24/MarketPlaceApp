import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdplansimagePage } from './adplansimage.page';

describe('AdplansimagePage', () => {
  let component: AdplansimagePage;
  let fixture: ComponentFixture<AdplansimagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdplansimagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdplansimagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
