function Section({ id, section, items }) {
  return (
    <>
      <h2 id={"section-" + id}>Section: {section}</h2>
      <div className="row">
        {items.map((item) => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <Item item={item} />
          </div>
        ))}
      </div>
    </>
  );
}

function Item({ item }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="mt-0">{item.name}</h5>
        <em>{item.description}</em>
        <div>{item.price}</div>
      </div>
    </div>
  );
}

function Header({ menu }) {
  return (
    <nav id="navbar-example2" className="navbar navbar-light bg-light">
      <ul className="nav nav-pills">
        {menu.map((menuItem) => {
          return (
            <li className="nav-item">
              <a className="nav-link" href={"#section-" + menuItem.id}>
                {menuItem.section}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function Menu({ menu }) {
  return (
    <div>
      <h1>Menu: {menu.length}</h1>
      <Header menu={menu} />
      <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
        <div className="container">
          {menu.map(({ id, section, items }) => (
            <Section id={id} section={section} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await import("../data/menu.json");
  const menu = data.menu;
  return {
    props: {
      menu: data.menu,
    },
  };
}
