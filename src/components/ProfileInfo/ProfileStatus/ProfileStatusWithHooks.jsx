import React, { useEffect, useState } from "react"

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    let activateMode = () => {
        setEditMode(true);
    }

    let deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            Status: {editMode === false &&

                <span onDoubleClick={activateMode}>
                    {props.status || '---------'}
                </span>
            }

            {editMode === true &&
                <span>
                    <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateMode} value={status} />
                </span>
            }
        </div>
    )

}

export default ProfileStatusWithHooks