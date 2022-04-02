import React from 'react';

export interface IProfileTabs {
  urlUpload?: File;
}

export const ProfileTabs: React.FC<IProfileTabs> = React.memo(
  ({ urlUpload }) => {
    const handleUploadFirebase = () => {};

    return (
      <>
        <div onClick={handleUploadFirebase}>upload</div>
        <form className="row  form-container">
          <div className="col-md-6">
            <div className="form">
              <label htmlFor="account-fn">UserName</label>
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form">
              <label htmlFor="account-email">E-mail Address</label>
              <input className="form-control" type="email" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form">
              <label htmlFor="account-pass">New Password</label>
              <input className="form-control" type="password" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form">
              <label htmlFor="account-confirm-pass">Confirm Password</label>
              <input className="form-control" type="password" />
            </div>
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </>
    );
  },
);

export default ProfileTabs;