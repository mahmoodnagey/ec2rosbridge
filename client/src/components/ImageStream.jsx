import { CCard, CCardHeader, CCardBody } from '@coreui/react';

const ImageStream = () => {
  return (
    <CCard style={{ width: '100%', height: '100%' }}>
      <CCardHeader>
        <strong>Image Stream</strong>
      </CCardHeader>
      <CCardBody>
        <img
          // src= "https://[fc94:b376:aa06:24af:52b8:62c2:d295:1be1]:8080/stream?topic=/image_raw"
          src= "https://app.compusence.com:8080/stream?topic=/image_raw"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          alt="Image Stream"
        />
      </CCardBody>
    </CCard>
  )
}

export default ImageStream