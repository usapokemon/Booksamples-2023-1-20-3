// A mock function to mimic making an async request for data
export function fetchCredit(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
