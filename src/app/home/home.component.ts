import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  profile={
   firstName:"oumaima",
lastName:"lahouel",
country:"Tunisia" 
  }
  linkImage="https://3.bp.blogspot.com/-ibq_MLPWpfM/WGytpMntQGI/AAAAAAAACB4/zTdJuSm9lXATtMpMoi__R9B_RiSJBqtzwCLcB/s1600/DataBinding.JPG"
  titleStyle="color:red;"
  numbre=1
  verif=false
  dataArray=["tunisia","morocoo","libya"]

  inc(){
    this.numbre++
  }
  dec(){
this.numbre--
  }
  disp(){
    this.titleStyle="color:red;font-size:20px"
  }
  hid(){
    this.titleStyle="color:green"
  }

}
