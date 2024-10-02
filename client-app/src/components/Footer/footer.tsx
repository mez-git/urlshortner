import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className='bg-slate-900 text-white text-base text-center'>
        copyright &#169; URLShortner | Mishra
    </div>
  );
};

export default Footer;
