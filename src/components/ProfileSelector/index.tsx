'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { profiles } from '@/lib/constants/profiles';
import InputToggle from '../InputToggle';
import * as styles from './\bProfileSelector.css';
import Button from '../Button';
import React from 'react';

interface ProfileSelectorProps {
  value: string | null;
  onChange: (id: string) => void;
}

const ProfileSelector = ({ value, onChange }: ProfileSelectorProps) => {
  const handleSelect = (id: string) => {
    onChange(id);
  };

  const handleRandom = () => {
    const random = profiles[Math.floor(Math.random() * profiles.length)].id;
    handleSelect(random);
  };

  const selectedProfile = useMemo(() => profiles.find((p) => p.id === value), [value]);

  return (
    <div className={styles.container}>
      {selectedProfile && (
        <div className={styles.selectedProfileBox}>
          <Image
            src={selectedProfile.imageUrl}
            alt={selectedProfile.name}
            width={140}
            height={140}
            className={styles.mainImage}
          />
          <Button className={styles.randomButton} colorFill="mint" onClick={handleRandom}>
            랜덤 선택
          </Button>
          <div className={styles.name}>{selectedProfile.name}</div>
          <div className={styles.description}>{selectedProfile.description}</div>
          <div className={styles.quote}>{selectedProfile.quote}</div>
        </div>
      )}
      <div className={styles.thumbnailList}>
        <InputToggle direction="row">
          {profiles.map((profile) => (
            <InputToggle.Input
              type="radio"
              name="profile"
              key={profile.id}
              className={styles.thumbnailCard}
              onChange={() => handleSelect(profile.id)}
              checked={value === profile.id}
              required
              hidden
            >
              <Image
                src={profile.imageUrl}
                alt={profile.name}
                width={72}
                height={72}
                className={styles.thumbnailImage}
              />
            </InputToggle.Input>
          ))}
        </InputToggle>
      </div>
    </div>
  );
};

export default React.memo(ProfileSelector);
