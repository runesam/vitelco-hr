import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import MenuSections from './MenuSections'
import { getLeftMenuData } from './../actions/leftMenu'
import PropTypes from 'prop-types'

class LeftMenu extends PureComponent {
  componentDidMount () {
    this.props.getLeftMenuData()
  }
  render () {
    return (
      <div className='left-menu'>
        <div className='left-menu__tag'>
          <i className='fab fa-adn' />
          <span> VITELCO - HR Admin </span>
        </div>
        <div className='left-menu__profile'>
          <div className='profile__image'>
            <img src='https://colorlib.com/polygon/gentelella/images/img.jpg' alt='profile image goes here' />
          </div>
          <p className='profile__word'>Welcome,</p>
          <p className='profile__name'>Sam Ewdala</p>
        </div>
        <div className='left-menu__center'>
          <MenuSections menuData={this.props.leftMenu} />
        </div>
        <div className='left-menu__bottom'>
          <a data-toggle='tooltip' data-placement='top' title='' data-original-title='Settings'>
            <span className='fas fa-cog' aria-hidden='true' />
          </a>
          <a data-toggle='tooltip' data-placement='top' title='' data-original-title='FullScreen'>
            <span className='fas fa-arrows-alt' aria-hidden='true' />
          </a>
          <a data-toggle='tooltip' data-placement='top' title='' data-original-title='Lock'>
            <span className='fas fa-eye-slash' aria-hidden='true' />
          </a>
          <a data-toggle='tooltip' data-placement='top' title='' href='login.html' data-original-title='Logout'>
            <span className='fas fa-power-off' aria-hidden='true' />
          </a>
        </div>
      </div>
    )
  }
}

LeftMenu.propTypes = {
  leftMenu: PropTypes.array,
  getLeftMenuData: PropTypes.func
}

function mapStateToProps ({ leftMenu }) {
  return {
    leftMenu
  }
}

export default connect(mapStateToProps, { getLeftMenuData })(LeftMenu)
