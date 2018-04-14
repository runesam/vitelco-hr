import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

class CategoryMenu extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle () {
    this.props.toggle(this.props.item.id)
  }
  renderSubItems = (data) => data.map((item) => (
    <li key={item.id}>
      <Link to={`/counter`} activeClassName='category__sub--active'>{item.name}</Link>
    </li>
  ))
  render () {
    return (
      <div
        className={`category ${this.props.active[this.props.item.id] ? 'category--active' : ''}`}
        style={this.props.active[this.props.item.id] ? { height: (this.props.item.children.length * 40) + 50 } : {}}
      >
        <div
          className={`category__main ${this.props.active[this.props.item.id] ? 'category__main--active' : ''}`}
          onClick={this.toggle}
        >
          <i className={this.props.item.icon} />
          <span>{this.props.item.name}</span>
          <i className={this.props.active[this.props.item.id] ? 'fas fa-angle-up' : 'fas fa-angle-down'} />
        </div>
        <div className='category__sub'>
          <ul>
            {this.renderSubItems(this.props.item.children)}
          </ul>
        </div>
      </div>
    )
  }
}

CategoryMenu.propTypes = {
  item: PropTypes.object,
  toggle: PropTypes.func,
  active: PropTypes.object
}

export default CategoryMenu
