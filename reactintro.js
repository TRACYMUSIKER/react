
// Description of what we want page to look like

// let page = {
//     element: 'div', 
//     children: [
//         {
//             element: 'h1', 
//             children: ['Bookstore'], 
//             props: {
//                 className: 'big-header'
//             }
//         }, 
//         {
//             element: 'ul', children: [
//                 {element 'li', children: ['Book 1']},
//                 {element 'li', children: ['Book 1']},
//                 {element 'li', children: ['Book 1']},
//             ]
//         }
//     {  element: 'footer', children: ['Copyright 2018']
//     }
//     {
//         element: 'a',
//         children: ['My Website'],
//         props: {
//             href: 'mypage.com'
//         }
//     }
// }
let h = React.createElement;

let BookRow = (bookTitle) => 
    h('li', {}, bookTitle);


let vdom = 
    h('div', {}, [
        h('h1', {classNAme: 'bigheader'}, ['Bookstore']),
        h('ul', {}, [
            BookRow('Book 1'),
            BookRow('Book 2'),
            BookRow('Book 3'),
            // h('li', {}, ['Book1']),
            // h('li', {}, ['book 2']),
            // h('li', {}, ['Book 3']),
        ]),
        h('footer', {}, ['Copyright 2018']),
        h('a', { href: 'mypage.com'}, ['My Website'])
    ]
    );


REACTDOM.render(vdom, document.querySelector('.react-root'))

// let createElement = (element, props, children) => {
//     // return {
//     //     element: element,
//     //     children: children, 
//     //     props: props
//     return {element, children, prps}
//     };
// }

let h = React.createElement;

let blogs = [
    {author: 'Jim Smith',  'body': 'this is blog #1'},
    {author: 'Tom', 'body':'this is blog #2'},
    {author: 'Eartha Kitt', 'body': 'this is blog #3'}
]

/* 
let BlogPost = {
    title: 'Welcome to the Ethernet',
    author: 'The Great Unknown',
    content: 'The answer is never 42.',
    date: new Date(),
    tags: ['humor', 'tech', 'sci-fi']
}


let BlogRow = () => {
    return h('li', {}, [
    ])
}


Props is an objct so need to put it into props.title - 
referencing how we put it into  as key in 
BookList 

MUST BE AN OBJECT

let BookRow = (props) =>
h('li', {}, [
    h('h2', {}, props.title),
    h('button', {}, 'Delete Me!'),
    h('p', {}, 'Lorem ipsum!')
])
])

let BookList = (books) => {
    return h('ul', {}, 
    props.books.map(bookTitle =>
        h(Bookrow, {title: bookTitle} )
    )
    );
};

let vdom = 
    h('div', {}, [
        h('h1', {classNAme: 'bigheader'}, ['Bookstore']),
        h('ul', {}, [
            BookRow('Book 1'),
            BookRow('Book 2'),
            BookRow('Book 3'),
        ]),
        h('footer', {}, ['Copyright 2018']),
        h('a', { href: 'mypage.com'}, ['My Website'])
    ]
    );




REACTDOM.render(vdom, document.querySelector('.react-root'))
BlogPostRow(blogPost);
Component (model) => view

*/