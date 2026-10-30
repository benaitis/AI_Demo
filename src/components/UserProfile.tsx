import React, { useEffect, useState } from 'react';

interface UserProfileProps {
  className?: string;
}

const SAMPLE_NAMES = [
  'Alex Johnson',
  'Sam Smith',
  'Jordan Brown',
  'Casey Davis',
  'Riley Wilson',
  'Morgan Taylor',
  'Quinn Anderson',
  'Avery Martinez',
  'Blake Thompson',
  'Dakota Garcia',
];

export const UserProfile: React.FC<UserProfileProps> = ({ className = '' }) => {
  const [randomName, setRandomName] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const name = SAMPLE_NAMES[Math.floor(Math.random() * SAMPLE_NAMES.length)];
    setRandomName(name);

    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className={`flex items-center gap-4 rounded-lg bg-white p-6 shadow-md ${className}`}>
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-2xl font-bold text-white">
        {randomName.charAt(0)}
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold text-gray-800">{randomName}</h2>
        <p className="text-sm text-gray-500">{currentDate}</p>
      </div>
    </div>
  );
};
