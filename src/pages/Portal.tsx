import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Portal = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      
      if (!session) {
        navigate('/auth');
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) {
        navigate('/auth');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out successfully",
      description: "See you next time!",
    });
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-primary text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
            Client Portal
          </h1>
          <Button onClick={handleSignOut} variant="outline" className="gap-2">
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>

        <div className="max-w-4xl">
          <div className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-muted-foreground mb-6">
              Logged in as: {session?.user?.email}
            </p>
            <p className="text-muted-foreground">
              Your personalized project dashboard is coming soon. You'll be able to track your projects, 
              view estimates, and communicate with your freelancer team all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Active Projects</h3>
              <p className="text-muted-foreground text-sm">Coming Soon</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Pending Quotes</h3>
              <p className="text-muted-foreground text-sm">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
