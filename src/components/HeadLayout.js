import Head from 'next/head'

const HeadLayout = ({title, keywords, description, children}) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>
        
        {children}</div>
  )
}

HeadLayout.defaultProps = {
    title : 'Gobeze | Helping Good Peopel Win!',
description: 'Gobeze is the future of learning. We provide short, immediately applicable seminars on topics that matter to you by working professionals who know the subject matter intimately. Our courses are delivered live in our classrooms and online through our portal www.gobeze.com',
keywords: 'consult, courses, business, shortterm, digital, graphics'
}

export default HeadLayout 

