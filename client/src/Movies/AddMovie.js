import React, { useState } from "react";
import { Button, Form, Label, Input, Row, Col, FormGroup } from "reactstrap";
import axios from "axios";

const AddMovie = props => {
  const [appState, setAppState] = useState(props.items);
  console.log("appState", appState);

  const [newMovie, setNewMovie] = useState({
    id: "",
    title: "",
    director: "",
    metascore: Number(""),
    stars: []
  });

  const handleChange = e => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value
    });
    console.log(newMovie);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const movieUpdate = {
      id: Date.now(),
      title: newMovie.title,
      director: newMovie.director,
      metascore: Number(newMovie.metascore),
      stars: [newMovie.stars]
    };

    console.log("updated movie", movieUpdate);
    handleNewMovie(movieUpdate);
  };

  const handleNewMovie = movie => {
    axios
      .post("http://localhost:5000/api/movies", movie)
      .then(res => {
        setAppState([...appState, movie]);
        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label>Name: </Label>
              <Input
                type="text"
                value={newMovie.title}
                name="title"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label>Director:{""} </Label>
              <Input
                type="text"
                value={newMovie.director}
                name="director"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={2}>
            <FormGroup>
              <Label>Metascore:{""} </Label>
              <Input
                type="number"
                value={newMovie.metascore}
                name="metascore"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label>Stars:{""} </Label>
              <Input
                type="text"
                value={newMovie.stars}
                name="stars"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <Button color="primary">Add Movie</Button>
      </Form>
    </div>
  );
};

export default AddMovie;
