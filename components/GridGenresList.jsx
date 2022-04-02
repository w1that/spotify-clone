import { Col, Row } from "antd";
import { observer } from "mobx-react-lite";
import React from "react";
import GridGenreItem from "./GridGenreItem";
import genreStore from "../mobx/GenreStore";

function GridGenresList() {
  // this component is the place where the content on search page will be listed.
  const genres = genreStore.genres;

  return (
    <div className="w-full px-8 mt-20">
      <h1 className="text-white mt-3 text-2xl font-gotham inline-block mb-5 ">
        Hepsine göz at
      </h1>
      <Row>
        {genres.map((genre) => {
          return (
            <Col className="overflow-hidden  mr-4 mb-4" key={genre._id}>
              <GridGenreItem genre={genre} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default observer(GridGenresList);
