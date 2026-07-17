 type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  image? : string
}

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUxm1m6XToGECAMxZh3MPr0PS9HeaZn9A2cuTgiPlQ-g&s=10",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlZ0Yr8Ba8J798rKl-Je-s1Wpznd83nKGcrlZnEDQUA&s=10",
  },

{
    id: "AZ003",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-BmQ34SwXWz98Bnn-LdN92bXdUSXn1ocTQyp17JQ-g&s=10",
  },


  // ...
]
 
 
 export const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]