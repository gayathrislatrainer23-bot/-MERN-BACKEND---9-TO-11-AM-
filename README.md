Notes
29/09/2025 -- 30/09/2025  --- 1/10/2025

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
        explained the consept