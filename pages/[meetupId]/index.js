import MeetupDetail from "../../components/meetups/MeetupDetails"


function MeetupDetails() {
    return <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg" alt="A first Meetup"
        title='First Meetup'
        address='Some Street 5, Some City'
        description='This is a first meetup'
        />
}


export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
            {
                params: {
                    meetupId: 'm3',
                },
            },
            {
                params: {
                    meetupId: 'm3',
                },
            },
        ],
    };
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image:
                    'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
                id: meetupId,
                title: 'First Meetup',
                address: 'Some Street 5, Some City',
                description: 'This is a first meetup',
            },
        },
    };
}

export default MeetupDetails;