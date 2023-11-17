import React, { Suspense, useEffect, useState } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";
import Api from "../utils/Api";

export const loader = ({params: {id}}) =>{
  const userPromise = Api.getUser(id)
  return {userPromise}
}

export default function Users() {
  const [albums, setAlbums] = useState([]);
  const { userPromise } = useLoaderData();

  useEffect(() => {
    const fetchAlbums = async () => {
      const albumsPromise = await Api.getAlbums()
      const user = await userPromise;
      const userAlbums = albumsPromise.filter(
        (album) => album.userId === user.id
      );
      setAlbums(userAlbums);
    };
    fetchAlbums();
  }, [userPromise]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={userPromise} errorElement={<div>Error 404</div>}>
        {(user) => {
          return (
            <div>
              <div>Name: {user.name}</div>
              <div>Username: {user.username}</div>
              <div>Email: {user.email}</div>
              <div>Phone: {user.phone}</div>
              <div>Site: {user.website}</div>
              <div>
                <p>Albums</p>
                {albums.map((album) => (
                  <div>
                    <Link key={album.id} to={`/${album.id}`}>
                      {album.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}
