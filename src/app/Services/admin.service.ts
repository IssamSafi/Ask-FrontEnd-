import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  User: any[] = [];
  report: any[] = [];

  constructor(private http: HttpClient, private spinner: NgxSpinnerService,  private toastr: ToastrService  ) { }


  

}
