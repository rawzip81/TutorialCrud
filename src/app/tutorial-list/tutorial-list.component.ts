import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../model/tutorial/tutorial';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {

  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {
    title:'',
    description:'',
    published: false, 
  }
  showTutorialDetail=false;

  ngOnInit(): void {
    this.getAllTutorials()
  }

  constructor(private tutorialService: TutorialService){
  }

  getAllTutorials(): void {
    this.tutorialService.getAll().subscribe({
      next: (data) => {
        this.tutorials = data
        console.log(data);
      },
      error: (e) => console.log(e)
    })
  }
  getTutorialById(id: any): void {
    this.tutorialService.get(id).subscribe({
      next: (data) => {
        this.currentTutorial = data;
        console.log(data);
        this.showTutorialDetail=true;
      },
      error: (e) => console.log(e)
    })
  }
  removeAllTutorial(): void {
    this.tutorialService.deleteAll().subscribe({
      next: (data) => {
        this.getAllTutorials() 
        this.showTutorialDetail = false;
      },
      error: (e) => console.log(e)
    })
  }

  deleteCurrentTutorial(id: any): void{
    this.tutorialService.deleteByID(id).subscribe({
      next: (data) => {
        this.getAllTutorials() 
      },
      error: (e) => console.log(e)
    })
  }

}
