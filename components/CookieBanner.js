import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const cookieStyles = (isOpen) => css`
  padding: 10px;
  transition: all 0.3s ease-in-out;
  height: 20px;

  ${!isOpen &&
  css`
    height: 0;
    padding: 0;
    overflow: hidden;
  `};
`;
//  state to control the banner
export default function CookieBanner() {
  const [bannerOpen, setBannerOpen] = useState(true);

  // useEffect for Frontend & store inside local storage
  useEffect(() => {
    const initialValue = getLocalStorage('bannerOpen');
    if (initialValue !== null) {
      setBannerOpen(initialValue);
    }
  }, []);

  return (
    <div css={cookieStyles(bannerOpen)}>
      <span>Please accept our cookies, thank you very much</span>{' '}
      <button
        onClick={() => {
          setBannerOpen(false);
          setLocalStorage('bannerOpen', false);
        }}
      >
        yeah
      </button>
    </div>
  );
}
