package funding

// import "fmt"

type FundServer struct {
	Commands chan TransactionCommand
	fund     *Fund
}

type WithdrawCommand struct {
	Amount int
}

type BalanceCommand struct {
	Response chan int
}

func NewFundServer(initialBalance int) *FundServer {
	server := &FundServer{
		// make() creates built ins like channels, maps, and slices
		Commands: make(chan TransactionCommand),
		fund:     NewFund(initialBalance),
	}

	// Spawn off the server's main loop immediately
	go server.loop()
	return server
}

func (s *FundServer) loop() {
	// The built-in "range" clause can iterate over channels,
	// amongst other things
	for transaction := range s.Commands {

		// command is just an interface{}, but we can check its real type
		// switch command.(type) {
		// case WithdrawCommand:
		// 	// And then use a "type assertion" to convert it
		// 	withdrawal := command.(WithdrawCommand)
		// 	s.fund.Withdraw(withdrawal.Amount)

		// case BalanceCommand:
		// 	getBalance := command.(BalanceCommand)
		// 	balance := s.fund.Balance()
		// 	getBalance.Response <- balance
		
		// case TransactionCommand:
		// 	transaction := command.(TransactionCommand)
		// 	transaction.Transactor(s.fund)
		// 	transaction.Done <- true

		// default:
		// 	panic(fmt.Sprintf("Unrecognized command: %v", command))
		// }

		transaction.Transactor(s.fund)
		transaction.Done <- true

	}
}


func (s *FundServer) Balance() int {
	// responseChan := make(chan int)
	// s.Commands <- BalanceCommand {Response: responseChan}
	// return <- responseChan
	var balance int
	s.Transact(func(f *Fund) {
		balance = f.Balance()
	})
	return balance
}


func (s *FundServer) Withdraw(amount int) {
	// s.Commands <- WithdrawCommand{Amount: amount}
	s.Transact(func (f *Fund) {
		f.Withdraw(amount)
	})
}


// Typedef the callback for readability
type Transactor func(fund *Fund)

// Add a new command type with a callback and a semaphore channel
type TransactionCommand struct {
	Transactor
	Done chan bool
}


// Wrap it up neatly in an API method, like the other commands
func (s *FundServer) Transact(transactor Transactor) {
	command := TransactionCommand {
		Transactor: transactor,
		Done: make(chan bool),
	}
	s.Commands <- command
	<- command.Done
}