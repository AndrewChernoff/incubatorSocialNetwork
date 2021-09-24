import React from "react"

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }

    onStatusChange(e) {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                status: {this.state.editMode === false &&

                    <div onDoubleClick={this.activateMode.bind(this)}>
                        {this.props.status || '---------'}
                    </div>
                }

                {this.state.editMode === true &&
                    <div>
                        <input onChange={this.onStatusChange.bind(this)} autoFocus={true} onBlur={this.deactivateMode.bind(this)} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus