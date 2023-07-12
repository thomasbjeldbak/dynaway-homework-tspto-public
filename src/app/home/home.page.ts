import { Component } from '@angular/core'
import { Asset } from '../shared/models/asset.model'
import { AssetService } from '../shared/services/asset.service'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  assets: Asset[] = []

  constructor(private assetService: AssetService, private toastController: ToastController) {}

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      color: 'danger',
      position: position,
    });

    await toast.present();
  };

  ionViewWillEnter(): void {
    this.assets = []
    this.assetService.getAll().subscribe({
      next:assets => {this.assets = assets; console.log(assets)},
      error: err => this.presentToast('bottom',err.message),})
  }
}
