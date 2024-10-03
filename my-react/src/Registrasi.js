import React, { useState } from "react";

function Registrasi() {
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [hp, setHp] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // kirim ke server
    alert(`
      nama: ${nama}
      email: ${email}
      hp: ${hp}
    `);

    console.log(`
      nama: ${nama}
      email: ${email}
      hp: ${hp}
    `);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 class="mb-3">Registrasi</h2>
      <div class="container-fluid">
      <div class="mb-3">
      <label class="form-label">
        Nama:
        <input
          type="text" class="form-control"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </label>
      </div>
      <div class="mb-3">
      <label  class="form-label">
        Email:
        <input class="form-control"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      </div>
      <div class="mb-3">
      <label class="form-label">
        Hp:
        <input class="form-control"
          type="text"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
        />
      </label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      {/* <input type="submit" value="Submit" /> */}
      </div>
    </form>
  );
}

export default Registrasi;