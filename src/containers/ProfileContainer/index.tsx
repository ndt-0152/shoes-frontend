import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import CameraIcon from '../../components/Icon/CameraIcon';
import LayoutPages from '../../components/LayoutPages';
import Orders from '../../components/Orders';
import ProfileTabs from '../../components/ProfileTabs';
import { profileSelector } from '../../redux/auth/selectors';

export interface IProfileContainer {}

export const ProfileContainer: React.FC<IProfileContainer> = React.memo(() => {
  const [image, setImage] = useState<File | undefined>();
  const profile = useSelector(profileSelector);
  const cameraRef: React.MutableRefObject<any> = useRef();
  const onClickCamera = () => {
    cameraRef.current.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setImage(e.target.files?.[0]);
  };

  return (
    <LayoutPages>
      <div className="container mt-lg-5 mt-3">
        <div className="row align-items-start">
          <div className="col-lg-4 p-0 shadow ">
            <div className="author-card pb-0 pb-md-3">
              <div className="author-card-cover"></div>
              <div className="author-card-profile row">
                <div className="author-card-avatar col-md-5">
                  <img
                    src="https://thumbs.dreamstime.com/z/man-head-avatar-beautiful-human-face-male-cartoon-character-portrait-vector-illustration-182214100.jpg"
                    alt="userprofileimage"
                  />
                  <CameraIcon
                    width={24}
                    height={24}
                    style={{ cursor: 'pointer', marginLeft: -20 }}
                    onClick={onClickCamera}
                  />
                </div>
                <div className="author-card-details col-md-7">
                  <h5 className="author-card-name mb-2">
                    <strong>{`${profile?.firstName} ${profile?.lastName}`}</strong>
                  </h5>
                  <span className="author-card-position">
                    <>Joined yesterday</>
                  </span>
                </div>
              </div>
            </div>
            <div className="wizard pt-3 ">
              <div className="d-flex align-items-start">
                <div
                  className="nav align-items-start flex-column col-12 nav-pills me-3 "
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Profile Settings
                  </button>
                  <button
                    className="nav-link d-flex justify-content-between"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Orders List
                    <span className="badge2">3</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* panels */}
          <div
            className="tab-content col-lg-8 pb-5 pt-lg-0 pt-3"
            id="v-pills-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <ProfileTabs urlUpload={image} profile={profile} />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <Orders />
            </div>
          </div>
        </div>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={cameraRef}
        hidden
        onChange={handleChange}
      />
    </LayoutPages>
  );
});

export default ProfileContainer;
