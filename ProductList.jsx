import React from 'react';
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b'
  },
  {
    id: 3,
    name: 'Aloe Vera',
    price: 15,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6'
  },
  {
    id: 4,
    name: 'Cactus',
    price: 18,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a'
  },
  {
    id: 5,
    name: 'Rose Plant',
    price: 30,
    category: 'Flowering',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946'
  },
  {
    id: 6,
    name: 'Jasmine',
    price: 28,
    category: 'Flowering',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735'
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isAdded = (id) => {
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
                  disabled={isAdded(plant.id)}
                >
                  {isAdded(plant.id) ? 'Added' : 'Add to Cart'}
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