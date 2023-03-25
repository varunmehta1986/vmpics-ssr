import Gallery from 'react-photo-gallery-next';

function Photogrid() {
    const photos = [
        {
            src: "/images/Carousel/Dad to be talking to mom and twin babies.jpg",
            width: 3,
            height: 2,
            alt: "Dad-to-be-talking-to-mom-and-twin-babies"
        },
        {
            src: "/images/Carousel/pregnant mom waiting for the baby.jpg",
            width: 2,
            height: 3,
            alt: "pregnant-mom-waiting-for-the-baby"
        },
        {
            src: "/images/Carousel/Family shoot on a cloudy day playing with kid.jpg",
            width: 3,
            height: 2,
            alt: "Family-shoot-on-a-cloudy-day-playing-with-kid"
        },
        {
            src: "/images/Carousel/Pregnant parents posing for a photo in rouse hill regional park.jpg",
            width: 2,
            height: 3,
            alt: "Pregnant-parents-posing-for-a-photo-in-rouse-hill-regional-park"
        },
        {
            src: "/images/Carousel/Dad to be feeling the kicks of twin babies in mom bump.jpg",
            width: 2,
            height: 3,
            alt: "Dad-to-be-feeling-the-kicks-of-twin-babies-in-mom-bump"
        },
        {
            src: "/images/Carousel/Dad to be kissing mom's bump at golden hour.jpg",
            width: 2,
            height: 3,
            alt: "Dad-to-be-kissing-mom's-bump-at-golden-hour"
        },
        {
            src: "/images/Carousel/To Be Parents looking at baby bump.jpg",
            width: 2,
            height: 3,
            alt: "To-Be-Parents-looking-at-baby-bump"
        },
        {
            src: "/images/Carousel/To be mom with baby bump in a park.jpg",
            width: 3,
            height: 2,
            alt: "To-be-mom-with-baby-bump-in-a-park"
        },
        {
            src: "/images/Carousel/girl dancing at a family shoot.jpg",
            width: 2,
            height: 3,
            alt: "girl-dancing-at-a-family-shoot"
        },
        {
            src: "/images/Carousel/To be parents sitting with arms around.jpg",
            width: 3,
            height: 2,
            alt: "To-be-parents-sitting-with-arms-around"
        },
        {
            src: "/images/Carousel/Big sister talking to mom baby bump.jpg",
            width: 2,
            height: 3,
            alt: "Big-sister-talking-to-mom-baby-bump"
        },
        {
            src: "/images/Carousel/Parents to be walking in rouse hill regional park.jpg",
            width: 3,
            height: 2,
            alt: "Parents-to-be-walking-in-rouse-hill-regional-park"
        },
        {
            src: "/images/Carousel/Dad making his daughter fly during family shoot.jpg",
            width: 2,
            height: 3,
            alt: "Dad-making-his-daughter-fly-during-family-shoot"
        },
        {
            src: "/images/Carousel/Pregant mom to be in a beatiful dress.jpg",
            width: 3,
            height: 2,
            alt: "Pregnant-mom-to-be-in-a-beatiful-dress"
        },
        {
            src: "/images/Carousel/Pregnant mom posing with sunset in the background at golden hour.jpg",
            width: 2,
            height: 3,
            alt: "Pregnant-mom-posing-with-sunset-in-the-background-at-golden-hour"
        },
        {
            src: "/images/Carousel/Pregnant couple showing sonogram during maternity shoot.jpg",
            width: 2,
            height: 3,
            alt: "Pregnant-couple-showing-sonogram-during-maternity-shoot"
        },
        {
            src: "/images/Carousel/Dad to be talking to the bump.jpg",
            width: 2,
            height: 3,
            alt: "Dad-to-be-talking-to-the-bump"
        },
        {
            src: "/images/Carousel/Parents to be during golden hour at rouse hill regional park.jpg",
            width: 3,
            height: 2,
            alt: "Parents-to-be-during-golden-hour-at-rouse-hill-regional-park"
        },

    ];

    return <Gallery photos={photos} />
}

export default Photogrid;