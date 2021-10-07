import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Prelouder from './../../components/common/Prelouder';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import ProfileForm from './ProfileForm/ProfileForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, saveProfile, invalidUrl, ...props }) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Prelouder />
    }

    const onAddFile = (e) => {
        if (e.target.files.length) {
            props.uploadPhoto(e.target.files[0]);
        }
    }

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deativateEditMode = (e) => {
        saveProfile(e);
        setEditMode(false);
    }

    let cancelSending = () => {
        setEditMode(false);
    }

    return (
        <div>
            <div>
                <img src={profile.photos.large} className={s.photo} alt='user ava' />
            </div>

            <div>
                {isOwner && <input type={'file'} onChange={onAddFile} />}
            </div>

            <div className={s.descriptionBlock}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

                {!editMode ?
                    <ProfileData profile={profile} isOwner={isOwner} editModeTrue={activateEditMode} />
                    : <ProfileForm profile={profile} editModeFalse={deativateEditMode} cancelSending={cancelSending} />}
            </div>
            <div>{invalidUrl ? <div className={s.invalidUrl}> {invalidUrl} </div> : undefined}</div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, editModeTrue }) => {
    return (
        <div>
            <div className={s.personal}>Personal information</div>
            <div> Full name: {profile.fullName} </div>
            <div> About me: {profile.aboutMe} </div>
            <div> My skills: {profile.lookingForAJobDescription} </div>
            <div> Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'} </div>
            <ProfileContacts profile={profile} />
            {isOwner && <button onClick={editModeTrue}>Edit</button>}
        </div>
    )
}

const ProfileContacts = ({ profile }) => {
    return (
        <div className={s.profileContacts}>
            <div className={s.profileContactsTitle}> Contacts: </div>
            {Object.keys(profile.contacts).map(k => {
                return <div key={k.toString()} className={s.contact}> {k}: {profile.contacts[k]} </div>
            })}
        </div>
    )
}

export default ProfileInfo;