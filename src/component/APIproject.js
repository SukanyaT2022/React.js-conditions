import React, { useEffect, useState } from 'react'

const APIproject = () => {
    const [data,setData]= useState([])//alll data in api put on data
    const [loading,setLoading]= useState(false)
    //usefeect use 
    useEffect(
        ()=>{
        fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/100")
        .then((response)=>response.json())
        .then((data)=>{
            setData(data)
        })
        .catch((error)=>{
            console.log(error)
        })

        },[]//dependency use to determine the number of time use effect will run
    )

    // useEffect(() => {
    //     fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/100")
    //       .then(res => res.json())
    //       .then(data => setData(data))
    //   })
    //   console.log(data)// just for check data coming




  return (
    <div>

    </div>
  )
}

export default APIproject