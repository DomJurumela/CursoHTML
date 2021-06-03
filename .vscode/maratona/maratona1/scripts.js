const Modal = {
    open() {
        // Abrir modal
        // Adicionar a classe active ao modal
        document.querySelector('.modal-overlay').classList.add('active');
    },
    close() {
        // Fechar modal
        // Remover a classe active do modal
        document.querySelector('.modal-overlay').classList.remove('active');

    }
}

const transactions = [{
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021',
},
{
    id: 2,
    description: 'Website',
    amount: 500000,
    date: '23/01/2021',
},
{
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021',
}]

const Transaction = {
    all: transactions,

    add(transaction){
        Transaction.all.push(transaction);
    },

    incomes() {
        let income = 0;
        // pegar todas as transações
        Transaction.all.forEach(transaction => {
            // se for maior que zero
            // somar a uma variável e retornar a variável
            if (transaction.amount > 0) {
                income += transaction.amount;
            }
        })
        return income;
    },
    expenses() {
        let expense = 0;
        // pegar todas as transações
        Transaction.all.forEach(transaction => {
            // se for menor que zero
            // somar a uma variável e retornar a variável
            if (transaction.amount < 0) {
                expense += transaction.amount;
            }
        })
        return expense;
    },
    total() {
        return (Transaction.incomes() + Transaction.expenses());
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    
    addTransaction(transaction, index){
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);
    
        DOM.transactionsContainer.appendChild(tr);
    },
    innerHTMLTransaction(transaction) { 
        const CSSclass = transaction.amount > 0 ? "income" : "expense"
        
        const amount =  Utils.formatCurrency(transaction.amount);

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td class="symbol">
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
            `;

        return html;
    },

    updateBalance() {
        document
            .getElementById('incomeDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.incomes());
        document
            .getElementById('expenseDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.expenses());
        document
            .getElementById('totalDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.total());
    }
}


const Utils = {
    formatCurrency(value) { //transforma número em valor em reais
        const signal = Number(value) < 0 ? "-" : "";
    
    value = String(value).replace(/\D/g, ""); //tira todos os caracteres não numéricos

    value = Number(value)/100;
    
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    return (signal + value);
    }
}







Transaction.add({
    id: 4,
    description: "Testes",
    amount: -3000,
    date: '23/01/2012'
})
console.log(transactions);
DOM.updateBalance();
transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction);
})