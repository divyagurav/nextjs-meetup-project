import React from 'react';

import MeetupList from '../components/meetups/MeetupList';

const HomePage=()=>{

    const Dummy_MEETUPS = [
        {
            id: 'm1',
            title: 'A First Meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
            address: 'Old Town of Munich 72, 1234 Germany',
            description: 'This is First Meetup!'
        },
        {
            id: 'm2',
            title: 'A Second Meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
            address: 'First City 45, 1234 India',
            description: 'This is Second Meetup!'
        }
    ]
return <MeetupList meetups={Dummy_MEETUPS}/>
}

export default HomePage;