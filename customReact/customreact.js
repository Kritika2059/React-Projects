function customRender(reactElement, container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.childern
   /* domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)*/
    //instead we can apply loop

    for (const prop in reactElement.props) {
        if(prop === 'childern') continue; //no need to do this nowadays
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    childern: 'click here to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)