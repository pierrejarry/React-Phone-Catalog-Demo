import { useState } from 'react';

const AddPhone = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [description, setDescription] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState(0)
  const [imageFileName, setImageFileName] = useState('')
  const [screen, setScreen] = useState('')
  const [processor, setProcessor] = useState('')
  const [ram, setRam] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    // Add values to Db
    onAdd({
        name, 
        manufacturer, 
        description, 
        color, 
        price, 
        imageFileName, 
        screen, 
        processor, 
        ram
    })

    // Clear fields
    setName('')
    setManufacturer('')
    setDescription('')
    setColor('')
    setPrice(0)
    setImageFileName('')
    setScreen('')
    setProcessor('')
    setRam('')
  }

  return (
    <div className="addProduct">
        <h2>Please add a new product here</h2>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input
                type='text'
                placeholder='Add Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>
            <div className='form-control'>
                <label>Manufacturer</label>
                <input
                type='text'
                placeholder='Add Manufacturer'
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
                required
                />
            </div>
            <div className='form-control'>
                <label>Description</label>
                <textarea
                placeholder='Add Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                />
            </div>
            <div className='form-control'>
                <label>Color</label>
                <input
                type='text'
                placeholder='Add Color'
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
                />
            </div>
            <div className='form-control'>
                <label>Price</label>
                <input
                type='number'
                placeholder='0'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                />
            </div>
            <div className='form-control'>
                <label>Image</label>
                <input
                type='text'
                placeholder='Add Image Path'
                value={imageFileName}
                onChange={(e) => setImageFileName(e.target.value)}
                required
                />
            </div>
            <div className='form-control'>
                <label>Screen</label>
                <input
                type='text'
                placeholder='Add Screen'
                value={screen}
                onChange={(e) => setScreen(e.target.value)}
                required
                />
            </div>
            <div className='form-control'>
                <label>Processor</label>
                <input
                type='text'
                placeholder='Add Processor'
                value={processor}
                onChange={(e) => setProcessor(e.target.value)}
                required
                />
            </div>
            <div className='form-control'>
                <label>Ram</label>
                <input
                type='text'
                placeholder='Add Ram'
                value={ram}
                onChange={(e) => setRam(e.target.value)}
                required
                />
            </div>
            <div className='btnContainer'>
                <input type='submit' value='Add Product' className='btn'/>
            </div>
        </form>
    </div>
  )
}

export default AddPhone