import axios from "axios";
import { useState } from "react";

export default function BoredAPI() {
    let [avatar, setAvater] = useState(null);
    let [activity, setActivity] = useState("Default");
    let [type, setType] = useState("Default");
    let [participants, setParticipants] = useState("Default");
    let [price, setPrice] = useState("Default");
    let [access, setAccess] = useState("Default");
    let [random, setRandom] = useState(300);

    const getActivity = async () => {
        await axios.get("https://www.boredapi.com/api/activity").then((res) => {
            setActivity(res.data.activity);
            setType(res.data.type);
            setParticipants(res.data.participants);
            setPrice(res.data.price);
            setAccess(res.data.accessibility);
        });
        setRandom(Math.floor(Math.random() * (400 - 300) + 300));
        setAvater(`https://placekitten.com/${random}/${random}`);
    };

    return (
        <div className="card">
            <div>
                <img
                    className="card-header"
                    src={
                        avatar !== null
                            ? avatar
                            : "https://avatars.githubusercontent.com/u/722691?v=4"
                    }
                    alt=""
                />
            </div>
            <h2 className="boredHeading">Bored API Activity</h2>
            <div>
                <ul>
                    <li>Activity - {activity}</li>
                    <li>Type - {type}</li>
                    <li>Participants - {participants}</li>
                    <li>Price - {price}</li>
                    <li>Accessibility - {access}</li>
                </ul>
            </div>
            <div className="demo">
                <button className="refresh">
                    <img
                        onClick={getActivity}
                        className="refresh-icon"
                        src="https://img.icons8.com/office/2x/refresh.png"
                        alt=""
                    />
                </button>
            </div>
        </div>
    );
}
