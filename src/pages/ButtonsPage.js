import React from 'react';
import Button from '../components/Button'

function ButtonsPage() {
  return (
    <div>
      <div className='flex '>
        <Button primary className="mr-3">Primary</Button>
        <Button secondary className="mr-3">Secondary</Button>
        <Button success className="mr-3">Success</Button>
        <Button warning className="mr-3">Warning</Button>
        <Button danger className="mr-3">Danger</Button>
        <Button info className="mr-3">Info</Button>
        <Button light className="mr-3">Light</Button>
        <Button dark className="mr-3">Dark</Button>
      </div>
    </div>
  )
}

export default ButtonsPage