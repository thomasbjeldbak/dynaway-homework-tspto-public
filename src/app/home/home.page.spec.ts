import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { of, throwError } from 'rxjs';
import { AssetService } from '../shared/services/asset.service';
import { Asset } from '../shared/models/asset.model';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let assetService: any;

  beforeEach(waitForAsync(async () => {
    assetService = jasmine.createSpyObj('AssetService', ['getAll']);

    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: AssetService, useValue: assetService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize assets array and call getAll method', () => {
    const assets: Asset[] = [
      { id: '1', type: 'Type 1', name: 'Asset 1', locationId: '1', locationName: 'Location 1' },
      { id: '2', type: 'Type 2', name: 'Asset 2', locationId: '2', locationName: 'Location 2' }
    ];

    assetService.getAll.and.returnValue(of(assets));

    component.ionViewWillEnter();

    expect(component.assets).toEqual(assets);
    expect(assetService.getAll).toHaveBeenCalled();
  });

  it('should display toast message on error', () => {
    const errorMessage = 'Error message';

    assetService.getAll.and.returnValue(throwError({ message: errorMessage }));

    spyOn(component, 'presentToast');

    component.ionViewWillEnter();

    expect(component.presentToast).toHaveBeenCalledWith('bottom', errorMessage);
  });
});