const paymentResources = [
  {
    id: "12345",
    amount: 100.5,
    currency: "USD",
    date: "2022-01-01T12:00:00Z",
    customer: {
      id: "67890",
      name: "John Doe",
      email: "johndoe@example.com",
    },
  },
  {
    id: "1",
    amount: 200000,
    currency: "IDR",
    date: "2022-03-01T12:00:00Z",
    customer: {
      id: "67890",
      name: "John Tor",
      email: "johntor@example.com",
    },
  },
];

module.exports = { paymentResources }
