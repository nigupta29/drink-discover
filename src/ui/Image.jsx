import PropTypes from 'prop-types'
import { useState } from 'react'
import { CardImageLoader } from './Loaders'

const Image = ({ imageUrl, altText, height }) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="relative w-full bg-base-300" style={{ height }}>
      <img
        src={imageUrl}
        alt={altText}
        onLoad={handleImageLoad}
        height={height}
        className="w-full object-cover"
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
  height: '18rem',
}

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
}

export default Image
