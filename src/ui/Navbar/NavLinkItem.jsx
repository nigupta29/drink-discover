import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavLinkItem = ({ link, Icon, square, title }) => {
  return (
    <div className="md:tooltip md:tooltip-right" data-tip={title}>
      <Link
        to={link}
        className={`group btn btn-ghost ${
          square ? 'btn-square' : 'btn-circle'
        }`}
      >
        <Icon className="h-7 w-7 fill-primary-content group-hover:fill-secondary" />
      </Link>
    </div>
  )
}

NavLinkItem.defaultProps = {
  square: false,
}

NavLinkItem.propTypes = {
  link: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  square: PropTypes.bool,
  title: PropTypes.string.isRequired,
}

export default NavLinkItem
