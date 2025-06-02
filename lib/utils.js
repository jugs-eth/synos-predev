import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names using clsx and tailwind-merge
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Truncates a string (like an Ethereum address) for display
 */
export function truncateAddress(address, startLength = 6, endLength = 4) {
  if (!address) return "";
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
}

/**
 * Format a date for display
 */
export function formatDate(date) {
  if (!date) return "";
  return new Date(date).toLocaleDateString();
}
