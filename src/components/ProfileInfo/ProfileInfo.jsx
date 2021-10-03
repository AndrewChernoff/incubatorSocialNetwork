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
        debugger
        let profileData = {
            fullName: e.fullName,
            aboutMe: e.aboutMe,
            lookingForAJobDescription: e.lookingForAJobDescription,
            lookingForAJob: e.lookingForAJob,
            contacts: {
                facebook: e.contacts.facebook,
                github: e.contacts.github,
                mainLink: e.contacts.mainLink,
                twitter: e.contacts.twitter,
                vk: e.contacts.vk,
                website: e.contacts.website,
                youtube: e.contacts.youtube
            }
        }
        saveProfile(profileData);
        setEditMode(false);
    }
    debugger
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
                    : <ProfileForm profile={profile} editModeFalse={deativateEditMode} />}
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
            <div className={s.profileContactsTitle}> Profile contacts: </div>
            {Object.keys(profile.contacts).map(key => {
                return <div key={key.id} className={s.contact}> {key}: {profile.contacts[key]} </div>
            })}
        </div>
    )
}

export default ProfileInfo;