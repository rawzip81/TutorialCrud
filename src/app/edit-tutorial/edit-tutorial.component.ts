import { Component, Input, OnInit } from '@angular/core';
import { TutorialService } from '../tutorial.service';
import { Tutorial } from '../model/tutorial/tutorial';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-tutorial',
  templateUrl: './edit-tutorial.component.html',
  styleUrls: ['./edit-tutorial.component.css']
})
export class EditTutorialComponent implements OnInit{

  @Input() currentTutorial: Tutorial = {
    title:'',
    description:'',
    published: false
  }
message = '';

constructor(private tutorialService: TutorialService, 
            private router: Router,
            private route: ActivatedRoute){
}

ngOnInit(): void {
  this.message = '';
  const id = this.route.snapshot.params["id"]
  console.log("Id: ", id);
  this.getTutorialById(id);   
}

getTutorialById(id: any): void {
  this.tutorialService.get(id).subscribe({
    next: (data) => {
  this.currentTutorial = data;
  console.log(data);
},
error: (e) => console.error(e)
  });
}

updateCourseStatus(status: boolean): void {
  const data = {
    title: this.currentTutorial.title,
    description: this.currentTutorial.description,
    published: status
  }
  this.message = '';

  this.tutorialService.update(this.currentTutorial.id, data).subscribe({
    next:(data) =>{
      this.currentTutorial.published = status
      this.message = data.message ? data.message : 'The status has been successfully updated'
    },
    error: (e) => console.error(e)
  });
}

updateTutorial(): void {
  this.message = '',
  console.log("Update tutorial:", this.updateTutorial);
  this.tutorialService.update(this.currentTutorial.id, this.currentTutorial).subscribe({
    next:(data) =>{
      this.router.navigate(['/']);
      this.message = data.message ? data.message : 'The status has been successfully updated'
    },
    error: (e) => console.error(e)
  });
}

}
