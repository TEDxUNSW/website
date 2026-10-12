export interface EventCard {
  src: string;
  altText: string;
  eventName: string;
  url: string;
}

export const events: EventCard[] = [
  {
    src: "/EventPageAssets/",
    altText: "Wave Length",
    eventName: "Wave Length",
    url: "/events/WaveLength",
  },
  {
    src: "/EventPageAssets/InPlainSight.png",
    altText: "In Plain Sight",
    eventName: "In Plain Sight",
    url: "/events/InPlainSight",
  },
  {
    src: "/EventPageAssets/WildCardEvent.png",
    altText: "Wild Card",
    eventName: "Wild Card",
    url: "/events/WildCard",
  },
  {
    src: "/EventPageAssets/OffTheRecordEvent.jpg",
    altText: "Off The Record",
    eventName: "Off The Record",
    url: "/events/OffTheRecord",
  },
  {
    src: "/EventPageAssets/CritsAngles.png",
    altText: "Critical Angles",
    eventName: "Critical Angles",
    url: "/events/CriticalAngles",
  },
  {
    src: "/EventPageAssets/RedThreads.png",
    altText: "Red Threads",
    eventName: "Red Threads",
    url: "/events/RedThreads",
  },
];
