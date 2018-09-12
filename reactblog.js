

let h = React.createElement;

let blogs = [
    {id: 1, author: 'Jim Smith',  'body': 'this is blog #1', title: 'blog1'},
    {id: 2, author: 'Tom', 'body':'this is blog #2', title: 'blog2'},
    {id: 3, author: 'Eartha Kitt', 'body': 'this is blog #3', title: 'blog3'}
]



let BlogAuthor = (props) => 
    h('h5', { className: 'author' }, props.author);

let BlogBody = (props) => 
    h('h5', { className: 'body' }, props.body);

let BlogTitle = (props) => 
    h('h2', { className: 'title' }, props.title);

let deletePost = (props) => {
    console.log(props.id);
    blogs = blogs.filter(book => book.id !== props.id)
    rerender();
}

let snakeify = (props) => {
    let newBlogs = blogs.map(book => { 
        if (book.id === props.id){
            return Object.assign({}, book, { title: book.title + 's' })
        } else {
            return book
        }
    }) 
    blogs = newBlogs;
    rerender();
}


let BlogRow = (props) => 
    h('li', {
        className: 'blog'
        }, 
        [h(BlogTitle, {
            title: props.blog.title}), 
        h(BlogAuthor, {author: props.blog.author}),
        h(BlogBody, {body: props.blog.body}),
        h('button', { 
            onClick: () => deletePost(props.blog), 
            }, 'Delete Me!'),
        h('button', { 
            onClick: () => snakeify(props.blog)
        }, 'Change title'),
    ]);



let AllBlogs = (props) => h('ul', {}, 
    props.blogs.map((blog, i) => 
        h(BlogRow, {blog, key: i})
    )
);

let CreateBlogs = (props) => 
    h('div', {}, [
        h('h1', {}, ['All Blogs']),
        h(AllBlogs, props)
    ]);



let rerender = () => ReactDOM.render(h(CreateBlogs, {blogs}), document.querySelector('.react-root'));

rerender();