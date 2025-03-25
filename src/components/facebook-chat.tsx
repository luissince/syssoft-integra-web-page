"use client"

import { useEffect } from "react"

export function FacebookChat() {
  useEffect(() => {
    // Create Facebook SDK script
    const createFacebookScript = () => {
      // Create root div
      const fbRoot = document.createElement("div")
      fbRoot.id = "fb-root"
      document.body.appendChild(fbRoot)

      // Create customer chat div
      const fbCustomerChat = document.createElement("div")
      fbCustomerChat.id = "fb-customer-chat"
      fbCustomerChat.className = "fb-customerchat"
      document.body.appendChild(fbCustomerChat)

      // Set attributes
      fbCustomerChat.setAttribute("page_id", "100473614875902")
      fbCustomerChat.setAttribute("attribution", "biz_inbox")

      // Initialize Facebook SDK
      window.fbAsyncInit = () => {
        // @ts-ignore - FB is added by the Facebook SDK
        window.FB &&
          window.FB.init({
            xfbml: true,
            version: "v12.0",
          })
      }

      // Load Facebook SDK
      const js = document.createElement("script")
      js.id = "facebook-jssdk"
      js.src = "https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js"
      js.async = true
      js.defer = true

      const fjs = document.getElementsByTagName("script")[0]
      fjs.parentNode?.insertBefore(js, fjs)
    }

    // Only run in browser, not during SSR
    if (typeof window !== "undefined") {
      createFacebookScript()
    }

    // Cleanup function
    return () => {
      const fbRoot = document.getElementById("fb-root")
      const fbCustomerChat = document.getElementById("fb-customer-chat")
      const fbScript = document.getElementById("facebook-jssdk")

      if (fbRoot) document.body.removeChild(fbRoot)
      if (fbCustomerChat) document.body.removeChild(fbCustomerChat)
      if (fbScript) document.body.removeChild(fbScript)

      // @ts-ignore
      delete window.fbAsyncInit
      // @ts-ignore
      if (window.FB) delete window.FB
    }
  }, [])

  return null
}


