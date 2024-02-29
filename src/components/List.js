import Item from "./Item";

function List() {
    return (
        <>
        <div>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat"  ano_lancamento={1980}/>
                <Item marca="Renault"   ano_lancamento={1990}/>
                <Item marca="Chevrolet"   ano_lancamento={2000}/>
                <Item />
            </ul>
        </div>
        </>
    )
}

export default List