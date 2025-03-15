import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from './product.dto';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  btn:string = 'save'
    myform!:FormGroup;
    pobj:any = {}

    ps:ProductService= inject(ProductService);

    constructor(private fb:FormBuilder)
    {
      this.myform = this.fb.group({
        id:['',Validators.required],
        pname:['',Validators.required],
        pprice:['',Validators.required]
      })

      this.getProduct()
    }

    get id(){
      return this.myform?.value.get("id");
    }
    get pname(){
      return this.myform?.value.get("pname");
    }
    get pprice(){
      return this.myform?.value.get("pprice");
    }


    clearField()
    {
      this.myform = this.fb.group({
        id:[''],
        pname:[''],
        pprice:['']
      })
    }

    productlist:Product []=[]; 
    getProduct()
    {
      this.ps.getProduct().subscribe((data)=>{
          this.productlist = data;

          for (let i = 0; i < this.productlist.length; i++) {
           console.log(this.productlist[i].id);
           console.log(this.productlist[i].pname);
           console.log(this.productlist[i].pprice);
            
          }
      },
      (error)=>{
          console.log("error occured"+error);
      }
      )
    }


    addProduct(){
      this.pobj = this.myform.value;
      if(this.btn=='save'){
      this.ps.addProduct(this.pobj).subscribe((result)=>{
        console.log("data added");
        this.clearField();
        this.getProduct();
        alert("product added")
      },
      (error)=>{
        console.log("data not added"+error)
      }
    )
    }
    else if(this.btn == 'update'){
      this.ps.updateProduct(this.pobj).subscribe((result)=>{
        this.clearField();
        this.getProduct();
        alert("product data updated");
      },
      (error)=>{
        console.log(" product data not updated"+error)
      })
      this.btn= "save";
    }
    }

    removeProduct(id:any){
      this.ps.deleteProduct(id).subscribe((result)=>{
        this.getProduct();
        alert("Product deleted");
      },
      (error)=>{
        alert("Product not deleted"+error);
      }
    )
    }

    editProduct(p:Product){
      this.myform = this.fb.group({
        id:[p.id,Validators.required],
        pname:[p.pname,Validators.required],
        pprice:[p.pprice,Validators.required]
      })

      this.btn ="update";
      
    }
  

}
