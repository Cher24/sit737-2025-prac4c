# Error Handling Strategies in Microservices

## 1. Circuit Breaker Pattern  
- Prevents repeated failures by temporarily blocking requests to an unresponsive service.
- Helps maintain system stability.
- Example: Netflix's Hystrix library.

## 2. Retry Pattern  
- Automatically retries failed requests after a short delay.
- Useful when failures are due to network latency or temporary issues.

## 3. Fallback Mechanism  
- Provides a default response when a service fails.
- Ensures users receive at least partial functionality rather than a complete failure.

## Conclusion  
Implementing these strategies enhances microservice reliability, user experience, and fault tolerance.

**References:**  
- Fowler, M. (2014). "Microservices and the Circuit Breaker Pattern."  
- Richardson, C. (2017). "Microservices Patterns."
