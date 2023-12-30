import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostadvertisementPage } from './postadvertisement.page';

describe('PostadvertisementPage', () => {
  let component: PostadvertisementPage;
  let fixture: ComponentFixture<PostadvertisementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostadvertisementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostadvertisementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
