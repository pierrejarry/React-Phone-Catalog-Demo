import Item from "./Item";

const Catalog = ({ phones, showProduct, removePhone }) => {

  const phoneItems = phones.map((phone) =>
    <Item phone={phone} key={phone.id.toString()} showProduct={showProduct} removePhone={removePhone} />
  );

  return (
    <section className='catalogSection'>
        <ul className="catalogList">
            { phoneItems }
        </ul>
    </section>
  )
}

export default Catalog