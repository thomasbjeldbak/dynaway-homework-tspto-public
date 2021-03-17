import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Asset } from '../models/asset.model'
import { mockAssetHttpResponse } from './asset.test'
import { delay, pluck } from 'rxjs/operators'
import { getRandomInt } from '../functions'

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor() { }

  getAll(): Observable<Asset[]> {
    return of(mockAssetHttpResponse).pipe(
      delay(getRandomInt(1000) + 500), // fake random http delay,
    )
  }
}
