import * as React from 'react';

import Footer from '@/components/Footer/Footer';
import GuestHeader from '@/components/GuestHeader/GuestHeader';
import NextImage from '@/components/NextImage';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <GuestHeader></GuestHeader>
      <div className='h-min-[50vh] mx-auto bg-[#F6F3E3] text-center'>
        <NextImage
          useSkeleton
          className='mx-auto block py-48'
          src='/images/desksides-logo.svg'
          width='600'
          height='100'
          alt='Icon'
        />
        <p className='py-8'>PUBLICITY WITHOUT THE PUBLICIST</p>
        <div className='fluid-container bg-white py-16 font-heading text-md'>
          <p>
            DeskSides is a digital connection hub that helps brands get noticed.
          </p>
        </div>

        <div className='fluid-container bg-brand-charcoal p-8 py-48 font-heading text-6xl text-white'>
          <p> Introducing brands to journalists.</p>
        </div>
        <div className='fluid-container p-16'>
          <p className='bold py-4'> HOW IT WORKS</p>
          <p className='mx-auto max-w-lg text-center font-heading text-4xl font-bold leading-relaxed'>
            Our platform matches qualified journalists directly to small
            businesses at the click of a button.
          </p>
        </div>

        <div className='flex min-h-fit columns-2 text-left'>
          <div className='w-1/2 bg-brand-red p-16 text-white'>
            <p className='bold py-4 font-heading text-6xl text-brand-yellow'>
              {' '}
              brands
            </p>
            <p className='py-4'>Make your own impressions.</p>
            <p className='bold text-xs'>
              {' '}
              Tell us about your business, and for 10% of the price of a PR
              agency, we’ll connect you with journalists who are excited to
              write about it. Get the exposure and access you’re looking for,
              without the stress and high costs of the traditional “desk”
              meeting.
            </p>
          </div>

          <div className='w-1/2 bg-brand-purple p-16 text-white '>
            <p className=' bolder py-4 font-heading text-6xl text-brand-light-purple'>
              {' '}
              journalists
            </p>
            <p className='py-4'>Your beats made better.</p>
            <p className='bold text-xs'>
              {' '}
              Enter your credentials and previous work experience to get
              connected with the businesses you want to write about. Filter
              relevant pitches, scout niche stories, schedule interviews, and
              quickly locate brand assets all on an easy-to-access dashboard.
              Plus, get paid for the time you spend meeting with brands.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
