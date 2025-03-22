import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex justify-center items-center min-h-screen", className)} {...props}>
      <Card className="w-full max-w-md p-6 shadow-lg">
        <form className="space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground text-sm">Login to your Acme Inc account</p>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <div className="relative text-center text-sm">
            <span className="bg-white px-3">Or continue with</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Button variant="outline" type="button" className="w-full">Apple</Button>
            <Button variant="outline" type="button" className="w-full">Google</Button>
            <Button variant="outline" type="button" className="w-full">Meta</Button>
          </div>
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="text-primary font-medium hover:underline">
              Sign up
            </a>
          </div>
        </form>
        <div className="text-xs text-muted-foreground text-center mt-4">
          By clicking continue, you agree to our{" "}
          <a href="#" className="underline">Terms of Service</a> and{" "}
          <a href="#" className="underline">Privacy Policy</a>.
        </div>
      </Card>
    </div>
  );
}
