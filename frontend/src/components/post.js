import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts, deleteContact } from '../actions/postActions'
//import { NEW_POST } from '../actions/types';
import PostForm from './postForm'

const Pagination = ({changePage}) =>{

  return (
    <div>
      <button onClick= {()=> changePage(0)}>1</button>
      <button onClick= {()=> changePage(1)}>2</button>
      <button onClick= {()=> changePage(2)}>3</button>
      <button onClick= {()=> changePage(3)}>4</button>
      <button onClick= {()=> changePage(4)}>5</button>
    </div>
  )
};

class post extends Component {
  constructor(props){
    super(props)
    this.deleteContacts = this.deleteContacts.bind(this)
    this.postformElement = React.createRef()
    this.state = {
      page: '0',
      limit: '10',
      numUsers: '50',
      formList: []
    };
  }

  componentWillMount(){
    this.loadContacts()
  }

  loadContacts = () =>{
    this.props.fetchPosts(this.state.page, this.state.limit);
  }

  /*
  componentWillReceiveProps(nextProps){
    if(nextProps){
      this.props.fetchPosts();
    }
  }*/

  //onClick= {this.setDataToForm(post)}
  setDataToForm(post){
    console.log(post._id)
  }

  deleteContacts(id){
    console.log(id)
    this.props.deleteContact(id)
    this.loadContacts()
  }

  modifyContacts = (post) =>{
    //changeState(post)componentWillMount
    //console.log(post)
    this.setState({
      formList: [post._id, post.name,post.lastName, post.company
      , post.phoneNumber, post.email]
    },this.loadContacts)
  }

  modifyCurrentPage = pageNumber => {
    this.setState({
      page: pageNumber
    }, this.loadContacts)
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key = {post._id} >
        <h3>Name:     {post.name}</h3>
        <p>LastName: {post.lastName}</p>
        <p>Company:   {post.company}</p>
        <p>Phone Num: {post.phoneNumber}</p>
        <p>E-Mail:    {post.email}</p>
        <br/>
        <button onClick = {() =>{
          this.deleteContacts(post._id)
        }} className = "btn btn-danger">
          DELETE </button>
        <button onClick = {() =>{
          this.modifyContacts(post)
        }} className = "btn">
          Click twice to modify </button>
        <hr/>
      </div>
    ));
    return (
      <div>
        <PostForm formList = {this.state.formList}/>
        <h1>List</h1>
        <hr/>
        <Pagination changePage={this.modifyCurrentPage}/>
        <br/>
        { postItems }
        <br/>
        <Pagination/>
      </div>
    )
  }
}

post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  //this is what is inside the index combineReducers()
  posts: state.posts.items ,
  newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts, deleteContact})(post);
