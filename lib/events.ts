export interface EventCard {
    src:string;
    altText: string;
    eventName: string;
    url: string
}

export const events: EventCard[] = [
{
    src: "/",
    altText: "Wave Length",
    eventName: "Wave Length",
    url: "/events/WaveLength"
},
{
    src: "/",
    altText: "In Plain Sight",
    eventName: "In Plain Sight", 
    url: "/events/InPlainSight"
},
{
    src: "/WildCardAsset/WildCardEvent.png",
    altText: "Wild Card",
    eventName: "Wild Card", 
    url: "/events/WildCard"
},
{
    src: "/25T3OffTheRecordAssets/OffTheRecordEvent.jpg",
    altText: "Off The Record", 
    eventName: "Off The Record", 
    url: "/events/OffTheRecord"
},
{
    src:"/",
    altText: "Stories of Us", 
    eventName: "Stories of Us", 
    url: "/events/StoriesOfUs"
},
{
    src:"/",
    altText: "Critical Angles", 
    eventName: "Critical Angles", 
    url: "/events/CriticalAngles"
}, 
{
    src:"/",
    altText: "Red Threads", 
    eventName: "Red Threads", 
    url: "/events/RedThreads"
}
]