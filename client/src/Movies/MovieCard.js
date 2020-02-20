import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  return (
    <div>
      <Card className="movie-card">
        <CardBody>
          <CardTitle className="movie-title">{title}</CardTitle>
          <CardSubtitle>
            Director: <em>{director}</em>
          </CardSubtitle>
          <CardText>
            Metascore: <strong>{metascore}</strong>
          </CardText>
          {stars.map(star => (
            <CardText key={star} className="movie-star">
              {star}
            </CardText>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};

export default MovieCard;
