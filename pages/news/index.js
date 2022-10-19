function News ({ data }) {
  return <h1 className='content'>{data}</h1>
}

export default News

export async function getStaticProps(context) {
  console.log(context.previewData) // previewData is accessible here
  return {
    props: {
      data: context.preview ? 'List of draft Articles' : 'List of Published Articles'
    }
  }
}