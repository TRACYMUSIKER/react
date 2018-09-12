

let h = React.createElement;

const blogs = [
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


let BlogRow = (props) => 
    h('li', {
        className: 'blog'
        }, 
        [h(BlogTitle, {
            title: props.blog.title}), 
        h(BlogAuthor, {author: props.blog.author}),
        h(BlogBody, {body: props.blog.body}),
        h('button', { 
            onClick: () => props.deletePost(props.blog), 
            }, 'Delete Me!'),
        h('button', { 
            onClick: () => props.snakeify(props.blog)
        }, 'Change title'),
    ]);



let AllBlogs = (props) => h('ul', {}, 
    props.blogs.map((blog, i) => 
        h(BlogRow, { deletePost: props.deletePost, snakeify: props.snakeify, blog, key: i })
    )
);

class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        blogs: blogs
      };
    }
  
    render() {
        let deletePost = (props) => {
            console.log(props.id);
            this.setState({
            blogs: this.state.blogs.filter(book => book.id !== props.id)
            })   
        }
        let snakeify = (props) => {
            this.setState({ 
                blogs: this.state.blogs.map(book =>  
                (book.id === props.id) ?
                    Object.assign({}, book, { title: book.title + 's' })
                    :
                    book
                )
            }) 
        }
        return h('div', {}, [
            h('h1', {}, ['All Blogs']),
            h(AllBlogs, { blogs: this.state.blogs, deletePost: deletePost, snakeify: snakeify })
        ]);
    }
  }


ReactDOM.render(h(HomePage, {blogs}), document.querySelector('.react-root'));

