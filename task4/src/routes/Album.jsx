import React, { Suspense, useEffect, useState } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";
import styles from "./Album.module.css";
import Api from "../utils/Api";

export const loader =  ({ params: { id } }) => {
  const albumPromise =  Api.getAlbum(id);
  const photosPromise =  Api.getPhotos(id);
  return { albumPromise, photosPromise };
};

export default function Album() {
  const { albumPromise, photosPromise } = useLoaderData();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const usersPromise = await Api.getUsers();
      const album = await albumPromise;
      const albumsOfUser = usersPromise.filter(
        (user) => user.id === album.userId
      );
      setUsers(albumsOfUser);
    };
    fetchUsers();
  }, [albumPromise]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={albumPromise} errorElement={<div>Error 404</div>}>
        {(album) => {
          return (
            <div>
              <div>Name: {album.title}</div>
              {users.map((user) => (
                <Link key={user.id} to={`/users/${user.id}`}>
                  Created by: {user.name}
                </Link>
              ))}
            </div>
          );
        }}
      </Await>
      <Await resolve={photosPromise} errorElement={<div>Error 404</div>}>
        {(photos) => {
          return (
            <div className={styles.photos}>
              {photos.map((photo) => (
                <img src={photo.url} alt="" className={styles.photo} />
              ))}
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}
