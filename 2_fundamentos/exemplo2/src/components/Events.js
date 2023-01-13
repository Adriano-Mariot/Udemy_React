//componentes de eventos
const Events = () => { 

    const handleMyEvent = (e) =>{
        console.log(e)
        console.log("Meu evento");
    }

    const renderSomething = (x) =>{
        if (x) {
            return <h1> Render isso !</h1>
        } else {
            return <h1> Também posso rendenizar isso !</h1>
        }
    }
    return( 
        <div>
            <div> {/*  exemplo de handleEvente */}
                <button onClick = {handleMyEvent}>Clique Aqui - 1!</button>
            </div>

            <div> {/*  exemplo de função no evento */}
                <button onClick = {() => console.log("Função - Fui clicado ")}> Clique aqui - 2!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
}

export default Events; 