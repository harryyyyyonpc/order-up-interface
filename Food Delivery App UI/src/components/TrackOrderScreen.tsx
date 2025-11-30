import { Phone, MessageSquare, MapPin, CheckCircle2, Clock, Package, Truck } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TrackOrderScreenProps {
  onNext: () => void;
}

const orderSteps = [
  { id: 1, label: "Order Placed", icon: CheckCircle2, completed: true },
  { id: 2, label: "Preparing", icon: Package, completed: true },
  { id: 3, label: "On the Way", icon: Truck, completed: false, active: true },
  { id: 4, label: "Delivered", icon: CheckCircle2, completed: false },
];

export function TrackOrderScreen({ onNext }: TrackOrderScreenProps) {
  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-6 py-4">
        <h2>Track Order</h2>
        <p className="text-sm opacity-90 mt-1">Order #12345</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Map Placeholder */}
        <div className="bg-muted/30 h-64 flex items-center justify-center border-b border-border">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
            <p className="text-muted-foreground">Map View</p>
            <p className="text-sm text-muted-foreground">Tracking your delivery</p>
          </div>
        </div>

        {/* Delivery Person Info */}
        <div className="px-6 py-4 bg-card border-b border-border">
          <div className="flex items-center gap-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1543499459-d1460946bdc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHBlcnNvbnxlbnwxfHx8fDE3NjI4NDExOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Delivery person"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4>Michael Johnson</h4>
              <p className="text-sm text-muted-foreground">Delivery Partner</p>
              <div className="flex items-center gap-1 mt-1">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-sm text-secondary">Arriving in 15 mins</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center hover:bg-secondary/20">
                <Phone className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20">
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Order Progress */}
        <div className="px-6 py-6">
          <h3 className="mb-4">Order Status</h3>
          <div className="space-y-6">
            {orderSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step.completed
                          ? "bg-secondary text-secondary-foreground"
                          : step.active
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {index < orderSteps.length - 1 && (
                      <div
                        className={`w-0.5 h-12 ${
                          step.completed ? "bg-secondary" : "bg-border"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <p className={step.active ? "text-primary" : ""}>
                      {step.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {step.completed
                        ? "Completed"
                        : step.active
                        ? "In Progress"
                        : "Pending"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Details */}
        <div className="px-6 pb-6">
          <div className="bg-card rounded-xl border border-border p-4">
            <h4 className="mb-3">Order Details</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Classic Burger x2</span>
                <span>$25.98</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cheese Fries x1</span>
                <span>$6.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Deluxe Burger x1</span>
                <span>$16.99</span>
              </div>
              <div className="border-t border-border pt-2 mt-2">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="text-primary">$47.47</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="bg-card border-t border-border px-6 py-4">
        <Button onClick={onNext} variant="outline" className="w-full border-primary text-primary">
          View Receipt
        </Button>
      </div>
    </div>
  );
}
