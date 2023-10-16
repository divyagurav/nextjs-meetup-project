import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetuppage=()=>{

    function addMeetupHandler(enteredMeetupData){
console.log(enteredMeetupData);
    }
return <NewMeetupForm onAddmeetup={addMeetupHandler}/>
}

export default NewMeetuppage;