const TemplateExpression = () => {

    const nome = "Adriano ";
    const data ={
        age:37,
        job:" CIVIL ENG"
    };
    return(
        <div>
            <h3> Olá {nome}, Bem vindo ao React !</h3>
            <p> Profissão {data.job}</p>
        </div>
        );

};
export default TemplateExpression