import PropTypes from 'prop-types'
import { useState } from 'react'
import { CardImageLoader } from './Loaders'

const Image = ({ imageUrl, altText, height, className, container }) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${
        container ? 'w-full' : ''
      }`}
      style={{ height }}
    >
      <img
        src={imageUrl}
        alt={altText}
        onLoad={handleImageLoad}
        className={className + ' w-full object-cover'}
        loading="lazy"
        style={{ height }}
      />

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-base-300">
          <CardImageLoader />
        </div>
      )}
    </div>
  )
}

Image.defaultProps = {
  height: '30rem',
  className: '',
}

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  height: PropTypes.string,
  className: PropTypes.string,
}

export default Image
