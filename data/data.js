export const dataCliente = [
  {
    "codCliente": 1010,
    "nomCliente": "Cliente",
    "cnpj": "89722389148",
    "cpf": "12342668",
    "codTributacao": "4",
    "codAcessos": "12378",
    "tarefaRel": [
      {
        "codTarefa": 1
      }
    ]
  },
  {
    "nomCliente": "XP INOVA",
    "cnpj": "192837901823",
    "cpf": "18927304981",
    "codTributacao": "2",
    "codAcessos": "1928341",
    "codCliente": 1011,
    "tarefaRel": [
      {
        "codTarefa": 1
      },
      {
        "codTarefa": 3
      }
    ]
  },
  {
    "codCliente": 100,
    "nomCliente": "Editado",
    "cnpj": "1234123901234",
    "cpf": "12344778",
    "codTributacao": "2",
    "codAcessos": "8112439",
    "tarefaRel": [
      {
        "codTarefa": 2
      }
    ]
  }
]

export function formatStatus(status){
  if(status == "FIN") return "FINALIZADO"
  if(status == "PEND") return "PENDENTE"
  if(status == "FZD") return "FAZENDO"
  if(status == "ATV") return "ATIVO"
}

export const dataTarefa = [
  {
    "codTarefa": 1,
    "nomTarefa": "Emissão do MEI",
    "descTarefa": "Emitir MEI do cliente",
    "status": "FIN",
    "clienteRel": [
      {
        "codCliente": 1010
      },
      {
        "codCliente": 1011
      }
    ]
  },
  {
    "codTarefa": 2,
    "nomTarefa": "NAOSEI",
    "descTarefa": "NAO SEI DO cliente",
    "status": "PEND",
    "clienteRel": [
      {
        "codCliente": 100
      }
    ]
  },
  {
    "codTarefa": 3,
    "nomTarefa": "SOPRATER",
    "descTarefa": "TER DO cliente",
    "status": "FIN",
    "clienteRel": [
      {
        "codCliente": 1011
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