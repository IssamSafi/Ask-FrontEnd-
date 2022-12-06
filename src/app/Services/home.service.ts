import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';
import {ToastrService} from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class HomeService {

 
 
  Homes: any[] = [];
  Testmonial: any[] = [];
  Asking: any[] = [];
  CommonQuestion: any[] = [];
  User: any[] = [];
  Category: any[] = [];
  Aboutus: any[] = [];
  Contactus: any[] = [];
   homee:[]=[];
  Users:any[] = [];

  report: any[] = [];

  display_image: any;

  constructor(private http: HttpClient, private spinner: NgxSpinnerService,  private toastr: ToastrService  ) { }

  getAllHomes() {
    //show Spinner 
    //Hits Api 
    //Hide Spinner
    //Resp=> Toastr 

    this.spinner.show();

    this.http.get('https://localhost:44384/api/Home').subscribe((resp: any) => {
      this.Homes = resp;
      console.log(this.Homes);

     this.spinner.hide();
     this.toastr.success('Data Retrieved!');

    }, err => {
      this.spinner.hide();
  this.toastr.error(err.message, err.status); 
    })
  }

  createHome(body: any) {
    body.Welcome_iamge = this.display_image;
    this.spinner.show();
    this.http.post('https://localhost:44384/api/Home', body).subscribe((resp) => {
      console.log(resp);
      this.spinner.hide();
      this.toastr.success('Created !!');
    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    }
    )
  }
  updateHome(body:any)
  {
    body.Welcome_iamge = this.display_image;
    this.spinner.show();
    this.http.put('https://localhost:44384/api/Home',body).subscribe((resp)=>{
      this.spinner.hide();
     this.toastr.success('Updated Successfully !!');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    })
  }
deleteHome(id:number)
{
  this.spinner.show();
  this.http.delete('https://localhost:44384/api/Home/Delete/'+id).subscribe((resp)=>{
    this.spinner.hide();
      this.toastr.success('Deleted Successfully !!');
  },err=>{
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  })
}
getAllTestmonial() {
  //show Spinner 
  //Hits Api 
  //Hide Spinner
  //Resp=> Toastr 

   this.spinner.show();

  this.http.get('https://localhost:44384/api/Testimonial').subscribe((resp: any) => {
    this.Testmonial = resp;
    console.log(this.Testmonial);

    this.spinner.hide();
   this.toastr.success('Data Retrieved!');

  }, err => {
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  })
}
createTestmonial(body: any) {
  //body.image = this.display_image;
  this.spinner.show();
  this.http.post('https://localhost:44384/api/Testimonial', body).subscribe((resp) => {
    console.log(resp);
    this.spinner.hide();
  this.toastr.success('Created !!');
  }, err => {
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  }
  )
}
updateTestmonial(body:any)
{
  this.spinner.show();
  this.http.put('https://localhost:44384/api/Testimonial',body).subscribe((resp)=>{
    this.spinner.hide();
   this.toastr.success('Updated Successfully !!');
  },err=>{
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  })
}
deleteTestmonial(id:number)
{
this.spinner.show();
this.http.delete('https://localhost:44384/api/Testimonial/Delete/'+id).subscribe((resp)=>{
  this.spinner.hide();
    this.toastr.success('Deleted Successfully !!');
},err=>{
  this.spinner.hide();
this.toastr.error(err.message, err.status);
})
}
getAllAsking() {
  //show Spinner 
  //Hits Api 
  //Hide Spinner
  //Resp=> Toastr 

  this.spinner.show();

  this.http.get('https://localhost:44384/api/Asking').subscribe((resp: any) => {
    this.Asking = resp;
    console.log(this.Asking);

    this.spinner.hide();
  this.toastr.success('Data Retrieved!');

  }, err => {
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  })
}
createAsking(body: any) {
  //body.image = this.display_image;
  this.spinner.show();
  this.http.post('https://localhost:44384/api/Asking', body).subscribe((resp) => {
    console.log(resp);
    this.spinner.hide();
   this.toastr.success('Created !!');
  }, err => {
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  }
  )
}
updateAsking(body:any)
{
  this.spinner.show();
  this.http.put('https://localhost:44384/api/Asking',body).subscribe((resp)=>{
    this.spinner.hide();
    this.toastr.success('Updated Successfully !!');
  },err=>{
    this.spinner.hide();
   this.toastr.error(err.message, err.status);
  })
}
deleteAsking(id:number)
{
this.spinner.show();
this.http.delete('https://localhost:44384/api/Asking/Delete/'+id).subscribe((resp)=>{
  this.spinner.hide();
    this.toastr.success('Deleted Successfully !!');
},err=>{
  this.spinner.hide();
 this.toastr.error(err.message, err.status);
})
}
getAllCommonQuestion() {
  //show Spinner 
  //Hits Api 
  //Hide Spinner
  //Resp=> Toastr 

   this.spinner.show();

  this.http.get('https://localhost:44384/api/CommonQuestion').subscribe((resp: any) => {
    this.CommonQuestion = resp;
    console.log(this.CommonQuestion);

    this.spinner.hide();
  this.toastr.success('Data Retrieved!');

  }, err => {
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  })
}
createCommonQuestion(body: any) {
  //body.image = this.display_image;
  this.spinner.show();
  this.http.post('https://localhost:44384/api/CommonQuestion', body).subscribe((resp) => {
    console.log(resp);
    this.spinner.hide();
   this.toastr.success('Created !!');
  }, err => {
    this.spinner.hide();
  this.toastr.error(err.message, err.status);
  }
  )
}
updateCommonQuestion(body:any)
{
  this.spinner.show();
  this.http.put('https://localhost:44384/api/CommonQuestion',body).subscribe((resp)=>{
    this.spinner.hide();
   this.toastr.success('Updated Successfully !!');
  },err=>{
    this.spinner.hide();
   this.toastr.error(err.message, err.status);
  })
}
deleteCommonQuestion(id:number)
{
this.spinner.show();
this.http.delete('https://localhost:44384/api/CommonQuestion/Delete/'+id).subscribe((resp)=>{
  this.spinner.hide();
    this.toastr.success('Deleted Successfully !!');
},err=>{
  this.spinner.hide();
 this.toastr.error(err.message, err.status);
})}

getAllUsers() {
  //show Spinner 
  //Hits Api 
  //Hide Spinner
  //Resp=> Toastr 

  this.spinner.show();

  this.http.get('https://localhost:44384/api/User').subscribe((resp: any) => {
    this.User = resp;
    console.log(this.User);

   this.spinner.hide();
   this.toastr.success('Data Retrieved!'); 

  }, err => {
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  })
}

createUser(body: any) {

  body.image_Path = this.display_image;

 
  this.spinner.show();
  this.http.post('https://localhost:44384/api/User', body).subscribe((resp) => {
    console.log(resp);
    this.spinner.hide();
   this.toastr.success('Created !!');
  }, err => {
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  }
  )
}
updateUser(body:any)
{

  body.image_Path= this.display_image;

  this.spinner.show();
  this.http.put('https://localhost:44384/api/User',body).subscribe((resp)=>{
    this.spinner.hide();
    this.toastr.success('Updated Successfully !!');
  },err=>{
    this.spinner.hide();
   this.toastr.error(err.message, err.status);
  })
}
deleteUser(id:number)
{
this.spinner.show();
this.http.delete('https://localhost:44384/api/User/Delete/'+id).subscribe((resp)=>{
  this.spinner.hide();
  this.toastr.success('Deleted Successfully !!');
},err=>{
  this.spinner.hide();
 this.toastr.error(err.message, err.status);
})
}
getAllCategories() {
  //show Spinner 
  //Hits Api 
  //Hide Spinner
  //Resp=> Toastr 

  this.spinner.show();

  this.http.get('https://localhost:44384/api/Category').subscribe((resp: any) => {
    this.Category = resp;
    console.log(this.Category);

   this.spinner.hide();
   this.toastr.success('Data Retrieved!');

  }, err => {
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  })
}

createCategory(body: any) {
  body.image_path = this.display_image;
  this.spinner.show();
  this.http.post('https://localhost:44384/api/Category', body).subscribe((resp) => {
    console.log(resp);
    this.spinner.hide();
    this.toastr.success('Created !!');
  }, err => {
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  }
  )
}
updateCategory(body:any)
{
  body.image_path = this.display_image;
  this.spinner.show();
  this.http.put('https://localhost:44384/api/Category',body).subscribe((resp)=>{
    this.spinner.hide();
   this.toastr.success('Updated Successfully !!');
  },err=>{
    this.spinner.hide();
   this.toastr.error(err.message, err.status);
  })
}
deleteCategory(id:number)
{
this.spinner.show();
this.http.delete('https://localhost:44384/api/Category/Delete/'+id).subscribe((resp)=>{
  this.spinner.hide();
this.toastr.success('Deleted Successfully !!');
},err=>{
  this.spinner.hide();
this.toastr.error(err.message, err.status);
})
}
getAllAboutus() {
  //show Spinner 
  //Hits Api 
  //Hide Spinner
  //Resp=> Toastr 

  this.spinner.show();

  this.http.get('https://localhost:44384/api/Aboutus').subscribe((resp: any) => {
    this.Aboutus = resp;
    console.log(this.Aboutus);

   this.spinner.hide();
   this.toastr.success('Data Retrieved!');

  }, err => {
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  })
}

createAboutus(body: any) {
  body.Image = this.display_image;
  this.spinner.show();
  this.http.post('https://localhost:44384/api/Aboutus', body).subscribe((resp) => {
    console.log(resp);
    this.spinner.hide();
   this.toastr.success('Created !!');
  }, err => {
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  }
  )
}
updateAboutus(body:any)
{
  body.Image = this.display_image;
  this.spinner.show();
  this.http.put('https://localhost:44384/api/Aboutus',body).subscribe((resp)=>{
    this.spinner.hide();
  this.toastr.success('Updated Successfully !!');
  },err=>{
    this.spinner.hide();
  this.toastr.error(err.message, err.status);
  })
}
deleteAboutus(id:number)
{
this.spinner.show();
this.http.delete('https://localhost:44384/api/Aboutus/Delete/'+id).subscribe((resp)=>{
  this.spinner.hide();
  this.toastr.success('Deleted Successfully !!');
},err=>{
  this.spinner.hide();
this.toastr.error(err.message, err.status);
})
}
getAllContactus() {
  //show Spinner 
  //Hits Api 
  //Hide Spinner
  //Resp=> Toastr 

  this.spinner.show();

  this.http.get('https://localhost:44384/api/Contactus').subscribe((resp: any) => {
    this.Contactus = resp;
    console.log(this.Contactus);

   this.spinner.hide();
   this.toastr.success('Data Retrieved!');

  }, err => {
    this.spinner.hide();
this.toastr.error(err.message, err.status); 
  })
}

createContactus(body: any) {
  //body.image = this.display_image;
  this.spinner.show();
  this.http.post('https://localhost:44384/api/Contactus', body).subscribe((resp) => {
    console.log(resp);
    this.spinner.hide();
   this.toastr.success('Created !!');
  }, err => {
    this.spinner.hide();
  this.toastr.error(err.message, err.status);
  }
  )
}
updateContactus(body:any)
{
  body.image = this.display_image;
  this.spinner.show();
  this.http.put('https://localhost:44384/api/Contactus',body).subscribe((resp)=>{
    this.spinner.hide();
   this.toastr.success('Updated Successfully !!');
  },err=>{
    this.spinner.hide();
   this.toastr.error(err.message, err.status);
  })
}
deleteContactus(id:number)
{
this.spinner.show();
this.http.delete('https://localhost:44384/api/Contactus/Delete/'+id).subscribe((resp)=>{
  this.spinner.hide();
this.toastr.success('Deleted Successfully !!');
},err=>{
  this.spinner.hide();
this.toastr.error(err.message, err.status);
})
}

getTotalUser() {
  //show Spinner 
  //Hits Api 
  //Hide Spinner
  //Resp=> Toastr 

  this.spinner.show();


  this.http.get('https://localhost:44384/api/jwt/total').subscribe((resp: any) => {

    this.Users = resp;
    console.log(this.Users);

   this.spinner.hide();
   this.toastr.success('Data Retrieved!'); 

  }, err => {
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  })
}


Report() {
  //show Spinner 
  //Hits Api 
  //Hide Spinner
  //Resp=> Toastr 

  this.spinner.show();

  this.http.get('https://localhost:44384/api/jwt').subscribe((resp: any) => {
    this.report = resp;
    console.log(this.report);
   this.spinner.hide();
   this.toastr.success('Data Retrieved!'); 

  }, err => {
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  })
}
  
uploadimage(File:FormData)
{


  this.http.post('https://localhost:44384/api/Aboutus/uploadImage/',File).subscribe((resp:any)=>{
    this.display_image=resp.image;
  },
  
    err=>{
      this.toastr.error('cannot upload image');
    })
 

  
  }
  uploadimagehome(File:FormData)
  {
  
    this.http.post('https://localhost:44384/api/home/uploadImage/',File).subscribe((resp:any)=>{
      this.display_image=resp.welcome_Iamge;
    },
    
      err=>{
        this.toastr.error('cannot upload image');
      })
   
    
    }

    uploadimageuser(file: FormData) {
      this.http.post('https://localhost:44384/api/user/uploadImage/', file).subscribe((resp: any) => {
        this.display_image = resp.image_Path;
      }, err => {
        this.toastr.error('Can not Upload Image');
        console.log(err);
  

    })
  

    }


    
  
    
    
    uploadimageCategory(File:FormData)
  {
  
  
    this.http.post('https://localhost:44384/api/Category/uploadImage/',File).subscribe((resp:any)=>{
      this.display_image=resp.image_Path;
    },
    
      err=>{
        this.toastr.error('cannot upload image');
      })
   
  
  
    }

    AprroveRejectQ(id:number,status:number){

      this.http.get('https://localhost:44384/api/asking/ask/'+id+','+status).subscribe((resp:any)=>{}
      )
    }

    gethomeById(id: number) {
      //show Spinner 
      //Hits Api 
      //Hide Spinner
      //Resp=> Toastr 
  
      this.spinner.show();
      this.http.get('https://localhost:44384/api/home/GetById/' + id).subscribe((resp: any) => {
        this.homee = resp;
        console.log(this.homee);
        this.spinner.hide();
        this.toastr.success('Data Retrieved!');
  
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status);
      })
  
    }
    


}

