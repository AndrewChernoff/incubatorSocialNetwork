import { Form } from "react-final-form"
import { Input, profileDataForm, Textarea } from "../../../Validate/FormsControl"
import s from './../ProfileInfo.module.css';

const ProfileForm = ({ editModeFalse, profile }) => {
    debugger
    return (
        <div>
            <Form
                onSubmit={editModeFalse}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        {/* <div className={s.formInfo}>
                            <div> Full name: {createForm(null, 'Full name', 'fullName', Input, null, 'text')} </div>
                            <div> About me: {createForm(null, 'About me', 'aboutMe', Textarea, null, 'text')} </div>
                            <div> My skills: {createForm(null, 'My skills', 'lookingForAJobDescription', Textarea, null, 'text')} </div>
                            <div> Looking for a job: {createForm(null, null, 'lookingForAJob', Input, null, 'checkbox')} </div>
                        </div> */}
                        <div className={s.formInfo}>
                            <div> Full name: {profileDataForm(null, 'Full name', 'fullName', Input, null, 'text', profile.fullName)} </div>
                            <div> About me: {profileDataForm(null, 'About me', 'aboutMe', Textarea, null, 'text', profile.aboutMe)} </div>
                            <div> My skills: {profileDataForm(null, 'My skills', 'lookingForAJobDescription', Textarea, null, 'text', profile.lookingForAJobDescription)} </div>
                            <div> Looking for a job: {profileDataForm(null, null, 'lookingForAJob', Input, null, 'checkbox')} </div>
                        </div>
                        {/*<ProfileContacts profile={profile} />*/}

                        <div> Profile contacts:</div>
                        <div> {Object.keys(profile.contacts).map(key => {
                            return <div className={s.contact}> <span className={s.contactKey}> {key} </span>: {profileDataForm(null, key, 'contacts.' + key, Input, null, 'text', profile.contacts[key])} </div>
                        })} </div>

                        <button>Submit</button>
                    </form>
                )} />
        </div>
    )
}

export default ProfileForm