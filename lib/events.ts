export interface EventCard {
    slug:string;
    title: string;
    year: number;
    description: string;
    bgImage: string;
}

export const events: EventCard[] = [
{
    slug: "Wave Length",
    title: "events 26T2",
    year: 2026,
    description: "events for 26T1",
    bgImage: ""
},
{
    slug: "26T1",
    title: "events 26T1",
    year: 2026,
    description: "events for 26T1",
    bgImage: ""
}, 
{
    slug: "OffTheRecord", 
    title: "Off The Record", 
    year: 2025,
    description: "events for 25T3",
    bgImage: ""
}, 
{
    slug: "WildCard", 
    title: "WildCard", 
    year: 2025,
    description: "events for 25T2",
    bgImage: ""
}]

export const groupedEvents = Object.entries(
  events.reduce<Record<number, EventCard[]>>((acc, item) => {
    if (!acc[item.year]) acc[item.year] = [];
    acc[item.year].push(item);
    return acc;
  }, {})
)
.sort((a, b) => Number(b[0]) - Number(a[0]))
.map(([year, items]) => ({
    year: Number(year),
    items,
}));