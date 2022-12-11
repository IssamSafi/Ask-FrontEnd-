import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { HomeService } from 'src/app/Services/home.service';
import{Chart,registerables} from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {


  constructor(public home: HomeService){}



  ngOnInit(): void {






    this.home.Report();
 
  }



      
  array:any=[  ];
        file(){
          for(let i=0;i<this.home.report.length;i++){
            var o;
            var newArry:any=[];
            for(o in  this.home.report[i]){
            newArry.push(o);
          }
          break;
        }
        this.array.push(newArry);
        for(let i=0;i<this.home.report.length;i++){
    
          this.array.push(Object.values(this.home.report[i]))
         
          }
      
          var CsvString="";
          this.array.forEach((RowItem:any,RowIndex:any)=> {
          RowItem.forEach((colItem:any,colIndex:any)=>{
           
            CsvString+=colItem+',';
          })
          CsvString+="\r\n";
          
        });
        CsvString="data:application/csv,"+encodeURIComponent(CsvString);
        var x=document.createElement("A");
        x.setAttribute("href",CsvString);
        x.setAttribute("download","Asking.csv");
        document.body.appendChild(x)
        x.click();
        this.array=[];
      }
      filepdf(){
        for(let i=0;i<this.home.report.length;i++){
          var o;
          var newArry:any=[];
          for(o in  this.home.report[i]){
          newArry.push(o);
        }
        break;
      }
      this.array.push(newArry);
      for(let i=0;i<this.home.report.length;i++){
  
        this.array.push(Object.values(this.home.report[i]))
       
        }
    
        var CsvString="";
        this.array.forEach((RowItem:any,RowIndex:any)=> {
        RowItem.forEach((colItem:any,colIndex:any)=>{
         
          CsvString+=colItem+',';
        })
        CsvString+="\r\n";
        
      });
      CsvString="data:application/pdf,"+encodeURIComponent(CsvString);
      var x=document.createElement("A");
      x.setAttribute("href",CsvString);
      x.setAttribute("download","Asking.pdf");
      document.body.appendChild(x)
      x.click();
      this.array=[];
    }
    fileword(){
      for(let i=0;i<this.home.report.length;i++){
        var o;
        var newArry:any=[];
        for(o in  this.home.report[i]){
        newArry.push(o);
      }
      break;
    }
    this.array.push(newArry);
    for(let i=0;i<this.home.report.length;i++){

      this.array.push(Object.values(this.home.report[i]))
     
      }
  
      var CsvString="";
      this.array.forEach((RowItem:any,RowIndex:any)=> {
      RowItem.forEach((colItem:any,colIndex:any)=>{
       
        CsvString+=colItem+',';
      })
      CsvString+="\r\n";
      
    });
    CsvString="data:application/docx,"+encodeURIComponent(CsvString);
    var x=document.createElement("A");
    x.setAttribute("href",CsvString);
    x.setAttribute("download","Asking.docx");
    document.body.appendChild(x)
    x.click();
    this.array=[];
  }

 

    }
    


