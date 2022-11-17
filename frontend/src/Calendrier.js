import React, {useState} from 'react';
import Calendar from 'react-calendar'; 

export default function calendrier(){
    const [value, onChange]= useState(new Date());
    return(
      <div className='calen'>
      <Calendar onChange={onChange} value={value} />
    </div>
      )
}


