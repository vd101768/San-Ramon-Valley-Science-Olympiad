import { forwardRef } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

export const Accordion = forwardRef((props, forwardedRef) => {
  const { className, ...itemProps } = props;
  return (
    <AccordionPrimitive.Root
      {...itemProps}
      ref={forwardedRef}
      className={`accordion bg-gray-900 border border-gray-800 rounded-md ${className}`}
    />
  );
});

export const AccordionItem = forwardRef((props, forwardedRef) => {
  const { className, ...itemProps } = props;
  return (
    <AccordionPrimitive.Item
      {...itemProps}
      ref={forwardedRef}
      className={`accordion-item ${className}`}
    />
  );
});

export const AccordionHeader = forwardRef((props, forwardedRef) => {
  const { className, ...itemProps } = props;
  return (
    <AccordionPrimitive.Header
      {...itemProps}
      ref={forwardedRef}
      className={`accordion-header text-gray-400 hover:text-gray-300 transition-colors ${className}`}
    />
  );
});

export const AccordionTrigger = forwardRef((props, forwardedRef) => {
  const { className, ...itemProps } = props;
  return (
    <AccordionPrimitive.Trigger
      {...itemProps}
      ref={forwardedRef}
      className={`accordion-trigger flex items-center justify-between w-full px-6 py-4 ${className}`}
    />
  );
});

export const AccordionContent = forwardRef((props, forwardedRef) => {
  const { className, ...itemProps } = props;
  return (
    <AccordionPrimitive.Content
      {...itemProps}
      ref={forwardedRef}
      className={`accordion-content bg-gray-800 px-6 py-4 ${className}`}
    />
  );
});
