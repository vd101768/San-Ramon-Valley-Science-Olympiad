import { forwardRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

export const Tabs = forwardRef((props, forwardedRef) => {
  const { className, ...itemProps } = props;
  return (
    <TabsPrimitive.Root
      {...itemProps}
      ref={forwardedRef}
      className={`bg-gray-900 rounded-md ${className}`}
    />
  );
});

export const TabsList = forwardRef((props, forwardedRef) => {
  const { className, ...itemProps } = props;
  return (
    <TabsPrimitive.List
      {...itemProps}
      ref={forwardedRef}
      className={`flex justify-around items-center border-b border-gray-800 ${className}`}
    />
  );
});

export const TabsTrigger = forwardRef((props, forwardedRef) => {
  const { className, ...itemProps } = props;
  return (
    <TabsPrimitive.Trigger
      {...itemProps}
      ref={forwardedRef}
      className={`tabs-trigger grow py-4 text-md text-gray-400 ${className}`}
    />
  );
});

export const TabsContent = forwardRef((props, forwardedRef) => {
  const { className, ...itemProps } = props;
  return (
    <TabsPrimitive.Content
      {...itemProps}
      ref={forwardedRef}
      className={`px-10 py-2 ${className}`}
    />
  );
});
