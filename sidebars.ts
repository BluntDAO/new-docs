import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'welcome',
    {
      type: 'category',
      label: '💨 Proof of Sesh Explained',
      items: [
        'proof-of-sesh-explained',
        'proof-of-sesh-explained/voting-in-the-dao',
      ],
    },
    {
      type: 'category',
      label: '🍃 The Unlimited Sesh Fund',
      items: [
        'the-unlimited-sesh-fund',
        'the-unlimited-sesh-fund/bidding-on-the-collection',
        'the-unlimited-sesh-fund/voting-on-proposal',
        'the-unlimited-sesh-fund/putting-in-a-proposal',
        'the-unlimited-sesh-fund/secondary-sales',
        'the-unlimited-sesh-fund/setting-up-an-auction-bot',
        'the-unlimited-sesh-fund/global-sesh-day',
      ],
    },
    'how-to-start-a-sesh',
    'how-to-contribute',
    'ecosystem',
    'addictionary',
  ],
};

export default sidebars;
