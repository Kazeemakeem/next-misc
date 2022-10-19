// this is the preview api for apps that rely on CMS
// link with redirect query e.g localhost3000/api/preview?redirect=/news

export default function handler(req, res){
  res.setPreviewData({user: 'Akeem'})
  res.redirect(req.query.redirect)
}