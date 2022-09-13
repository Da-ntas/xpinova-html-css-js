export const dataCliente = [
    {
      "codCliente": 100,
      "nomCliente": "XP INOVA",
      "cnpj": "01234567901234",
      "cpf": "012345678",
      "codTributacao": 1,
      "codAcessos": "19238"
    },
    {
      "codCliente": 1010,
      "nomCliente": "Cliente teste",
      "cnpj": "01234367601234",
      "cpf": "012342668",
      "codTributacao": 4,
      "codAcessos": "12378"
    }
]

export const dataTarefas = [
    {
      "codTarefa": 1,
      "nomTarefa": "Emissão do MEI",
      "descTarefa": "Emitir MEI do cliente",
      "clientes": [
        {
            "codCliente": 100
        }
      ]
    }
]

export const dataTributacao = [
    {
      "codTributacao": 1,
      "nomTributacao": "MEI"
    },
    {
      "codTributacao": 2,
      "nomTributacao": "Simples Nacional"
    },
    {
      "codTributacao": 3,
      "nomTributacao": "Lucro Presumido"
    },
    {
      "codTributacao": 4,
      "nomTributacao": "Lucro Real"
    }
  ]