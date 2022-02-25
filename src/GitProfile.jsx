import axios from "axios";
import { Fragment, useState } from "react";

export default function GitProfile() {
    let [name, setName] = useState("Default");
    let [bio, setBio] = useState("Default");
    let [avatar, setAvater] = useState(null);
    let [repos, setRepos] = useState("");
    let [follow, setFollow] = useState("");
    let [message, setMessage] = useState("");

    const getUser = (event) => {
        event.preventDefault();
        axios
            .get(`https://api.github.com/users/${event.target.userid.value}`)
            .then((res) => {
                setName(
                    res.data.name !== null ? res.data.name : res.data.login
                );
                setBio(res.data.bio !== null ? res.data.bio : "No Bio.");
                setAvater(res.data.avatar_url);
                setRepos(res.data.html_url + "?tab=repositories");
                setFollow(res.data.html_url);
                setMessage(
                    res.data.mail !== null ? res.data.mail : res.data.html_url
                );
            });
    };

    return (
        <Fragment>
            <div className="inputContainer">
                <form onSubmit={getUser}>
                    <input
                        className="inputBox"
                        type="text"
                        name="userid"
                        placeholder="GitHub ID"
                    />
                    <button className="getProfile" type="submit">
                        Get Profile
                    </button>
                </form>
            </div>
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

                <div className="card-body">
                    <h2 className="name">{name}</h2>
                    <h4 className="job-title">GitHub Repo Developer</h4>
                    <div className="bio">{bio}</div>
                </div>

                <div className="card-footer">
                    <div className="stats">
                        <div className="stat">
                            <button className="link">
                                <a href={repos}>
                                    <img
                                        className="linkIcon"
                                        src="https://img.icons8.com/glyph-neue/344/github.png"
                                        alt=""
                                    />
                                </a>
                            </button>
                            Repositories
                        </div>
                        <div className="stat">
                            <button className="link">
                                <a href={follow}>
                                    <img
                                        className="linkIcon"
                                        src="https://img.icons8.com/fluency/344/add-user-male.png"
                                        alt=""
                                    />
                                </a>
                            </button>
                            Follow
                        </div>
                        <div className="stat">
                            <button className="link">
                                <a href={message}>
                                    <img
                                        className="linkIcon"
                                        src="https://img.icons8.com/plasticine/100/000000/gmail-new.png"
                                        alt=""
                                    />
                                </a>
                            </button>
                            Message
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
