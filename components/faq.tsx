import FAQCard from './faq-card'
import faq from '../faq'

const FAQ = (): JSX.Element => {
  return (
    <div className='my-20'>
      <h2 className='font-bold text-4xl flex items-center justify-center'>
        <img src='/img/leaf-1.svg' className='-ml-64 mt-2 h-12 absolute z-10' alt='' />
        <img src='/img/sparkles.svg' className='ml-56 -mt-5 h-3 absolute z-10' alt='' />
        <img src='/img/leaf-2.svg' className='ml-64 mt-3 h-6 absolute z-10' alt='' />
        <span className='z-0'>Frequently Asked Questions</span>
      </h2>
      <div className='my-12'>
        {faq.map(qa => (
          <FAQCard question={qa.q} answer={qa.a} key={JSON.stringify(qa)} />
        ))}
      </div>
    </div>
  )
}

export default FAQ
