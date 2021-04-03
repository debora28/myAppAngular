// import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './courses-list.component.html',
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: forms',
        imageUrl: '',
        price: 99.99,
        code: 'XPS-9897',
        duration: 120,
        rating: 4.4,
        releaseDate: 'March, 12, 2021',
        description: 'ghgsh'
      },
      {
        id: 1,
        name: 'Angular: forms',
        imageUrl: '',
        price: 99.99,
        code: 'XPS-9897',
        duration: 120,
        rating: 2.1,
        releaseDate: 'March, 12, 2021',
        description: 'ghgsh'
      },
    ];
  }
}
