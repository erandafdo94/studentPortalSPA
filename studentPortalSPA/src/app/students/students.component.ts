import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';
import { Student } from '../models/api.models/student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'email', 'mobile', 'gender'];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();

  constructor(private studentService : StudentService) { }

  ngOnInit(): void {

    //fetch students
    this.studentService.getStudents()
    .pipe(
      map(responseData => {
        const postArray = [];
        for (const key in responseData) {
        postArray.push( { ...responseData[key] })
      }
      return postArray;
    }
    )) 
    .subscribe(
      (success) => {
        this.students = success;
        this.dataSource = new MatTableDataSource<Student>(this.students);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
