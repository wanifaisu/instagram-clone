import React from 'react';

const Footer = () => {
  const date = new Date();
  return (
    <footer className='text-center p-3 font-thin max-w-4xl md:text-sm text-xs mx-auto text-gray-700 w-full'>
      <div className='px-3'>
        <div className='w-full '>
          <div className='flex items-center flex-wrap justify-between w-full mb-3'>
            <div className=''>
              <a rel='nofollow' target='_blank'>
                <div className=''>Privacy</div>
              </a>
            </div>

            <div className=''>
              <a rel='nofollow' target='_blank'>
                <div className=''>Top Accounts</div>
              </a>
            </div>
            <div className=''>
              <a rel='nofollow' target='_blank'>
                <div className=''>Hashtags</div>
              </a>
            </div>
          </div>
        </div>
        <div className='text-sm'>
          <div className=''>
            <div className=''>
              <span className='font-semibold'>&copy; {date.getFullYear()}</span>{' '}
              Instagram Firebase by{' '}
              <a
                target={'_blank'}
                rel='nofollow noopener noreferrer'
                className='font-semibold'
              >
                faisal ashraf wani
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
