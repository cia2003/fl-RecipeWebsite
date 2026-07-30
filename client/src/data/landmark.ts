import EiffelImage from "../assets/images/landmarks/eiffel-tower-img.jpg"
import AcropolisImage from "../assets/images/landmarks/acropolis-img.jpg"
import ColloseumImage from "../assets/images/landmarks/collosseum-img.jpg"
import LibertyImage from "../assets/images/landmarks/liberty-img.jpg"
import GreatWallChinaImage from "../assets/images/landmarks/great-wall-china-img.jpg"

const landmarks = [
    {
        id: 1,
        name: "Eiffel Tower",
        country: "France",
        city: "Paris",
        img: EiffelImage
    },
    {
        id: 2,
        name: "Colosseum",
        country: "Italy",
        city: "Rome",
        img: ColloseumImage
    },
    {
        id: 3,
        name: "Statue of Liberty",
        country: "United States",
        city: "New York",
        img: LibertyImage
    },
    {
        id: 4,
        name: "Acropolis",
        country: "Greece",
        city: "Athens",
        img: AcropolisImage
    },
    {
        id: 5,
        name: "Great Wall of China",
        country: "China",
        city: "Beijing",
        img: GreatWallChinaImage
    }
];

export default landmarks