import React from "react";
import MessageField from "../components/MessageField/MessageField";
import Header from "../components/Header";
import ChatList from "../components/ChatList";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class Layout extends React.Component {

    render() {
        return(
            <BrowserRouter>
                <div className="layout">
                    <Header/>
                    <ChatList/>
                    {/*<MessageList />*/}
                    <Switch>
                        <Route path="/chats/" exact component={MessageField} />
                        <Route path="/chats/:id" exact component={MessageField} />
                        <Route path="/about">
                            It's about
                        </Route>
                        <Route path="/home">
                            It's home
                        </Route>
                        <Route path="/">
                            It's 404
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}