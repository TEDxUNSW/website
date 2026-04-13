import twoSixTermOne from "./eventsPage/26T1";
import twoSixTermTwo from "./eventsPage/26T2";

export default function display(slug: string) {
    if (slug == '26T1') {
        return twoSixTermOne;
    } else if (slug == '26T2') {
        return twoSixTermTwo;
    }
}