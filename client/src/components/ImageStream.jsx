import { CCard, CCardHeader, CCardBody } from '@coreui/react';

const ImageStream = () => {
  return (
    <CCard style={{ width: '100%', height: '100%' }}>
      <CCardHeader>
        <strong>Image Stream</strong>
      </CCardHeader>
      <CCardBody>
        <img
          src= "http://abdxi:8080/stream?topic=/image_raw"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          alt="Image Stream"
        />
      </CCardBody>
    </CCard>
  )
}

export default ImageStream