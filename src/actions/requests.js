import { codeLeap } from '../connections/codeLeap'

export const getCodeLeap = async (pageNumber) => {
    const response = await codeLeap.get('/')
    console.log(response.data.results)
    return response;
}

export const testeGet = () => {
    fetch('https://dev.codeleap.co.uk/careers/')
        .then(response => response.json())
        .then(data => {
            // Faça algo com os dados obtidos
            console.log(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}