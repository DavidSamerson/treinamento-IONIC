import { ProductProvider, Product } from './../../providers/product/product';
import { Component } from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products: any[] = [];
  onlyInactives: boolean = false;
  searchText: string = null;

  constructor(public navCtrl: NavController, private toast: ToastController,
                      private productProvider: ProductProvider) {  }

                      ionViewDidEnter() {
                        this.getAllProducts();
                      }

  getAllProducts() {
    this.productProvider.getAll(!this.onlyInactives, this.searchText)
      .then((result: any[]) => {
        this.products = result;
      })
  }

  addProduct() {
    this.navCtrl.push('EditProductPage');
  }

  editProduct(id: number) {
    this.navCtrl.push('EditProductPage', {id: id});
  }

  removeProduct(product: Product) {
    this.productProvider.remove(product.id)
      .then(() => {

        var index = this.products.indexOf(product);
        this.products.splice(index, 1);
        this.toast.create({ message: 'Produto Removido. ', duration: 3000, position: 'bottom' }).present();

      })
  }

  filterProducts (ev: any) {
    this.getAllProducts();
  }

}
