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
chartdata:any;
categoryname:any[]=[];
question:any[]=[];

  ngOnInit(): void {
this.home.getChartinfo().subscribe(result=>{
  this.chartdata=result;
    if(this.chartdata!=null){
      for(let i=0;i<this.chartdata.length;i++){
        //console.log(this.chartdata[i]);
        this.categoryname.push(this.chartdata[i].year);
        this.question.push(this.chartdata[i].amount);
      }
      this.RenderChart(this.categoryname,this.question);

    }
  }
  )




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

  RenderChart(Category:any,questionnumber:any){
    const myChart = new Chart("chart", {
        type: 'bar',
        data: {
            labels:Category ,
            datasets: [{
                label: 'Charts',
                data:questionnumber ,
                backgroundColor: [
              
                    'rgba(0,0,255)',
 
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
              
                
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  }


    }
    


