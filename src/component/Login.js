import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        const { prChange, prSubmit } = this.props;

        return (
            <div>
                <form>
                    <input type="text" onChange={prChange('username')}></input><br/>
                    <input type="password" onChange={prChange('password')}></input><br/>
                    <button type="button" onClick={prSubmit()}>Submit</button>
                </form>
            </div>
        )
    }
}
