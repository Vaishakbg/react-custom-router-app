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
        <Button dark className="mr-3">Dark</Button>
      </div>
      <div className='flex mt-3'>
        <Button outline primary className="mr-3">Primary</Button>
        <Button outline secondary className="mr-3">Secondary</Button>
        <Button outline success className="mr-3">Success</Button>
        <Button outline warning className="mr-3">Warning</Button>
        <Button outline danger className="mr-3">Danger</Button>
        <Button outline info className="mr-3">Info</Button>
        <Button outline dark className="mr-3">Dark</Button>
      </div>

      <div className='flex mt-3'>
        <Button rounded primary className="mr-3">Primary</Button>
        <Button rounded secondary className="mr-3">Secondary</Button>
        <Button rounded success className="mr-3">Success</Button>
        <Button rounded warning className="mr-3">Warning</Button>
        <Button rounded danger className="mr-3">Danger</Button>
        <Button rounded info className="mr-3">Info</Button>
        <Button rounded dark className="mr-3">Dark</Button>
      </div>

      <div className='flex mt-3'>
        <Button rounded outline primary className="mr-3">Primary</Button>
        <Button rounded outline secondary className="mr-3">Secondary</Button>
        <Button rounded outline success className="mr-3">Success</Button>
        <Button rounded outline warning className="mr-3">Warning</Button>
        <Button rounded outline danger className="mr-3">Danger</Button>
        <Button rounded outline info className="mr-3">Info</Button>
        <Button rounded outline dark className="mr-3">Dark</Button>
      </div>
    </div>
  )
}

export default ButtonsPage