import React from 'react';
    name: 'Lavender',
    price: 24,
    category: 'Flowering',
    image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551'
  },
  {
    id: 16,
    name: 'Orchid',
    price: 35,
    category: 'Flowering',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42'
  },
  {
    id: 17,
    name: 'Hibiscus',
    price: 26,
    category: 'Flowering',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc'
  },
  {
    id: 18,
    name: 'Marigold',
    price: 20,
    category: 'Flowering',
    image: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51'
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const groupedPlants = plants.reduce((groups, plant) => {
    if (!groups[plant.category]) {
      groups[plant.category] = [];
    }

    groups[plant.category].push(plant);
    return groups;
  }, {});

  return (
    <div>
      <Navbar />

      {Object.entries(groupedPlants).map(([category, items]) => (
        <div key={category}>
          <h2 style={{ marginLeft: '20px' }}>{category}</h2>

          <div className="product-grid">
            {items.map((plant) => (
              <div className="product-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />

                <h3>{plant.name}</h3>
                <p>${plant.price}</p>

                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
