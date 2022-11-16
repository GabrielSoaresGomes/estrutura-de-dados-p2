import {Navigate} from "react-router-dom";
import {useState, useEffect} from "react";

const Error404 = () => {

    const [contagem, setContagem] = useState(3)

    const contagemRedirecionamento = () => {

        // for (contagem; contagem > -1; setContagem(contagem-1)) {
        //     const next = contagem - 1
        //     setContagem(next);
        // }
    };

    useEffect(() => {
        contagemRedirecionamento();
    }, [])


    return (
        <div>
            <h1>Página não encontrada!</h1>
            <h2>Redirecionando para Home em {contagem}s</h2>
        </div>
    )
}

export default Error404