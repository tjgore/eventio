import React from 'react'
import App from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <>
        <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        <Component {...pageProps} />
      </>
    )
  }
}
