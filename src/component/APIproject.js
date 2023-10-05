import React, { useEffect, useState } from 'react'

const APIproject = () => {
    const [data,setData]= useState()
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
      console.log(data)// just for check data coming

  return (
    <div>

  {data ? (
    <div>
   <h3>id is {data.objectID}</h3>
   <h3>id is {data.country}</h3>
   <h3>id is {data.culture}</h3>
   <h3>id is {data.objectDate}</h3>
   <img src={data.primaryImageSmall}/>
    </div>
  )
  : (
    <h2>loading</h2>
  )}

    </div>
  )
}

export default APIproject