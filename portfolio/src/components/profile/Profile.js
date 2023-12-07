import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile">
        <header className="profile-header">
          <h1>Emma Baker</h1>
          <h4>👋 I'm a hybrid engineer-journalist.</h4>
        </header>
        <section>
          <p>
          📍 Newsroom Engineering @ The Washington Post
          </p>
          <p>
          🌐 San Francisco, California
          </p>
          <p>
            I build tools that enhance a newsroom's storytelling capacity, deliver forward-thinking solutions that expand the reporting capabilities of journalists and contribute to high-impact investigative and visual editorial projects.
          </p>
          <p>
            I'm interested in data-driven news projects, visual storytelling and building tools for reporters.
          </p>
          <p>
          💌 Reach out to learn more about my background and chat <a href="https://www.linkedin.com/in/emma-baker-aa5355182/">here</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Profile;
