import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const InforViewer = ({ text, info, url }: { text: string; info: string; url: string}) => {
  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button
          variant={"link"}
          className="underline decoration-gray-500 transition-all duration-100 hover:decoration-gray-200 decoration-1 underline-offset-4"
        >
          {text}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent side="top">
        <p>{info}</p>
        <a target="_blank" href={`${url}`} className="text-sm underline underline-offset-4">see more</a>
      </HoverCardContent>
    </HoverCard>
  );
};

export default InforViewer;
