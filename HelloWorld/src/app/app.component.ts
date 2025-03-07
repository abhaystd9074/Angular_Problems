import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl="BL_logo_square_jpg.jpg";
  url="https://www.bridgelabz.com/";
  userName: string="";
  nameError: string="";

  ngOnInit():void{
    this.title= "Hello from BridgeLabz.";
  }
  onClick($event:any){
    console.log("save button is clicked!",$event);
    window.open(this.url, "_blank");
  }
  onInput($event:any){
    console.log("change Event Occured!" , $event.data);
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }
    this.nameError="Name is Incorrect!";
  }
}
