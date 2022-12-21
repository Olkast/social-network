import React from "react";
import styles from "./Users.module.css";
import autoPhoto from "../../assets/images/autoPhoto.png";


let Users = (props) => {

    let pagesCount = props.totalUserCount / props.pageSize;

    let pages = [];
    for(let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(number => {
                return <span onClick={(e) => {props.onPageChanged(number)}}
                             className={props.currentPage === number ? styles.selectorPage : undefined}>
                            {number}
                        </span>
            })}
        </div>

        {props.users.map((user) => (
                <div key={user.id}>

                                <span>
                <div>
                    <img src={user.photos.small != null ? user.photos.small : autoPhoto} className={styles.photo}
                         alt=""/>
                </div>
                <div>
                    {user.followed ? <button onClick={() => {
                        props.follow(user.id)
                    }}>unfollow</button> : <button onClick={() => {
                        props.unfollow(user.id)
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
}

export default Users;