import { useState } from "react";
import { Button } from "@/components/ui/button";

function MyButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-3 p-6">
      <Button onClick={() => setCount(count + 1)}>Clicked {count} times</Button>
    </div>
  );
}

export default function MyApp() {
  return <MyButton />;
}
