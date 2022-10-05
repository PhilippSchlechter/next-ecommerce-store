import { css } from '@emotion/react';
import { useState } from 'react';

const cookieStyles = css`
  border: 1px solid #fff;
  padding: 10px;
`;

export default function CookieBanner() {
  const [isBannerOpen, setBannerOpen] = useState(true);

  return (
    <div css={cookieStyles}>
      <span>Please accept our cookie policy, thank you very much</span>
      <button>yeah</button>
    </div>
  );
}
