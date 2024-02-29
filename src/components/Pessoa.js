function Pessoa(props) {
    return (
        <>
        <div>
            <img src="https://via.placeholder.com/150" alt="Minha Imegem" />
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissao: {props.profissoa}</p>
        </div>
        </>
    )
}

export default Pessoa