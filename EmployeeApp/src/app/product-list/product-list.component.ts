import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  pList: Product[] = [];
  productId: unknown = '';
  productName: string = '';
  productPrice: unknown = '';
  btnname: string = "save"

  addProduct() {

    if (this.btnname == 'save') {
      let p: Product = { pId: this.productId, pName: this.productName, pPrice: this.productPrice }
      this.pList.push(p);
      this.productId = ""
      this.productName = ""
      this.productPrice = ""
    }
    else {
      for (let i: number = 0; i < this.pList.length; i++) {
        if (this.pList[i].pId == this.productId) {
          this.pList[i].pName = this.productName;
          this.pList[i].pPrice = this.productPrice;
        }
        this.btnname = "save"
      }

    }
  }
  delete(id: any) {

    for (let i: number = 0; i < this.pList.length; i++) {
      if (this.pList[i].pId == id) {
        this.pList.splice(i, 1);
      }
    }
  }

  edit(p: any) {
    this.productId = p.pId;
    this.productName = p.pName;
    this.productPrice = p.pPrice;
    this.btnname = "update";
  }





}
class Product {
  pId?: unknown;
  pName?: string;
  pPrice?: unknown;
}
