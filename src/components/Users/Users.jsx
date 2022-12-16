import React from "react";
import styles from "./Users.module.css";
import axios from 'axios';
import autoPhoto from "../../assets/images/autoPhoto.png"


class Users extends React.Component {
    componentDidMount() {
        axios.get("http://localhost:3003/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render () {
            return (
                <div>
                    {this.props.users.map((user) => (
                            <div key={user.id}>
                                <span>
                <div>
                    <img src={user.photos.small != null ? user.photos.small : autoPhoto} className={styles.photo}
                         alt=""/>
                </div>
                <div>
                    {user.followed ? <button onClick={() => {
                        this.props.follow(user.id)
                    }}>unfollow</button> : <button onClick={() => {
                        this.props.unfollow(user.id)
                    }}>follow</button>}
                </div>
                        </span>
                                <span>
                <div>{user.fullName}</div>
                <div>{user.status}</div>
            </span>
                                <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </span>
                            </div>
                        )
                    )}
                </div>
            );
    }
}


export default Users;