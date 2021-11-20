/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

export function Contact(props: any) {
  return (
    <div id="contact">
      <div className="contact">
        <h2 className="section-header">Contact</h2>
        <ul>
          <li>
            <a href={props.data ? props.data.link : 'Loading'}>
              <i className={props.data ? props.data.icon : 'Loading'}></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
