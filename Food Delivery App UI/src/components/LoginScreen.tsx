import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

interface LoginScreenProps {
  onNext: () => void;
}

export function LoginScreen({ onNext }: LoginScreenProps) {
  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-primary/10 to-background">
      {/* Header with Logo Space */}
      <div className="flex flex-col items-center pt-16 pb-8">
        <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-4">
          <span className="text-primary text-sm">Logo</span>
        </div>
        <h1 className="text-primary">OrderUP</h1>
        <p className="text-muted-foreground mt-2">Your food, delivered fast</p>
      </div>

      {/* Login Form */}
      <div className="flex-1 px-6 pt-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-input-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="bg-input-background border-border"
            />
          </div>

          <div className="flex justify-end">
            <button className="text-sm text-primary hover:underline">
              Forgot Password?
            </button>
          </div>

          <Button
            onClick={onNext}
            className="w-full bg-primary hover:bg-primary/90"
          >
            Sign In
          </Button>

          <div className="flex items-center gap-4 py-4">
            <Separator className="flex-1" />
            <span className="text-sm text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>

          <Button
            variant="outline"
            className="w-full border-border"
          >
            Continue with Google
          </Button>

          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <button className="text-primary hover:underline">
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
