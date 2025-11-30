import { Search, MapPin, Star } from "lucide-react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ChooseVendorsScreenProps {
  onSelectVendor: () => void;
}

const vendors = [
  {
    id: 1,
    name: "Burger Palace",
    category: "Burgers & Fries",
    rating: 4.8,
    deliveryTime: "20-30 min",
    image: "https://images.unsplash.com/photo-1722125680299-783f98369451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGJ1cmdlcnxlbnwxfHx8fDE3NjI4MTIzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Pizza House",
    category: "Italian Pizza",
    rating: 4.6,
    deliveryTime: "25-35 min",
    image: "https://images.unsplash.com/photo-1563245738-9169ff58eccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzYyNzgyNDgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Sushi Station",
    category: "Japanese Cuisine",
    rating: 4.9,
    deliveryTime: "30-40 min",
    image: "https://images.unsplash.com/photo-1563612116891-9b03e4bb9318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGZvb2R8ZW58MXx8fHwxNzYyODAxMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    name: "Fresh Bites",
    category: "Healthy Food",
    rating: 4.7,
    deliveryTime: "15-25 min",
    image: "https://images.unsplash.com/photo-1762530351229-ee61381ea8ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwdmVuZG9yJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjI4NDIyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function ChooseVendorsScreen({ onSelectVendor }: ChooseVendorsScreenProps) {
  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-6 pt-12 pb-6">
        <h2>Choose Restaurant</h2>
        <div className="flex items-center gap-2 mt-2 text-sm opacity-90">
          <MapPin className="w-4 h-4" />
          <span>123 Main Street, Downtown</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 py-4 bg-primary/5">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search restaurants..."
            className="pl-10 bg-background border-border"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 py-4 flex gap-2 overflow-x-auto">
        <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
          All
        </Badge>
        <Badge variant="outline" className="whitespace-nowrap border-primary text-primary">
          Burgers
        </Badge>
        <Badge variant="outline" className="whitespace-nowrap border-primary text-primary">
          Pizza
        </Badge>
        <Badge variant="outline" className="whitespace-nowrap border-primary text-primary">
          Asian
        </Badge>
        <Badge variant="outline" className="whitespace-nowrap border-primary text-primary">
          Healthy
        </Badge>
      </div>

      {/* Vendors List */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="space-y-4">
          {vendors.map((vendor) => (
            <button
              key={vendor.id}
              onClick={onSelectVendor}
              className="w-full bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4 p-3">
                <ImageWithFallback
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1 text-left">
                  <h3>{vendor.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{vendor.category}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-secondary text-secondary" />
                      <span className="text-sm">{vendor.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {vendor.deliveryTime}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
