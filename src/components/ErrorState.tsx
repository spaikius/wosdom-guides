import { Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ErrorStateProps = {
  title?: string;
  message?: string;
  onRetry?: () => void;
};

const funnyMessages = [
  'Our code gremlins are misbehaving again 🪲',
  'Looks like this guide went on vacation 🏖️',
  'Something broke... but not your spirit 💪',
  "That didn't go as planned 🤯 Try hitting the button below!",
  'The server tripped over a cable. It happens. ⚡',
  'Something went sideways... probably a cosmic ray 💫',
  'This page is hiding from us 🕵️‍♂️',
  'Well, that escalated quickly 😅',
  'Error 404: Motivation not found 🙃',
  'Our hamsters powering the servers need a snack break 🐹🍪',
  'The internet gremlins strike again 👾',
];

function getFunnyMessage(): string {
  return funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title,
  message,
  onRetry,
}) => {
  const randomMessage = getFunnyMessage();
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
      <Bug className="h-10 w-10 text-destructive animate-bounce" />
      <div>
        <h2 className="text-lg font-semibold">
          {title ?? "Oops! That didn't go as planned 🐛"}
        </h2>
        <p className="text-sm text-muted-foreground">
          {message ?? randomMessage}
        </p>
      </div>
      {onRetry && (
        <Button variant="outline" onClick={onRetry} className="cursor-pointer">
          Try again (bravely)
        </Button>
      )}
    </div>
  );
};
