import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { AssetDetailPage } from './asset-detail.page'
import { RouterTestingModule } from '@angular/router/testing'

describe('AssetDetailPage', () => {
  let component: AssetDetailPage
  let fixture: ComponentFixture<AssetDetailPage>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetDetailPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents()

    fixture = TestBed.createComponent(AssetDetailPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
