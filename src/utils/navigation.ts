declare global {
  interface Window {
    redirectWithParams: (destination: string) => void;
  }
  function redirectWithParams(destination: string): void;
}

export function redirectWithParams(destination: string) {
  var currentParams = window.location.search;

  if (currentParams) {
    var separator = destination.includes("?") ? "&" : "?";
    destination = destination + separator + currentParams.substring(1);
  }

  window.location.href = destination;
}

if (typeof window !== 'undefined') {
  (window as any).redirectWithParams = redirectWithParams;
}
