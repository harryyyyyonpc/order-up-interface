import { ArrowLeft, CreditCard, Wallet } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Separator } from "./ui/separator";

interface PaymentScreenProps {
  onBack: () => void;
  onPlaceOrder: () => void;
}

export function PaymentScreen({ onBack, onPlaceOrder }: PaymentScreenProps) {
  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center gap-4">
        <button onClick={onBack}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2>Payment</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Order Summary */}
        <div className="bg-card rounded-xl border border-border p-4 mb-6">
          <h3 className="mb-3">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>$39.96</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery Fee</span>
              <span>$3.99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span>$3.52</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-primary">$47.47</span>
            </div>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="mb-6">
          <h3 className="mb-3">Delivery Address</h3>
          <div className="bg-card rounded-xl border border-border p-4">
            <p>123 Main Street</p>
            <p className="text-sm text-muted-foreground">Downtown, Apt 4B</p>
            <button className="text-sm text-primary mt-2 hover:underline">
              Change Address
            </button>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h3 className="mb-3">Payment Method</h3>
          <RadioGroup defaultValue="card" className="space-y-3">
            <div className="flex items-center space-x-3 bg-card rounded-xl border border-border p-4">
              <RadioGroupItem value="card" id="card" className="border-primary" />
              <Label htmlFor="card" className="flex-1 flex items-center gap-3 cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p>Credit/Debit Card</p>
                  <p className="text-sm text-muted-foreground">Visa, Mastercard, Amex</p>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-3 bg-card rounded-xl border border-border p-4">
              <RadioGroupItem value="wallet" id="wallet" className="border-primary" />
              <Label htmlFor="wallet" className="flex-1 flex items-center gap-3 cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <p>Digital Wallet</p>
                  <p className="text-sm text-muted-foreground">Apple Pay, Google Pay</p>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Card Details */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              className="bg-input-background border-border"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input
                id="expiry"
                placeholder="MM/YY"
                className="bg-input-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                placeholder="123"
                className="bg-input-background border-border"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Cardholder Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              className="bg-input-background border-border"
            />
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="bg-card border-t border-border px-6 py-4">
        <Button
          onClick={onPlaceOrder}
          className="w-full bg-secondary hover:bg-secondary/90"
        >
          Place Order - $47.47
        </Button>
      </div>
    </div>
  );
}
