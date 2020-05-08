import React from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.module.css'
export default function Layout(props) {
  return (
    <Aux>
      <div>
        Toolbar, Backdrop, Sidedrawer
      </div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
}

