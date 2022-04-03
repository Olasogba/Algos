package funding


import (
	"sync"
	"testing"
)

func BenchmarkFund(b *testing.B) {
	// Add as many dollars as we have iterations this run
	fund := NewFund(b.N)

	// Burn through them one at a time until they're all gone
	for i := 0; i<b.N; i++ {
		fund.Withdraw(1)
	}

	if fund.Balance() != 0 {
		b.Error("Balance wasn't zero:", fund.Balance())
	}
}


const WORKERS = 10

// func BenchmarkWithdrawals(b *testing.B) {
// 	// Skip N = 1
// 	if b.N <WORKERS {
// 		return
// 	}

// 	// Add as many dollars as we have iterations this run
// 	fund := NewFund(b.N)

// 	// Casually assume b.N divides cleanly
// 	dollarsPerFounder := b.N / WORKERS

// 	// WaitGroup structs don't need to be initialized
// 	// (their "zero value" is ready to use).
// 	// So, we just declare one and then use it.
// 	var wg sync.WaitGroup

// 	for i := 0; i<WORKERS; i++ {
// 		// Let the waitgroup know we're adding a goroutine
// 		wg.Add(1)

// 		// Spawn off a founder worker, as a closure
// 		go func() {
// 			// Mark this worker done when the function finishes
// 			defer wg.Done()

// 			for i:=0; i<dollarsPerFounder; i++ {
// 				fund.Withdraw(1)
// 			}
// 		}() // Remember to call the closure
// 	}

// 	wg.Wait()

// 	if fund.Balance() != 0 {
// 		b.Error("Balance wasn't Zero:", fund.Balance())
// 	}
// }

// func BenchmarkWithdrawals(b *testing.B) {
// 	// Skip N = 1
// 	if b.N <WORKERS {
// 		return
// 	}

// 	// Add as many dollars as we have iterations this run
// 	fund := NewFund(b.N)

// 	// Casually assume b.N divides cleanly
// 	dollarsPerFounder := b.N / WORKERS

// 	// WaitGroup structs don't need to be initialized
// 	// (their "zero value" is ready to use).
// 	// So, we just declare one and then use it.
// 	var wg sync.WaitGroup


// 	server := NewFundServer(b.N)

// 	for i := 0; i<WORKERS; i++ {
// 		// Let the waitgroup know we're adding a goroutine
// 		wg.Add(1)

// 		// Spawn off a founder worker, as a closure
// 		go func() {
// 			// Mark this worker done when the function finishes
// 			defer wg.Done()

// 			for i:=0; i<dollarsPerFounder; i++ {
// 				if server.Balance() <= 10 {
// 					break
// 				}
// 				server.Withdraw(1)
// 			}
// 		}() // Remember to call the closure
// 	}

// 	wg.Wait()

// 	balance := server.Balance()
// 	if balance != 10 {
// 		b.Error("Balance wasn't Zero:", fund.Balance())
// 	}
// }


func BenchmarkWithdrawals(b *testing.B) {
	// Skip N = 1
	if b.N <WORKERS {
		return
	}

	// Add as many dollars as we have iterations this run
	fund := NewFund(b.N)

	// Casually assume b.N divides cleanly
	dollarsPerFounder := b.N / WORKERS

	// WaitGroup structs don't need to be initialized
	// (their "zero value" is ready to use).
	// So, we just declare one and then use it.
	var wg sync.WaitGroup


	server := NewFundServer(b.N)
	pizzaTime := false

	for i := 0; i<WORKERS; i++ {
		// Let the waitgroup know we're adding a goroutine
		wg.Add(1)

		// Spawn off a founder worker, as a closure
		go func() {
			// Mark this worker done when the function finishes
			defer wg.Done()
			
			for i:=0; i<dollarsPerFounder; i++ {
				server.Transact(func(fund *Fund) {
					if fund.Balance() <= 10  {
						// Set it in teh outside scope
						pizzaTime = true
						return
					}
					fund.Withdraw(1)
				})
				if pizzaTime {
					break
				}
			}
		}() // Remember to call the closure
	}

	wg.Wait()

	balance := server.Balance()
	if balance != 10 {
		b.Error("Balance wasn't Ten:", fund.Balance())
	}
}