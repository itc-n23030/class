const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}
export { GA_TRACKING_ID, pageview }
