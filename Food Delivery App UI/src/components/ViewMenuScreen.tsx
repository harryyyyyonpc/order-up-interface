import { ArrowLeft, ShoppingCart, Plus, Minus } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface ViewMenuScreenProps {
  onBack: () => void;
  onCheckout: () => void;
}

const menuItems = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Beef patty, lettuce, tomato, cheese",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1722125680299-783f98369451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGJ1cmdlcnxlbnwxfHx8fDE3NjI4MTIzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Cheese Fries",
    description: "Crispy fries with melted cheese",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1722125680299-783f98369451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGJ1cmdlcnxlbnwxfHx8fDE3NjI4MTIzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Deluxe Burger",
    description: "Double patty, bacon, avocado",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1722125680299-783f98369451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGJ1cmdlcnxlbnwxfHx8fDE3NjI4MTIzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    name: "Chicken Wings",
    description: "Spicy buffalo wings with ranch",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1722125680299-783f98369451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGJ1cmdlcnxlbnwxfHx8fDE3NjI4MTIzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function ViewMenuScreen({ onBack, onCheckout }: ViewMenuScreenProps) {
  const [cart, setCart] = useState<Record<number, number>>({});

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);
  const totalPrice = Object.entries(cart).reduce((sum, [itemId, count]) => {
    const item = menuItems.find(i => i.id === Number(itemId));
    return sum + (item?.price || 0) * count;
  }, 0);

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center gap-4">
        <button onClick={onBack}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1">
          <h2>Burger Palace</h2>
          <p className="text-sm opacity-90">Burgers & Fries</p>
        </div>
        <div className="relative">
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs">
              {totalItems}
            </span>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 py-4 flex gap-2 overflow-x-auto bg-muted/30">
        <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
          Popular
        </Badge>
        <Badge variant="outline" className="whitespace-nowrap border-primary text-primary">
          Burgers
        </Badge>
        <Badge variant="outline" className="whitespace-nowrap border-primary text-primary">
          Sides
        </Badge>
        <Badge variant="outline" className="whitespace-nowrap border-primary text-primary">
          Drinks
        </Badge>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="space-y-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-xl overflow-hidden shadow-sm border border-border"
            >
              <div className="flex gap-4 p-3">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4>{item.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-primary">${item.price.toFixed(2)}</span>
                    {cart[item.id] ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-6 text-center">{cart[item.id]}</span>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(item.id)}
                        className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Footer */}
      {totalItems > 0 && (
        <div className="bg-card border-t border-border px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-muted-foreground">{totalItems} items</p>
              <p className="text-primary">Total: ${totalPrice.toFixed(2)}</p>
            </div>
            <Button onClick={onCheckout} className="bg-secondary hover:bg-secondary/90">
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
