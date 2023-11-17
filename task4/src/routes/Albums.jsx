import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import Api from "../utils/Api";

export const loader = async () => {
  const albums = await Api.getAlbums()
  return { albums };
};

export default function Albums() {
  const {albums} = useLoaderData()
  return (
    <div>
      {albums.map((album) => (
        <Link key={album.id} to={`/${album.id}`}>
          <div>{album.title}</div>
        </Link>
      ))}
    </div>
  );
}
