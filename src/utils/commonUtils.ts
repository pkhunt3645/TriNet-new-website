/**
 * Smoothly scrolls to an element with the given ID
 * @param targetId - The ID of the element to scroll to (without the # prefix)
 * @param offset - Optional offset in pixels from the top (useful for fixed headers)
 * @param duration - Optional duration of the scroll animation in milliseconds (default: 800)
 */
export const smoothScrollToId = (
  targetId: string,
  offset: number = 64,
  duration: number = 500
): void => {
  if (typeof window === 'undefined' || !targetId) return;

  const targetElement = document.getElementById(targetId);
  if (!targetElement) {
    console.warn(`Element with id "${targetId}" not found`);
    return;
  }

  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  // Easing function for smooth animation (ease-in-out)
  const easeInOutCubic = (t: number): number => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Finds the nearest preset value from an array of options
 * @param value - The input value to compare
 * @param options - An array of preset values to find the nearest from
 * @returns The nearest preset value from the options array
 */
export const findNearestPreset = (value: number, options: number[]) =>
  options.reduce((prev, curr) =>
    Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
  );

/**
 * Formats a number as US currency with no decimal places (e.g., $1,000)
 * @param amount - The number to format as currency
 * @returns A string representing the formatted currency
 */
export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);

/**
 * Formats a number as US currency with two decimal places (e.g., $1,000.00)
 * @param amount - The number to format as currency
 * @returns A string representing the formatted currency with two decimal places
 */
export const formatCurrencyDetailed = (amount: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);