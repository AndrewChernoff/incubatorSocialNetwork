import React from 'react';
import s from './ProfileInfo.module.css';
import Prelouder from './../../components/common/Prelouder';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, ...props }) => {
    if (!profile) {
        return <Prelouder />
    }

    const onAddFile = (e) => {
        if (e.target.files.length) {
            props.uploadPhoto(e.target.files[0]);
        }
    }

    debugger

    return (
        <div>
            <div>
                <img src={profile.photos.large} style={{ width: 200 }} alt='user ava' />
            </div>

            <div>
                {isOwner && <input type={'file'} onChange={onAddFile} />}
            </div>

            <div className={s.descriptionBlock}>

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

                <ProfileData profile={profile} />

            </div>
        </div>
    )
}

const ProfileData = ({ profile }) => {
  return  <ProfileContacts profile={profile} />
}

const ProfileContacts = ({ profile }) => {
    return (
        <div>
            <div> Full name: {profile.fullName} </div>
            <div> My skills: {profile.lookingForAJobDescription} </div>
            <div> Looking for a job: {profile.lookingForAJob} </div>
            Profile contacts:
            {Object.keys(profile.contacts).map(key => {
                return <div key={key.id}> {key}: {profile.contacts[key]} </div>
            })}
        </div>
    )
}

export default ProfileInfo;