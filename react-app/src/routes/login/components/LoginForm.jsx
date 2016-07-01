import React, {Component} from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class componentName extends Component {
    handleClick() {
        let user = {
            name: this.refs.name.input.value,
            pwd: this.refs.pwd.input.value
        };
        this.props.postLogin(user);
    };

    render() {
        return (
            <div>
                <Card>
                    <CardHeader title="Login" />
                    <CardText>
                        <div>
                            <TextField
                                floatingLabelText="UserName"
                                ref="name"
                                />
                        </div>
                        <div>
                            <TextField
                                floatingLabelText="Password"
                                type="password"
                                ref="pwd"
                                />
                        </div>
                        <div>
                            <FlatButton
                                label="Login"
                                primary={true}
                                onClick={(event) => { this.handleClick() } }
                                />
                        </div>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default componentName;