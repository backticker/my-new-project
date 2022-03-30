// import '@styles/globals.css'
import '../styles.css'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export function reportWebVitals(metric) {
    console.log(metric)
    switch (metric.name) {
        case 'FCP':
            break
        case 'LCP':
            break
        case 'Next.js-hydration':
            console.log(metric)
            break
        case 'Next.js-render':
            console.log(metric)
            break
        default:
            break
    }
}

export default Application
