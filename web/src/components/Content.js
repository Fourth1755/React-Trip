import React, { useState,useEffect } from 'react';
import './Content.css';

const Content=()=>{
    const [backendData,setBackendData]=useState([{}])
    useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data=>{
        setBackendData(data)
      }
    )
  },[])
    const [searchTrips,setSearchTrips]=useState('');
    return (
        <div className="App">
          <div className='search'>
              <input 
                    type='search'
                    placeholder="หาที่เที่ยวแล้วไปกับ..."
                    onChange={(event)=>{
                      setSearchTrips(event.target.value);
                    }}/>
            </div>
          {(typeof backendData.trips === 'undefined')?(
            <div className='loading'>
              <p >Loading ...</p>
            </div>
          ):(
            backendData.trips.filter((trip)=>{
              if(searchTrips == ''){
                
                return trip
              }
              else if(trip.tags.toString().includes(searchTrips)||trip.title.includes(searchTrips)||trip.description.includes(searchTrips)){
                console.log(trip.tags);
                return trip
              }
              
            }).map((trip,key)=>(
            <div className="container" key={key}>
                <div className="image-big"> 
                    
                      <a href={trip.url}>
                      <img src={trip.photos[0]} alt="image"/>
                      </a>
                    
                </div>
                <div className="content">
                  <div>
                    <a className='title' href={trip.url}>{trip.title}</a>
                    <p className="content-in">{trip.description}</p>
                    
                    <a href={trip.url} className="link-read">อ่านต่อ</a>
                    <p>หมวด: 
                      {trip.tags.map((map)=>(
                        <a href="" className="link">{map}</a>
                      ))}
                    </p>
                  </div>
                    <div className="image-group">
                        <img src={trip.photos[1]} alt="image"/>
                        <img src={trip.photos[2]} alt="image"/>
                        <img src={trip.photos[3]} alt="image"/>
                    </div>
                </div>
                
            </div>
            ))
          )}
        </div>
    );
}

export default Content