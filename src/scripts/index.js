// const {createElement} = React
// const {render} = ReactDOM
//
// const style ={
//     backgroundColor:'orange',
//     color: 'white',
//     fontFamily: 'verdana'
// }
//
// const title = createElement(
//     'h1', {id: 'title', className: 'header', style: style},
//     'Hello World'
// )
//
// render(title, document.getElementById('react-container'))


const {render} = ReactDOM

render(
    <h1 id='title'
        className='header'
        style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
        HEY WORLD!!! New
    </h1>,
    document.getElementById('react-container')
)