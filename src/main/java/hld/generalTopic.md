# Topic
[SSL Transfer](#SSL-Transfer)

## SSL-Transfer

| Approach            | Description                                                          |
| ------------------- | -------------------------------------------------------------------- |
| **SSL Termination** | SSL ends at load balancer (traffic to backend is HTTP).              |
| **SSL Passthrough** | SSL is passed through to backend (decryption happens at backend).    |
| **SSL Bridging**    | Decrypt at load balancer for inspection, then re-encrypt to backend. |
