export default function handler(req, res) {
  // This is a placeholder for Stripe webhook handling
  // In production, verify the event signature with your Stripe secret
  res.status(200).json({ received: true });
}
