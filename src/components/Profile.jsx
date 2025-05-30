import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfileName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProfileBio = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const FollowButton = styled.button`
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function ProfileCard() {

  return (
            <ProfileCardContainer>
              <ProfilePicture />
              <ProfileName>"Peter"</ProfileName>
              <ProfileBio>"God's favorite son"</ProfileBio>
            </ProfileCardContainer>

  );
}

export default ProfileCard;
