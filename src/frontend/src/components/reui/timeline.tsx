// Component installed via: pnpm dlx shadcn@latest add @reui/p-timeline-2
// Re-export wrapper for @reui/p-timeline-2 components

import * as React from "react";
import { cn } from "@/lib/utils";

// Timeline Context
interface TimelineContextValue {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  orientation?: "horizontal" | "vertical";
}

const TimelineContext = React.createContext<TimelineContextValue>({
  orientation: "vertical",
});

const useTimeline = () => {
  const context = React.useContext(TimelineContext);
  if (!context) {
    throw new Error("Timeline components must be used within Timeline");
  }
  return context;
};

// Timeline Root
interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: number;
  value?: number;
  onValueChange?: (value: number) => void;
  orientation?: "horizontal" | "vertical";
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  (
    {
      className,
      defaultValue = 1,
      value,
      onValueChange,
      orientation = "vertical",
      ...props
    },
    ref
  ) => {
    return (
      <TimelineContext.Provider
        value={{ value, defaultValue, onValueChange, orientation }}
      >
        <div
          ref={ref}
          className={cn(
            "group/timeline relative",
            orientation === "vertical" && "flex flex-col gap-4",
            orientation === "horizontal" && "flex flex-row gap-4",
            className
          )}
          data-orientation={orientation}
          {...props}
        />
      </TimelineContext.Provider>
    );
  }
);
Timeline.displayName = "Timeline";

// Timeline Item
interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, step, ...props }, ref) => {
    const { orientation } = useTimeline();
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex",
          orientation === "vertical" && "flex-col",
          orientation === "horizontal" && "flex-row",
          className
        )}
        data-step={step}
        {...props}
      />
    );
  }
);
TimelineItem.displayName = "TimelineItem";

// Timeline Header
const TimelineHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useTimeline();
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-4",
        orientation === "vertical" && "flex-row",
        orientation === "horizontal" && "flex-col",
        className
      )}
      {...props}
    />
  );
});
TimelineHeader.displayName = "TimelineHeader";

// Timeline Separator
const TimelineSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useTimeline();
  return (
    <div
      ref={ref}
      className={cn(
        "bg-border",
        orientation === "vertical" && "absolute left-[1.125rem] top-8 h-full w-px",
        orientation === "horizontal" && "h-px w-full",
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
});
TimelineSeparator.displayName = "TimelineSeparator";

// Timeline Indicator
const TimelineIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-accent/10",
        className
      )}
      {...props}
    >
      <div className="h-3 w-3 rounded-full bg-accent" />
    </div>
  );
});
TimelineIndicator.displayName = "TimelineIndicator";

// Timeline Date
const TimelineDate = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
TimelineDate.displayName = "TimelineDate";

// Timeline Title
const TimelineTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn("text-xl font-semibold text-primary md:text-2xl", className)}
      {...props}
    />
  );
});
TimelineTitle.displayName = "TimelineTitle";

// Timeline Content
const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("ml-[3.25rem] pb-8 text-muted-foreground", className)}
      {...props}
    />
  );
});
TimelineContent.displayName = "TimelineContent";

export {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineSeparator,
  TimelineIndicator,
  TimelineDate,
  TimelineTitle,
  TimelineContent,
};
