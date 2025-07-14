import { useNavigate } from 'react-router-dom';
import { useState } from "react"
const Login = () => {
  const navigate = useNavigate();
    // -----------m1
   const [mail,setmail] = useState('');
   const [password,setpassword] = useState('');
const change = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setmail(value);
    } else if (name === "password") {
      setpassword(value);
    }
  };


// -----------------m2
//      const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const change=(e)=>{

//     const name = e.target.name; // tells us if it's "email" or "password"
//     console.log(name)
// const value = e.target.value; // the new text
// console.log(value)
  
// setFormData(prev => ({ ...prev, 
//     [name]: value 

// }));
// }

  // -----------------modes
  {/* -------------------- checkbox */}

//   const [darkMode, setDarkMode] = useState(false);
//    const [mode,setmode] = useState({
//     color:'black',
//     background:'white',
    
//    });

// const toggleMode = (e) => {
//   const isChecked = e.target.checked;
//   setDarkMode(isChecked);

//   if (isChecked) {
//     setmode({
//       color: 'white',
//       background: 'black',
//     });
//   } else {
//     setmode({
//       color: 'black',
//       background: 'white',
//     });
//   }
// };

  {/* -------------------- btn */}
const [mode,setmode]= useState(
  {
    color:'black',
   background:'white',
  }
)
const [btnmode,setbtnmode]= useState(
  {
    backgroundColor: '#f0f0f0',
    color: 'black',
    border: '1px solid gray',
    margin: '5px',
    padding: '8px 12px',
    borderRadius: '5px',
  }
)

const btn=(e)=>{
    const selectedColor = e.target.value;
  
    if (selectedColor === 'black') {
      setmode({ color: 'white', background: 'black' });
      setbtnmode( {
        backgroundColor: '#ffffff',
        color: 'black',
        // border: '1px solid gray',
        margin: '5px',
        padding: '8px 12px',
        borderRadius: '5px',
      })
    } 
    else if (selectedColor === 'blue') {
      setmode({ color: 'white', background: 'blue' });
      setbtnmode( {
        backgroundColor: '#008000',
        color: 'white',
        // border: '1px solid gray',
        margin: '5px',
        padding: '8px 12px',
        borderRadius: '5px',
      })
    } 
    else if (selectedColor === 'pink') {
      setmode({ color: 'black', background: 'pink' });
      setbtnmode( {
        backgroundColor: '#AA336A',
        color: 'white',
        // border: '1px solid gray',
        margin: '5px',
        padding: '8px 12px',
        borderRadius: '5px',
      })
    }
}

const handle = (e) => {
  // e.preventDefault(); // prevent form reload
  navigate('/home');
};
  return (
    <>
    <div className="login-container" style={mode}>
      <h2 style={mode}>Login</h2>
      <form action="#" style={mode} className='main'>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={mail} onChange={change} required />
        {/* <input type="email" id="email" name="email" value={formData.email} onChange={change} required /> */}

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={password} onChange={change} required />
        {/* <input type="password" id="password" name="password" value={formData.password} onChange={change} required /> */}

        <button type="submit" style={btnmode} onClick={handle}>Login</button>
      
{/* -------------------- checkbox */}
        {/* <label htmlFor="checkbox">enable dark mode</label>
        <input type="checkbox"
         id="checkbox" 
         name="checkbox"
         checked={darkMode}
         onChange={toggleMode}
        /> */}
        
  {/* -------------------- btns */}

        <button type="submit" value="black" onClick={btn}  style={btnmode}>black</button>
        <button type="submit" value="blue" onClick={btn}  style={btnmode}>blue</button>
        <button type="submit" value="pink" onClick={btn}  style={btnmode} >pink</button>
      </form>
    </div>
  

    </>
  )
}
export default Login
