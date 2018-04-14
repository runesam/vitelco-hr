import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import CategoryMenu from './../components/CategoryMenu'
import A from './../statics/images/asa.svg'

class MenuSections extends PureComponent {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      active: this.props.menuData.reduce((acc, item) => {
        acc[item.id] = false
        return acc
      }, {})
    }
  }
  toggle(id) {
    this.setState({
      active: this.props.menuData.reduce((acc, item) => {
        if (item.id === id) {
          acc[item.id] = !this.state.active[id]
        } else {
          acc[item.id] = false
        }
        return acc
      }, {})
    })
  }
  renderMenuCategories () {
    return this.props.menuData.map((item, key) => (
      <CategoryMenu key={key} item={item} active={this.state.active} toggle={this.toggle} />
    ))
  }
  render () {
    return this.props.menuData.length > 0 ? (
      <div>
        {this.renderMenuCategories()}
      </div>
    ) : (
      <img className='loader' src={A} alt='loading the menu items' />
    )
  }
}

MenuSections.propTypes = {
  menuData: PropTypes.array
}

export default MenuSections
