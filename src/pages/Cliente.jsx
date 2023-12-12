import { useState } from "react";
import "../styles/infoCliente.css";

export default function Cliente() {
  const [cliente, setCliente] = useState({
    nome: "",
    endereco: "",
    telefone: "",
    cpf: "",
    email: "",
  });

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cliente);

    // salvando no localStorage
    localStorage.setItem("cliente", JSON.stringify(cliente))
    console.log(localStorage.getItem("cliente"))
    alert("informações salvas com sucesso!")
  }
  return (
    <div className="infoContainer">
      <div className="row">
        <div className="col-md-5">
          <h6>Informações do Cliente</h6>
          <form>
            <div className="form-group">
              <label
                htmlFor="exampleInputEmail1"
              >
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Nome"
                name="nome"
                value={cliente.nome}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Endereço</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Endereço"
                name="endereco"
                value={cliente.endereco}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Telefone</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Telefone"
                name="telefone"
                value={cliente.telefone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">CPF</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="CPF"
                name="cpf"
                value={cliente.cpf}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">E-mail</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="E-mail"
                name="email"
                value={cliente.email}
                onChange={handleChange}
              />
            </div>
            <button type="button"  onClick={handleSubmit} className="btn btn-primary btnGuardar">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
