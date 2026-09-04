export interface EventCard {
  src: string;
  altText: string;
  eventName: string;
  url: string;
}

export const events: EventCard[] = [
  {
    src: "/EeventsPageAssets/",
    altText: "Wave Length",
    eventName: "Wave Length",
    url: "/events/WaveLength",
  },
  {
    src: "/EventsPageAssets/InPlainSight.png",
    altText: "In Plain Sight",
    eventName: "In Plain Sight",
    url: "/events/InPlainSight",
  },
  {
    src: "/EventsPageAssets/WildCardEvent.png",
    altText: "Wild Card",
    eventName: "Wild Card",
    url: "/events/WildCard",
  },
  {
    src: "/EventsPageAssets/OffTheRecordEvent.jpg",
    altText: "Off The Record",
    eventName: "Off The Record",
    url: "/events/OffTheRecord",
  },
  {
    src: "/EventsPageAssets/CritsAngles.png",
    altText: "Critical Angles",
    eventName: "Critical Angles",
    url: "/events/CriticalAngles",
  },
  {
    src: "/EventsPageAssets/",
    altText: "Red Threads",
    eventName: "Red Threads",
    url: "/events/RedThreads",
  },
];
