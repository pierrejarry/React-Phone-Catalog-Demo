import Item from "./Item";

const Catalog = ({ phones }) => {

  const phoneItems = phones.map((phone) =>
    <Item phone={phone} key={phone.id.toString()} />
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