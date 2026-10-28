#!/usr/bin/env python3
"""
Phil Countryville College (philcountryville.com)
College of Computer Studies - BS Information Technology (BSIT)
Student Profile & Portfolio Script

Author: Mark E. Langomez
Year Level: 2nd Year College Student
Contact Number: 09552363611
Email: langomezmark707@gmail.com
Facebook: Mark Langomez
"""

class Student:
    def __init__(self, name: str, student_id: str, course: str, year: int, school: str):
        self.name = name
        self.student_id = student_id
        self.course = course
        self.year = year
        self.school = school
        self.contact_no = "09552363611"
        self.email = "langomezmark707@gmail.com"
        self.fb = "Mark Langomez"
        self.grades = {
            "CC101 - Intro to Computing": 1.0,
            "CC104 - Object-Oriented Programming": 1.25,
            "CC105 - Data Structures & Algorithms": 1.25,
            "IT211 - Web Systems & Technologies": 1.15,
            "IT212 - Database Management Systems": 1.20,
            "NET101 - Computer Networking": 1.25
        }

    def calculate_gpa(self) -> float:
        total = sum(self.grades.values())
        return round(total / len(self.grades), 2)

    def display_portfolio(self):
        print("=" * 60)
        print(" PHIL COUNTRYVILLE COLLEGE - DIGITAL STUDENT PORTFOLIO")
        print(" School Website: philcountryville.com")
        print("=" * 60)
        print(f" Student Name   : {self.name}")
        print(f" Degree & Year  : {self.course} (Year {self.year})")
        print(f" Contact Mobile : {self.contact_no}")
        print(f" Email Address  : {self.email}")
        print(f" Facebook       : {self.fb}")
        print("-" * 60)
        print(" ACADEMIC PERFORMANCE & SUBJECTS:")
        for subject, grade in self.grades.items():
            print(f"   * {subject.ljust(40)}: {grade:.2f}")
        print("-" * 60)
        gpa = self.calculate_gpa()
        print(f" Cumulative GPA : {gpa:.2f}")
        if gpa <= 1.45:
            print(" Academic Honor : President's / Dean's List Standing!")
        print("=" * 60)
        print(" Maayong Adlaw! Welcome to Mark E. Langomez's Portfolio.")
        print("=" * 60)


if __name__ == "__main__":
    mark = Student(
        name="Mark E. Langomez",
        student_id="PCC-2023-0491",
        course="BS in Information Technology",
        year=2,
        school="Phil Countryville College"
    )
    mark.display_portfolio()
