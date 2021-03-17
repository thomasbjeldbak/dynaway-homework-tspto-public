import { Component } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { IonicModule } from '@ionic/angular'
import { AssetCardComponent } from './asset-card.component'
import Spy = jasmine.Spy
import { Router } from '@angular/router'
import { By } from '@angular/platform-browser'
import { mockAssets } from '../../shared/services/asset.test'

@Component({
  template: ` <app-asset-card [asset]="asset"></app-asset-card>`,
})
class TestHostComponent {
  asset = mockAssets[0]
}

describe('AssetCardComponent', () => {
  let component: TestHostComponent
  let fixture: ComponentFixture<TestHostComponent>

  let navigateSpy: Spy

  beforeEach(
    waitForAsync(async () => {
      await TestBed.configureTestingModule({
        declarations: [TestHostComponent, AssetCardComponent],
        imports: [IonicModule.forRoot(), RouterTestingModule],
      }).compileComponents()

      fixture = TestBed.createComponent(TestHostComponent)
      component = fixture.componentInstance
      fixture.detectChanges()

      navigateSpy = spyOn(TestBed.inject(Router), 'navigate')
    })
  )

  it('navigates to detail', () => {
    const card = fixture.debugElement.query(By.css('ion-card')).nativeElement
    card.click()

    expect(navigateSpy).toHaveBeenCalledWith(['asset', component.asset.id])
  })
})
