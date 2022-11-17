import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Transaction from "./components/Transaction";
import SaldoBox from "./components/SaldoBox";
import AddTransaction from "./components/AddTransaction";

const initTransactions = [
  {
    id: "619941539079",
    tanggal: new Date("09 Nov 2022 12:15").getTime(),
    keterangan: "Gaji Bulanan",
    nominal: 500000,
  },
  {
    id: "619941539080",
    tanggal: new Date("09 Nov 2022 13:15").getTime(),
    keterangan: "Frelance",
    nominal: 500000,
  },
  {
    id: "749179155708",
    tanggal: new Date("09 Nov 2022 10:15").getTime(),
    keterangan: "Kosan",
    nominal: -50000,
  },
];

const App = () => {
  const [transaction, setTransactions] = useState(initTransactions);

  // habdler untuk menambah data transaction
  // akan di trigger dari komponen addtransaction
  const handleTambahTransaction = (data) => {
    let newTransactions = [...transaction, data];

    // atur ulang urutan transaction afgar tanggal terkecil di bagian atas
    newTransactions.sort((a, b) => a.tanggal - b.tanggal);

    setTransactions(newTransactions);
  };

  // handler untuk menghapus data transaction di omponen addtransaction
  const handleHapusTransaction = (event) => {
    // cari index transaction yang akan dihapus berdasarkan id
    const result = transaction.findIndex(
      (transaction) => transaction.id === event.target.id
    );

    //copy transaction karena fungsi splice akan mengubah array asal(mutate)
    const newTransactions = transaction;
    newTransactions.splice(result, 1);
    setTransactions([...newTransactions]);
  };

  console.log(transaction);
  return (
    <React.Fragment>
      <Header />
      <SaldoBox transactions={transaction} />
      <Transaction
        transactionn={transaction}
        onHapusTransaction={handleHapusTransaction}
      />
      <AddTransaction onTambahTransaction={handleTambahTransaction} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
