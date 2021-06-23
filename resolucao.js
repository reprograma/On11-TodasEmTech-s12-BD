// Usuários podem ter um endereço, podem fazer mais de um pedido e cada pedido pode ter mais de um produto 

const Enderecos = [
    {
        Bairro: "XXXXXXX",
        Rua: "XXXXXXX",
        Numero: "XXXXXXX",
        code: 2
    },
    {
        Bairro: "YYYYY",
        Rua: "YYYY",
        Numero: "YY",
        code: 1
    },

]
const Usuarios = [
    {
        cpf: 00011122233,
        nome: 'XXXXXXXX',
        code: 1
    },
    {
        cpf: 000555522244,
        nome: 'YYYYYYYYY',
        code: 2
    }
]
const Pedidos = [
    {
        status: "AGUARDANDO LIBERACAO...",
        codRastreio: 00011122233,
        code: 1,
        codeUser: 1
    },
    {
        status: "AGUARDANDO PAGAMENTO...",
        codRastreio: 000555522233,
        code: 5,
        codeUser: 2
    },
    {
        status: "AGUARDANDO PAGAMENTO...",
        codRastreio: 000555522233,
        code: 4,
        codeUser: 1
    }


]

const produtos = [
    {
        codePedido: 1,
        code: 1,
        nome: "XXXXXXXXXXXX"

    },
    {
        codePedido: 5,
        code: 5,
        nome: "XXXXXXXXXXXX"

    },
    {
        codePedido: 1,
        code: 2,
        nome: "YYYYYYY"

    },
    {
        codePedido: 4,
        code: 3,
        nome: "ZZZZZZZZZZZZZ"

    }
]



let buscarPedido = (cpf) => {

    let user = Usuarios.find(e => e.cpf == cpf)
    user.endereco = Enderecos.find(e => e.code == user.code)

    let pedidos = Pedidos
        .filter(e => e.codeUser == user.code);

    pedidos.forEach(p => {
        p.produtos = produtos
            .filter(e => e.codePedido == pedidos[0].code)
    })

    user.pedidos = pedidos;
    return user;
}
console.log(buscarPedido(00011122233))