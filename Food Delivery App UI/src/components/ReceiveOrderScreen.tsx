import { CheckCircle2, Star, Download, Home } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

interface ReceiveOrderScreenProps {
  onBackToHome: () => void;
}

export function ReceiveOrderScreen({ onBackToHome }: ReceiveOrderScreenProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Success Header */}
      <div className="bg-gradient-to-b from-secondary/10 to-background px-6 pt-12 pb-8 text-center">
        <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-12 h-12 text-secondary" />
        </div>
        <h2 className="text-secondary mb-2">Order Delivered!</h2>
        <p className="text-muted-foreground">
          Your food has been delivered successfully
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {/* Order Summary */}
        <div className="bg-card rounded-xl border border-border p-4 mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3>Order Summary</h3>
            <span className="text-sm text-muted-foreground">Order #12345</span>
          </div>
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
                <span>Total Paid</span>
                <span className="text-primary">$47.47</span>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="bg-card rounded-xl border border-border p-4 mb-6">
          <h4 className="mb-3">Delivery Information</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivered to</span>
              <span>123 Main Street, Apt 4B</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivered by</span>
              <span>Michael Johnson</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery time</span>
              <span>25 mins</span>
            </div>
          </div>
        </div>

        {/* Rating Section */}
        <div className="bg-card rounded-xl border border-border p-4 mb-6">
          <h4 className="mb-3">Rate Your Experience</h4>
          
          {/* Star Rating */}
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= (hoveredRating || rating)
                      ? "fill-secondary text-secondary"
                      : "text-border"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Review Text */}
          <Textarea
            placeholder="Share your experience with us..."
            className="bg-input-background border-border min-h-20"
          />

          <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90">
            Submit Review
          </Button>
        </div>

        {/* Download Receipt */}
        <Button variant="outline" className="w-full border-border mb-4">
          <Download className="w-4 h-4 mr-2" />
          Download Receipt
        </Button>
      </div>

      {/* Bottom Actions */}
      <div className="bg-card border-t border-border px-6 py-4">
        <Button
          onClick={onBackToHome}
          className="w-full bg-primary hover:bg-primary/90"
        >
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>
    </div>
  );
}
