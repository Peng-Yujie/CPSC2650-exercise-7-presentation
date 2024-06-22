# SQL Data Modeling

> Describe a SQL schema to support a Learning Management System, where
>
> - Students are enrolled in Courses
> - Courses have Lessons, and Assignments
> - Assignments have Submissions. Each Submission belongs to one Student
>
> Here are the Tables. Describe the primary keys, and foreign key relationships
>
> - Students (should be Users but lets pretend there are only Students)
> - Courses
> - Enrollments
> - Lessons
> - Assignments
> - Submissions

## SQL Schema

Students (<u>student_id</u>, student_name, email, password, program)

- primary key: student_id
- columns:
  - student_name: varchar(255)
  - email: varchar(255)
  - password: varchar(255)
  - program: varchar(255)

Courses (<u>course_id</u>, course_name)

- primary key: course_id
- columns:
  - course_name: varchar(255)

Sections (<u>section_id</u>, **course_id**, section_code, instructor)

- primary key: section_id
- foreign key: course_id
- columns:
  - section_code: varchar(255)
  - instructor: varchar(255)

Enrollments (<u>enrollment_id</u>, **student_id**, **course_id**, **section_id**, enrollment_date)

- primary key: enrollment_id
- foreign key: student_id, course_id, section_id
- columns:
  - enrollment_date: date

Lessons (<u>lesson_id</u>, lesson_name, **course_id**)

- primary key: lesson_id
- foreign key: course_id

Assignments (<u>assignment_id</u>, assignment_name, **course_id**, **section_id**, due_date)

- primary key: assignment_id
- foreign key: course_id, section_id
- columns:
  - due_date: date

Submissions (<u>submission_id</u>, **student_id**, **assignment_id**)

- primary key: submission_id
- foreign key: student_id, assignment_id
