import { useState } from "react";
import { LoginScreen } from "./components/LoginScreen";
import { ChooseVendorsScreen } from "./components/ChooseVendorsScreen";
import { ViewMenuScreen } from "./components/ViewMenuScreen";
import { PaymentScreen } from "./components/PaymentScreen";
import { TrackOrderScreen } from "./components/TrackOrderScreen";
import { ReceiveOrderScreen } from "./components/ReceiveOrderScreen";

type Screen = "login" | "vendors" | "menu" | "payment" | "track" | "receive";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("login");

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Mobile Frame */}
      <div className="w-full max-w-md h-[812px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-border">
        {currentScreen === "login" && (
          <LoginScreen onNext={() => setCurrentScreen("vendors")} />
        )}
        {currentScreen === "vendors" && (
          <ChooseVendorsScreen onSelectVendor={() => setCurrentScreen("menu")} />
        )}
        {currentScreen === "menu" && (
          <ViewMenuScreen
            onBack={() => setCurrentScreen("vendors")}
            onCheckout={() => setCurrentScreen("payment")}
          />
        )}
        {currentScreen === "payment" && (
          <PaymentScreen
            onBack={() => setCurrentScreen("menu")}
            onPlaceOrder={() => setCurrentScreen("track")}
          />
        )}
        {currentScreen === "track" && (
          <TrackOrderScreen onNext={() => setCurrentScreen("receive")} />
        )}
        {currentScreen === "receive" && (
          <ReceiveOrderScreen onBackToHome={() => setCurrentScreen("vendors")} />
        )}
      </div>

      {/* Screen Navigation Info */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">Current Screen:</p>
          <div className="flex gap-2">
            {(["login", "vendors", "menu", "payment", "track", "receive"] as Screen[]).map(
              (screen) => (
                <button
                  key={screen}
                  onClick={() => setCurrentScreen(screen)}
                  className={`px-3 py-1 rounded-full text-xs transition-colors ${
                    currentScreen === screen
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {screen.charAt(0).toUpperCase() + screen.slice(1)}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
