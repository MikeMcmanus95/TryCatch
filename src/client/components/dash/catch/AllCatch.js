import React, { Component } from 'react'
import { SingleCatch } from '../../index'
import { connect } from 'react-redux'
import { getChatsThunk } from '../../../store/reducers/chat'

class AllCatch extends Component {

  componentDidMount() {
    this.props.getChatsThunk()
  }

  render() {
    const { chats } = this.props

    return (
      <section className="section">
        <div className="container catch-padding">
          <h1 className="title is-1">Catch</h1>
          <hr/>
          { chats.map(chat => {
            return( <SingleCatch key={chat.chatId} chat={chat}/>)
          })}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    chats: state.chat.chats,
    user: state.firebase.profile,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getChatsThunk: () => { dispatch(getChatsThunk()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCatch)
