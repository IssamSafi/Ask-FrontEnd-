import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { HomeService } from 'src/app/Services/home.service';
import{Chart,registerables} from 'node_modules/chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor(public home :HomeService){}

  categoryname:any[]=[];
  question:any[]=[];
  result:any[]=[];


  ngOnInit(): void {
    this.home.getTotalUser();

    this.home.charts().subscribe((resp:any)=>{
      this.result=resp;
      this.result.forEach((chartrep:any)=>{
        this.categoryname.push(chartrep.category_Name);
        this.question.push(chartrep.questionCount);
      })
     })
      this.RenderChart(this.categoryname,this.question)
    
    
    
    
       
     
      }
    
      RenderChart(categoryname:any,question:any){
        
        const myChart = new Chart("chart", {
            type: 'bar',
            data: {
                labels:categoryname ,
                datasets: [{
                    label: 'Charts',
                    data:question ,
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

    
    
  


