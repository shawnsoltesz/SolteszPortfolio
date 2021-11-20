import React from 'react'

export function Footer(props: any) {
  return (
    // <footer>
    //   <div className="footer">
    //     <p>
    //       Built with <i className="heart fa fa-heart"></i> in St Petersburg,
    //       Florida&nbsp;|&nbsp;©2021 Shawn Soltesz
    //     </p>
    //   </div>
    // </footer>

    <footer>
      <div className="footer">
        <p>
          Built with <i className="heart fa fa-heart"></i> in&nbsp;
          {props.data ? props.data.location : 'Loading'}&nbsp;|&nbsp;©
          {props.data ? props.data.year : 'Loading'}&nbsp; Shawn Soltesz
        </p>
      </div>
    </footer>
  )
}
