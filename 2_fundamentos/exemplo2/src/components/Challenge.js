//componentes de eventos
const Challenge = () => { 

    const valorA=10;
    const valorB=20;

    
    const handleMyEvent = (e) =>{
        console.log(e)
        console.log(valorA+valorB);

    }
    
    return( 
        <div>
            <h1>-------------------------------------</h1>
            <div>
                <h1>Desafio</h1>
                <p>A={valorA}</p>
                <p>B={valorB}</p>
            </div>
            <div> {/*  exemplo de handleEvente */}
                <button onClick = {handleMyEvent}>Clique Aqui - 1!</button>
            </div>
            <h1>-------------------------------------</h1>

        </div>
    );
}

export default Challenge; 