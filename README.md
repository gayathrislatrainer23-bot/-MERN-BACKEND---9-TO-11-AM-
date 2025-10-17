Notes
29/09/2025 -- 30/09/2025  --- 5/10/2025

1. React- js library
library- collection of pre-written code
2. vite set up // CRA (concept)
terminal ctrl+j
3. work flow and folder structure of react
project/
node-module -- store dependencies
index.html -- entry html file -- Single page
src-- dynamic folder -- changes occurs
main.js -- app entry point
App.jsx -- main react component -- parsel casing
package.json -- keep meta data of dependencies

4. components - building block
* class component -- old way
* functional component -- new way
---> js function return jsx

function App () {
return (
jsx
)
}

5. jsx -- js xml , html like syntax

rules
* one parent element
* {} embed variables
* clasName
* inline style


7/10/2025

1. form 
2. event 
3. controlled comp

 task:
 1. name input in form  controll and handle
 2. event onchange handle -- h1 -- msg,,  input - message change  update
 3.  show - button - click  h1-- welcome
 
8/10/2025

1. conditional operator
2. task to 
     LoginForm 
     1. email , password , user(obj) in app.js  pass to  LoginForm   , check from browser value to use (object)

9/10/2025

Test and doubt clearing 

10/10/2025

1. students.map(()=>(jsx)),
2. useEffect
--> side effect
   1. useEffect(()=>(
     code for side effect 
     console.log('rendering the comp:')
    ))
     ---> run every time when the comp render

   2. useEffect(()=>(
     code for side effect 
     console.log('rendering the comp:')
    ),[])--> dependancy array
      ---> only one time(intialy)
const [fruits,setFruits] =useState("")
  3. useEffect(()=>(
     code for side effect 
     console.log('rendering the comp:')
    ),[fruits])
    ---> when the state change then run

3. Lifting State up  -- task 
        explained the concept

13/10/2025
1. object listing
2. test

3.Table Task
 Create a JSX component that shows a student details table.
 Columns: Roll No, Name, Grade.
 Add at least 3 rows with sample data.
 Use className="student-table" for the table.
 students = [{
  roll No:1, Name: "Manu",},
  {},{}]


14/10/2025
1. Router dom
2. home and about page using react
3. Spa
4. task:
1. admindashboard and clientHome router
Based on role, render the correct component (AdminDashboard or ClientHome).
default admin user in app.js  

 2. students = [{
  roll No:1, Name: "Manu", subject:["maths","Biology"]},
  {},{}]

15/10/2025
1. Router dom Navigation
2. Short questions
3. Task:  today's task 3. Dropdown (Select) Task
  Create a dropdown (<select>) to choose a student name.
  Options: Anitha, Rahul, Deepak, Gayathri.
  Default option: "Select a student".
  Display below:
 You selected: [student name]

 16/10/2025
1. crud operation 

4. Radio Buttons Task
Create a gender selection with radio buttons:
Male
Female
Other
5. Checkbox Task
 Create checkboxes for subjects: Maths, Science, English.
  Display checked values below as:
 Selected Subjects: Maths, English


2. Axios  
-->   .post("api", req.body)
.then((res)=>)
.catch((error)=> )

<---CreateUser.jsx

 17/10/2025
1. introduced Material ui icons and other features
https://mui.com/material-ui/material-icons

2. Tailwind introduced
https://v3.tailwindcss.com/docs/guides/create-react-app

Api
 https://jsonplaceholder.typicode.com/users -- post
 1. axios+useEffect+get api in admin dashboard +table

 task : get api (Tuesday submition)
 https://jsonplaceholder.typicode.com/users
 
revision
reconcilation
fagments
reactmemo
virtual Dom

