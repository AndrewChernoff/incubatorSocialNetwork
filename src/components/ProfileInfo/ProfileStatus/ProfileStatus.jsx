import React from "react"

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateMode() {
        this.setState({
            editMode: false
        })
    }

    render() {

        return (
            <div>
                status: {this.state.editMode === false &&

                    <div onDoubleClick={this.activateMode.bind(this)}>
                        {this.props.status}
                    </div>
                }

                {this.state.editMode === true &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateMode.bind(this)} value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus