

export const enviromentComponents = (element) => {

    console.log(import.meta.env)
    const html = `
        variables
    `;

    element.innerHTML = html;

}