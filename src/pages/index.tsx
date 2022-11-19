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
      <div className='mx-auto h-min-[50vh] bg-[#F6F3E3] text-center'>
        <NextImage
          useSkeleton
          className='block mx-auto py-48'
          src='/images/desksides-logo.svg'
          width='600'
          height='100'
          alt='Icon'
        />
        <p className="py-8">PUBLICITY WITHOUT THE PUBLICIST</p>
        <div className='fluid-container font-heading text-md py-16 bg-white'>
          <p>DeskSides is a digital connection hub that helps brands get noticed.</p>
        </div>

        <div className='fluid-container p-8 py-48 font-heading text-white text-6xl bg-brand-charcoal'>
          <p> Introducing brands to journalists.</p>
        </div>
        <div className='fluid-container p-16'>
          <p className='py-4 bold'> HOW IT WORKS</p>
          <p className='font-bold text-4xl max-w-lg text-center mx-auto font-heading leading-relaxed'>Our platform matches qualified journalists directly to small businesses at the click of a button.</p>
        </div>

        <div className="columns-2 flex min-h-fit text-left" >
          <div className='bg-brand-red text-white w-1/2 p-16'>
            <p className='bold font-heading py-4 text-6xl text-brand-yellow'> brands</p>
            <p className='py-4'>Make your own impressions.</p>
            <p className='bold text-xs'> Tell us about your business, and for 10% of the price of a PR agency, we’ll connect you with journalists who are excited to write about it. Get the exposure and access you’re looking for, without the stress and high costs of the traditional “desk” meeting.</p>
          </div>

          <div className='bg-brand-purple text-white w-1/2 p-16 '>
            <p className=' bolder font-heading py-4 text-6xl text-brand-light-purple'> journalists</p>
            <p className='py-4'>Your beats made better.</p>
            <p className='bold text-xs'> Enter your credentials and previous work experience to get connected with the businesses you want to write about. Filter relevant pitches, scout niche stories, schedule interviews, and quickly locate brand assets all on an easy-to-access dashboard. Plus, get paid for the time you spend meeting with brands.</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
