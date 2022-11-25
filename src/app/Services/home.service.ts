import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  selectedCourse: any = {};
 
  Homes: any[] = [];
  Testmonial: any[] = [];
  Asking: any[] = [];
  CommonQuestion: any[] = [];
  display_image: any;

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, /* private toastr: ToastrService */) { }

  getAllHomes() {
    //show Spinner 
    //Hits Api 
    //Hide Spinner
    //Resp=> Toastr 

    // this.spinner.show();

    this.http.get('https://localhost:44384/api/Home').subscribe((resp: any) => {
      this.Homes = resp;
      console.log(this.Homes);

      //this.spinner.hide();
    //  this.toastr.success('Data Retrieved!');

    }, err => {
      this.spinner.hide();
      //this.toastr.error(err.message, err.status);
    })
  }

  createHome(body: any) {
    //body.image = this.display_image;
    this.spinner.show();
    this.http.post('https://localhost:44384/api/Home', body).subscribe((resp) => {
      console.log(resp);
      this.spinner.hide();
     // this.toastr.success('Created !!');
    }, err => {
      this.spinner.hide();
      //this.toastr.error(err.message, err.status);
    }
    )
  }
  updateHome(body:any)
  {
    body.image = this.display_image;
    this.spinner.show();
    this.http.put('https://localhost:44384/api/Home',body).subscribe((resp)=>{
      this.spinner.hide();
     // this.toastr.success('Updated Successfully !!');
    },err=>{
      this.spinner.hide();
     // this.toastr.error(err.message, err.status);
    })
  }
deleteHome(id:number)
{
  this.spinner.show();
  this.http.delete('https://localhost:44384/api/Home/Delete/'+id).subscribe((resp)=>{
    this.spinner.hide();
      //this.toastr.success('Deleted Successfully !!');
  },err=>{
    this.spinner.hide();
  //  this.toastr.error(err.message, err.status);
  })
}
getAllTestmonial() {
  //show Spinner 
  //Hits Api 
  //Hide Spinner
  //Resp=> Toastr 

  // this.spinner.show();

  this.http.get('https://localhost:44384/api/Testimonial').subscribe((resp: any) => {
    this.Testmonial = resp;
    console.log(this.Testmonial);

    //this.spinner.hide();
  //  this.toastr.success('Data Retrieved!');

  }, err => {
    this.spinner.hide();
    //this.toastr.error(err.message, err.status);
  })
}
createTestmonial(body: any) {
  //body.image = this.display_image;
  this.spinner.show();
  this.http.post('https://localhost:44384/api/Testimonial', body).subscribe((resp) => {
    console.log(resp);
    this.spinner.hide();
   // this.toastr.success('Created !!');
  }, err => {
    this.spinner.hide();
    //this.toastr.error(err.message, err.status);
  }
  )
}
updateTestmonial(body:any)
{
  this.spinner.show();
  this.http.put('https://localhost:44384/api/Testimonial',body).subscribe((resp)=>{
    this.spinner.hide();
   // this.toastr.success('Updated Successfully !!');
  },err=>{
    this.spinner.hide();
   // this.toastr.error(err.message, err.status);
  })
}
deleteTestmonial(id:number)
{
this.spinner.show();
this.http.delete('https://localhost:44384/api/Testimonial/Delete/'+id).subscribe((resp)=>{
  this.spinner.hide();
    //this.toastr.success('Deleted Successfully !!');
},err=>{
  this.spinner.hide();
//  this.toastr.error(err.message, err.status);
})
}
getAllAsking() {
  //show Spinner 
  //Hits Api 
  //Hide Spinner
  //Resp=> Toastr 

  // this.spinner.show();

  this.http.get('https://localhost:44384/api/Asking').subscribe((resp: any) => {
    this.Asking = resp;
    console.log(this.Asking);

    //this.spinner.hide();
  //  this.toastr.success('Data Retrieved!');

  }, err => {
    this.spinner.hide();
    //this.toastr.error(err.message, err.status);
  })
}
createAsking(body: any) {
  //body.image = this.display_image;
  this.spinner.show();
  this.http.post('https://localhost:44384/api/Asking', body).subscribe((resp) => {
    console.log(resp);
    this.spinner.hide();
   // this.toastr.success('Created !!');
  }, err => {
    this.spinner.hide();
    //this.toastr.error(err.message, err.status);
  }
  )
}
updateAsking(body:any)
{
  this.spinner.show();
  this.http.put('https://localhost:44384/api/Asking',body).subscribe((resp)=>{
    this.spinner.hide();
   // this.toastr.success('Updated Successfully !!');
  },err=>{
    this.spinner.hide();
   // this.toastr.error(err.message, err.status);
  })
}
deleteAsking(id:number)
{
this.spinner.show();
this.http.delete('https://localhost:44384/api/Asking/Delete/'+id).subscribe((resp)=>{
  this.spinner.hide();
    //this.toastr.success('Deleted Successfully !!');
},err=>{
  this.spinner.hide();
//  this.toastr.error(err.message, err.status);
})
}
getAllCommonQuestion() {
  //show Spinner 
  //Hits Api 
  //Hide Spinner
  //Resp=> Toastr 

  // this.spinner.show();

  this.http.get('https://localhost:44384/api/CommonQuestion').subscribe((resp: any) => {
    this.CommonQuestion = resp;
    console.log(this.CommonQuestion);

    //this.spinner.hide();
  //  this.toastr.success('Data Retrieved!');

  }, err => {
    this.spinner.hide();
    //this.toastr.error(err.message, err.status);
  })
}
createCommonQuestion(body: any) {
  //body.image = this.display_image;
  this.spinner.show();
  this.http.post('https://localhost:44384/api/CommonQuestion', body).subscribe((resp) => {
    console.log(resp);
    this.spinner.hide();
   // this.toastr.success('Created !!');
  }, err => {
    this.spinner.hide();
    //this.toastr.error(err.message, err.status);
  }
  )
}
updateCommonQuestion(body:any)
{
  this.spinner.show();
  this.http.put('https://localhost:44384/api/CommonQuestion',body).subscribe((resp)=>{
    this.spinner.hide();
   // this.toastr.success('Updated Successfully !!');
  },err=>{
    this.spinner.hide();
   // this.toastr.error(err.message, err.status);
  })
}
deleteCommonQuestion(id:number)
{
this.spinner.show();
this.http.delete('https://localhost:44384/api/CommonQuestion/Delete/'+id).subscribe((resp)=>{
  this.spinner.hide();
    //this.toastr.success('Deleted Successfully !!');
},err=>{
  this.spinner.hide();
//  this.toastr.error(err.message, err.status);
})}
}