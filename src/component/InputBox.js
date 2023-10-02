import React from 'react'
import sad from '../asset/sadPic.png'
import happy from '../asset/happyPic.png'
import angry from '../asset/angryPic.png'
import soso from '../asset/sosoPic.png'
const InputBox = () => {
    let country = ""
    const username = ""
    const age = 12
    let mood = ""
    
  return (
    <div>
        {/* <h2>Log in page</h2>
        <input type ="text" placeholder='Username' />
        <input type = "Password" placeholder='Password'/>
        <button>Submit</button> */}

        <p>{country && "You live in Cananada."}</p>
{/* && either one or none show nothing */}
        <p>Hello! {username || "Guest"}</p>
        

        <p>{age > 18 ? "You are an adult." : "You are under 18."}</p>

        <p>{(mood === "happy" )? <p>She is happy.<img src= {happy} width={50} height={50} alt="happy kid"/></p> :
        (mood === "angry")? <p>She is angry.<img src= {angry} width={50} height={50} alt="happy kid"/></p>  :
        <p>I do not know her mood<img src= {soso} width={50} height={50} alt="happy kid"/></p>
        }</p>

    </div>
  )
}

export default InputBox