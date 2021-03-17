import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { TestBed, waitForAsync } from '@angular/core/testing'

import { AppComponent } from './app.component'

describe('AppComponent', () => {
  beforeAll(() => {
    // suppress Ionic reinitialize warning messages (see https://github.com/ionic-team/ionic-framework/issues/19926)
    const originalWarn = console.warn
    console.warn = (warning: any, ...optionalParams: any[]) => {
      const suppress = `Ionic Angular was already initialized. Make sure IonicModule.forRoot() is just called once.`
      if (warning !== suppress) originalWarn(warning, ...optionalParams)
    }
  })

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })
})
