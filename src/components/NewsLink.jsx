import React from 'react';

export function NewsLink({title = '', link = ''}) {
    return (
      <li>
        <a href={link}>{title}</a>
      </li>
    )
  }