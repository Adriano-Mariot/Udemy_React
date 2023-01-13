//importar componente dentro do componente seguindo a hierarquia
import MyComponent from "./MyComponent";

const FirstComponent = () => { // define função 
    return( // define o retorno
        <div>
            <h2> Meu primeiro components </h2>
            <MyComponent/>
        </div>
    );
}

export default FirstComponent; //define exportação