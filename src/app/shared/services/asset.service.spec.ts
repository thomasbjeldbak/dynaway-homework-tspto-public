import { TestBed } from '@angular/core/testing'

import { AssetService } from './asset.service'

describe('AssetService', () => {
  let service: AssetService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AssetService)
  })

  it('return all assets', (done) => {
    service.getAll().subscribe((res) => {
      expect(res).toBeTruthy()
      done()
    }, fail)
  })
})
