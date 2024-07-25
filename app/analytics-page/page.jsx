import React from 'react'

const AnalyticsPage = () => {
  return (
    <div className='mt-20 w-full h-screen'>
        <iframe
          width="100%"
          height="100%"
          src="https://lookerstudio.google.com/embed/reporting/0a7362be-97e9-444c-ac21-132879f25be3/page/2YoyD"
          frameBorder="0"
          style={{ border: '0' }}
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
    </div>
  )
}

export default AnalyticsPage