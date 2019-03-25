import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost, modifyPost } from '../actions/postActions'


class postForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            lName: '',
            company: '',
            phone: '',
            mail: ''
        };
        console.log("when does this happens?")
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onModify = this.onModify.bind(this);
        //this.updateState = this.updateState.bind(this);
    }
   
    
    componentWillReceiveProps(nextProps){

            console.log(this.props)
            console.log(this.nextProps)
            this.setState(() => { 
                return{
                    id: this.props.formList[0],
                    name: this.props.formList[1],
                    lName: this.props.formList[2],
                    company: this.props.formList[3],
                    phone: this.props.formList[4],
                    mail: this.props.formList[5]
                }
            })
            /*
            this.setState({
                name: name
            })*/
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            name: this.state.name,
            lastName: this.state.lName,
            company: this.state.company,
            phoneNumber: this.state.phone,
            email: this.state.mail
        }
        //Call action
        this.props.createPost(post)
    }

    onModify = () => {
        //add modify code here
        console.log("does this modifies?")
        const post = {
            name: this.state.name,
            lastName: this.state.lName,
            company: this.state.company,
            phoneNumber: this.state.phone,
            email: this.state.mail
        }
        //Call action
        this.props.modifyPost(this.state.id, post)
    }

    onDelete = () => {
        //add delete code here
        console.log("does this deletes?")
    }
  
    render() {
    return (
      <div>
          <h1> contacts app </h1>
          <form onSubmit={this.onSubmit}>
                <div>
                    <label>name:</label>
                    <br/>
                    <input type = "text" name = "name" onChange={this.onChange}
                    value = {this.state.name || ''} />
                </div>
                <br/>
                <div>
                    <label>lastName:</label>
                    <br/>
                    <input type = "text" name = "lName" onChange={this.onChange}
                    value = {this.state.lName || ''} />
                </div>
                <br/>
                <div>
                    <label>company:</label>
                    <br/>
                    <input type = "text" name = "company" onChange={this.onChange}
                    value = {this.state.company || ''} />
                </div>
                <br/>
                <div>
                    <label>phone:</label>
                    <br/>
                    <input type = "text" name = "phone" onChange={this.onChange}
                    value = {this.state.phone || ''} />
                </div>
                <br/>
                <div>
                    <label>email:</label>
                    <br />
                    <input type = "text" name = "mail" onChange={this.onChange}
                    value = {this.state.mail || ''} />
                </div>
                <br/>
                <button type='submit' value="submit">submit</button>
                <button type='button' value="modify" onClick={this.onModify}>
                    modify</button>
          </form>
      </div>
    )
  }
}

postForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

/*
const mapDispatchToProps = (dispatch) => {
    return {
        deleteContact: index =>dispatch(deleteContact(index))
    }
};*/
const changeState = (post) => {
    /*
    postForm.setState({
        id: post._id,
        name: post.name,
        lName: post.lastName,
        company: post.company,
        phone: post.phoneNumber,
        mail: post.email
    })*/
    postForm.updateState()
    console.log(post)
}

export default connect(null, { createPost , modifyPost})(postForm)
export {changeState}
