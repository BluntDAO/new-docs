import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '💨 Proof of Sesh',
    image: '/img/homepage-roll-up.png',
    description: (
      <>
        The IRL onboarding consensus mechanism that powers BluntDAO. Learn how to get smoked in and become an OG Validator.
      </>
    ),
    link: '/docs/proof-of-sesh-explained',
  },
  {
    title: '🍃 Unlimited Sesh Fund',
    image: '/img/homepage-burn.png',
    description: (
      <>
        Daily NFT auctions funding IRL seshes. Bid on OUNCEs, vote on proposals, and help fund the next million smokers.
      </>
    ),
    link: '/docs/the-unlimited-sesh-fund',
  },
  {
    title: '🎉 Start a Sesh',
    image: '/img/homepage-validation.png',
    description: (
      <>
        Ready to onboard the next million? Learn how to start your own sesh and bring people into the BluntDAO community.
      </>
    ),
    link: '/docs/how-to-start-a-sesh',
  },
];

function Feature({title, image, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.featureLink}>
        <div className="text--center">
          <img src={image} alt={title} className={styles.featureImage} />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
