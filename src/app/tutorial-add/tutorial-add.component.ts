import { Component } from '@angular/core';
import { Tutorial } from '../model/tutorial/tutorial';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-tutorial-add',
  templateUrl: './tutorial-add.component.html',
  styleUrls: ['./tutorial-add.component.css']
})
export class TutorialAddComponent {
tutorial: Tutorial = {
  title:"",
  description:"",
  published: false
}
submitted = false;

constructor(private tutorialService: TutorialService){

}
saveTutorial(): void{
  const data = {
    title: this.tutorial.title,
    description: this.tutorial.description,
    published: false
  }
  this.tutorialService.storeData(data)
  .subscribe({
    next: (data) => {
      console.log(data);
      this.submitted = true;
    },
    error: (e) => console.log(e)
  })
}
clearInputData(){
  this.submitted = false;
  this.tutorial = {
    title:'',
    description:'',
    published: false
  }
}
}
