import React, { Component } from "react";
import axios from "axios";

class UpdatePersonajes extends Component {
  state = {
    idPersonaje: null,
    nombre: "",
    imagen: "",
    idSerie: "",
  };

  api = "https://apiseriespersonajes.azurewebsites.net/index.html/api/coches";

  componentDidMount() {
    const { idPersonaje } = this.props.params; // obtienes el id del prop enviado

    this.setState({ idPersonaje });

    axios
      .get(`${this.api}/${idPersonaje}`)
      .then((response) => {
        const { nombre, imagen } = response.data;
        this.setState({ nombre, imagen });
        console.log("Datos del personaje cargados correctamente.");
      })
      .catch((error) => {
        console.log("Error al cargar datos:", error.message);
      });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { idPersonaje, nombre, imagen } = this.state;

    const UpdatePersonaje = { idPersonaje, nombre, imagen };

    axios
      .put(`${this.api}/${idPersonaje}`, UpdatePersonaje)
      .then(() => {
        console.log("Personaje actualizado correctamente.");
        this.props.navigate("/personajes"); // navegación con prop
      })
      .catch((error) => {
        console.log("Error al actualizar personaje:", error.message);
      });
  };

  render() {
    const { nombre, imagen } = this.state;

    return (
      <div style={{ margin: "20px" }}>
        <h2>Actualizar Personaje</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={nombre}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label>Imagen:</label>
            <input
              type="text"
              name="imagen"
              value={imagen}
              onChange={this.handleChange}
              required
            />
          </div>

          <button type="submit">Actualizar</button>
        </form>
      </div>
    );
  }
}

export default UpdatePersonajes;
