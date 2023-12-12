// state como parâmetro
export default function InfoCliente(infoCliente, setInfoCliente) {
  return (
    <div>
      <form>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
          />
      </form>
    </div>
  );
}
