import { link } from 'fs'
import firebase from '../services/firebase'

const Footer = (): JSX.Element => {
  const footerClick = (linkName: string) => () => {
    firebase.analytics().logEvent('footer_link_click', { name: linkName })
  }
  return (
    <div className='mt-32 text-center py-8'>
      Event organized by{' '}
      <a href='//www.acmutd.co/' className='text-fuschia' onClick={footerClick('acm_site')}>
        ACM UTD
      </a>
      . Site developed by{' '}
      <a
        href='//github.com/acmutd/Development'
        className='text-fuschia'
        onClick={footerClick('acm_dev')}>
        ACM Development
      </a>
      .
    </div>
  )
}

export default Footer
