import React, { useState, useEffect } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
const initialItem = {
  id: "",
  title: "",
  director: "",
  metascore: "",
  stars: []
};

const UpdateMovie = props => {
  const [movieInfo, setMovieInfo] = useState({ initialItem });

  useEffect(() => {
    console.log("props test", props.items);
    const editingItem = props.items.find(thing => {
      return thing.id === Number(props.match.params.id);
    });

    if (editingItem) {
      setMovieInfo(editingItem);
    }
  }, [props.items, props.match.params]);

  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    console.log(movieInfo);
    setMovieInfo({
      ...movieInfo,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = Number(props.match.params.id);
    props.updateItem(id, movieInfo);
  };

  return (
    <div>
      <h1>Update Item</h1>
      <Form onSubmit={handleSubmit}>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label>Title:{""} </Label>
              <Input
                type="text"
                name="title"
                onChange={changeHandler}
                value={movieInfo.title}
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label>Director:{""} </Label>
              <Input
                type="text"
                name="director"
                onChange={changeHandler}
                value={movieInfo.director}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={2}>
            <FormGroup>
              <Label>Metascore:{""} </Label>
              <Input
                type="text"
                name="metascore"
                onChange={changeHandler}
                value={movieInfo.metascore}
              />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label>Stars:{""} </Label>

              <Input
                type="text"
                name="stars"
                onChange={changeHandler}
                value={movieInfo.stars}
              />
            </FormGroup>
          </Col>
        </Row>

        <Button color="primary" type="submit">
          Submit Changes
        </Button>
      </Form>
    </div>
  );
};

export default UpdateMovie;
